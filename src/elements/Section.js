import React from "react";

import PropTypes from "prop-types";

export default function Section(props) {
  const className = ["section", props.className];

  if (props.isCenteredContent) {
    className.push("center-content");
  }

  return <section className={className.join(" ")}>{props.children}</section>;
}

Section.PropTypes = {
  className: PropTypes.string,
  isCenteredContent: PropTypes.bool,
};
