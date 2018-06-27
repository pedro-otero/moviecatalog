import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paragraph = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Truncate = ({ value }) => <Paragraph>{value}</Paragraph>;

Truncate.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Truncate;
