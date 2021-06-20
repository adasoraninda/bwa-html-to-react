import React from "react";

import PropTypes from "prop-types";

export default function ListsPricing(props) {
  const className = ["list-reset", props.className];

  if (props.isSmall) {
    className.push("text-xs");
  }

  return (
    <ul className={className.join(" ")}>
      {props.data.map((price, index) => (
        <li key={index} className={price.isChecked ? "is-checked" : ""}>
          {price.content}
        </li>
      ))}
    </ul>
  );
}

ListsPricing.PropTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  isSmall: PropTypes.bool,
};
