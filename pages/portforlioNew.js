import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
import PortforlioCreateForm from '../components/portforlios/PortforlioCreateForm';

import { Row, Col } from 'reactstrap';

import withAuth from '../components/hoc/withAuth';

class ProtforlioNew extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portforlio-create-page"
          title="Create New Portforlio"
        >
          <Row>
            <Col md="6">
              <PortforlioCreateForm />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(ProtforlioNew);
