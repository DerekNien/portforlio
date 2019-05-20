import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

const Blogs = props => (
  <BaseLayout {...props.auth}>
    <BasePage>
      <h1>Blogs</h1>
    </BasePage>
  </BaseLayout>
);

export default Blogs;
