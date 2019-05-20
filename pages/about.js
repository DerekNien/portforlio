import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

const About = props => (
  <BaseLayout {...props.auth}>
    <BasePage className="about-page" title="I am about page" />
  </BaseLayout>
);

export default About;
