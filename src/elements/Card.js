import React from "react";

import PropTypes from "prop-types";

export default function Card(props) {
  const className = ["tiles-item", props.className];

  return (
    <div className={className.join(" ")}>
      <div
        className={`tiles-item-inner ${props.hasShadow ? "has-shadow" : ""}`}
      >
        {props.children}
      </div>
    </div>
  );
}

Card.PropTypes = {
  className: PropTypes.string,
  hasShadow: PropTypes.bool,
};
