import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../layouts/BasePage';

const namespace = 'http://localhost:3000/';

export default role => Com =>
  class withAuth extends Component {
    static async getInitialProps(args) {
      const pageProps =
        Com.getInitialProps && (await Com.getInitialProps(args));
      return { ...pageProps };
    }

    renderProtectedPage = () => {
      const { isAuthenticated, user } = this.props.auth;
      const userRole = user && user[`${namespace}role`];
      let isAuthorized = false;

      if (role) {
        if (userRole && userRole === role) {
          isAuthorized = true;
        }
      } else {
        isAuthorized = true;
      }

      if (!isAuthenticated) {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage className="base-page">
              <h1>You are not authenticated</h1>
            </BasePage>
          </BaseLayout>
        );
      } else if (!isAuthorized) {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage className="base-page">
              <h1>
                You are not authorized. You don't have a permission to access
                this page.
              </h1>
            </BasePage>
          </BaseLayout>
        );
      } else {
        return <Com {...this.props} />;
      }
    };

    render() {
      return this.renderProtectedPage();
    }
  };
