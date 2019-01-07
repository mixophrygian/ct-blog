/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";

const CheckMark = props => (
  <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm6.25 6.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z" />
  </svg>
);

export default CheckMark;

CheckMark.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};
