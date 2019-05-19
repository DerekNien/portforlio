import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

import withAuth from '../components/hoc/withAuth';

import { getSecretData } from '../actions';

class Secret extends Component {
  static async getInitialProps({ req }) {
    const anotherSecretData = await getSecretData(req);
    return { anotherSecretData };
  }

  state = {
    secretData: [],
  };

  async componentDidMount() {
    const secretData = await getSecretData();
    this.setState({
      secretData,
    });
  }

  displaySecretData = () => {
    const { secretData } = this.state;
    if (secretData && secretData.length > 0) {
      return secretData.map((data, index) => (
        <div key={index}>
          <p>{data.title}</p>
          <p>{data.description}</p>
        </div>
      ));
    }

    return null;
  };

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>Secret</h1>
          {this.displaySecretData()}
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth()(Secret);
