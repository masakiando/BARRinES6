import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Result = ({
  conuter
}) => {
  return (
    <div>{conuter}</div>
  );
};
Result.propTypes = {
  conuter: PropTypes.object.isRequired
};
export default Result;
