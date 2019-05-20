import React from 'react';
import { Container } from 'reactstrap';

const BasePage = props => {
  const { className, title, children } = props;
  return (
    <div className={`base-page ${className}`}>
      <Container>
        {title && (
          <div className="page-header">
            <h1 className="page-header-title">{title}</h1>
          </div>
        )}
        {children}
      </Container>
    </div>
  );
};

BasePage.defaultProps = {
  className: '',
};

export default BasePage;
