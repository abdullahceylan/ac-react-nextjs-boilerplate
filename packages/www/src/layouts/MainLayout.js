import React from 'react';
import PropTypes from 'prop-types';
import { LayoutContainer, Content } from '@styles';

const MainLayout = ({ children }) => (
  <LayoutContainer>
    <Content>{children}</Content>
  </LayoutContainer>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
