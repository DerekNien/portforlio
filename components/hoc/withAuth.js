import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../layouts/BasePage';

export default function(Com) {
  return class withAuth extends Component {
    static async getInitialProps(args) {
      const pageProps =
        Com.getInitialProps && (await Com.getInitialProps(args));
      return { ...pageProps };
    }

    renderProtectedPage = () => {
      const { isAuthenticated } = this.props.auth;
      if (isAuthenticated) {
        return <Com {...this.props} />;
      } else {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>
              <h1>You are not authenticated</h1>
            </BasePage>
          </BaseLayout>
        );
      }
    };

    render() {
      return this.renderProtectedPage();
    }
  };
}
