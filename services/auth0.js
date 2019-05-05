import auth0 from 'auth0-js'

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dereknien.auth0.com',
      clientID: 'DfykSU0Su0NyJjJ5FfPZ4Y8yJbh7HHp5',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    })
  }

  login = () => {
    this.auth0.authorize()
  }
}

const auth0Client = new Auth0()

export default auth0Client
