import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

const Cv = props => (
  <BaseLayout {...props.auth}>
    <BasePage>
      <h1>Cv</h1>
    </BasePage>
  </BaseLayout>
);

export default Cv;
