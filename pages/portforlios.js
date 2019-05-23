import React, { Component, Fragment } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
import { Link } from '../routes';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';

import axios from 'axios';

class Portforlios extends Component {
  static async getInitialProps() {
    let portforlios = [];
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      portforlios = response.data;
    } catch (err) {
      console.error(err);
    }

    return { portforlios: portforlios.splice(0, 10) };
  }

  renderPortforlios = portforlios =>
    portforlios.map((portforlio, index) => (
      <Col md="4" key={index}>
        <span>
          <Card className="portforlio-card">
            <CardHeader className="portforlio-card-header">
              Some Position {index}
            </CardHeader>
            <CardBody>
              <p className="portforlio-card-city"> Some Location {index} </p>
              <CardTitle className="portforlio-card-title">
                Some Company {index}
              </CardTitle>
              <CardText className="portforlio-card-text">
                Some Description {index}
              </CardText>
              <div className="readMore"> </div>
            </CardBody>
          </Card>
        </span>
      </Col>
    ));

  render() {
    const { portforlios } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portforlio-page" title="Portforlios">
          <Row>{this.renderPortforlios(portforlios)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portforlios;
