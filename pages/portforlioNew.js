import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
import PortforlioCreateForm from '../components/portforlios/PortforlioCreateForm';

import withAuth from '../components/hoc/withAuth';

class ProtforlioNew extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portforlio-create-page"
          title="Create New Portforlio"
        >
          <PortforlioCreateForm />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(ProtforlioNew);
