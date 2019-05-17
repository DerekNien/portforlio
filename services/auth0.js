import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';

import { getCookieFromReq } from '../helpers/utils';

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dereknien.auth0.com',
      clientID: 'DfykSU0Su0NyJjJ5FfPZ4Y8yJbh7HHp5',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile',
    });
  }

  handleAuthentication = () => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          console.log(err);
          reject(err);
        }
      });
    });
  };

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();

    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
  }

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

    this.auth0.logout({
      redirectTo: '',
      clientID: 'DfykSU0Su0NyJjJ5FfPZ4Y8yJbh7HHp5',
    });
  };

  getJWKS = async () => {
    const response = await axios.get(
      'https://dereknien.auth0.com/.well-known/jwks.json'
    );
    const jwks = response.data;
    return jwks;
  };

  verifyToken = async token => {
    if (token) {
      const decodedToken = jwt.decode(token, { complete: true });
      if (!decodedToken) return undefined;
      const jwks = await this.getJWKS();
      const jwk = jwks.keys[0];
      // Build Certificate
      let cert = jwk.x5c[0];
      cert = cert.match(/.{1,64}/g).join('\n');
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;

      if (jwk.kid === decodedToken.header.kid) {
        try {
          const verifiedToken = jwt.verify(token, cert);
          const expiresAt = verifiedToken.exp * 1000;
          return verifiedToken && new Date().getTime() < expiresAt
            ? verifiedToken
            : undefined;
        } catch (err) {
          return undefined;
        }
      }
    }
    return undefined;
  };

  clientAuth = async () => {
    const token = Cookies.getJSON('jwt');
    const verifiedToken = await this.verifyToken(token);
    return verifiedToken;
  };

  serverAuth = async req => {
    if (req.headers.cookie) {
      const token = getCookieFromReq(req, 'jwt');
      const verifiedToken = await this.verifyToken(token);
      return verifiedToken;
    }
    return undefined;
  };
}

const auth0Client = new Auth0();

export default auth0Client;
