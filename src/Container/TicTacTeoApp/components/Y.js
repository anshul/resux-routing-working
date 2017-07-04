import React from 'react';
import PropTypes from 'prop-types';

const Y = props => <div className="xo" onClick={() => props.makeYourMove(props.turn)} />;

Y.propTypes = {
  makeYourMove: PropTypes.func.isRequired,
};

export default Y;
