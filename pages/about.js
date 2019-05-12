import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

const About = () => (
  <BaseLayout {...this.props.auth}>
    <BasePage>
      <h1>About</h1>
    </BasePage>
  </BaseLayout>
);

export default About;
