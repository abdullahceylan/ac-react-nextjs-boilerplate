import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '@styles';
import {
  HomeWrapper
} from './Home.styles';

const Home = (props) => (
  <HomeWrapper>
    <Row>
      <Column md={6}>
        Test
      </Column>
      <Column md={6}>
        Test 2
      </Column>
    </Row>
  </HomeWrapper>
);

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
