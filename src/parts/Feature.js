import React from "react";
import { Fade } from "react-awesome-reveal";
import PropTypes from "prop-types";

export default function Feature(props) {
  return (
    <div className="tiles-item">
      <Fade direction="up" delay={props.delayInMs}>
        <div className="tiles-item-inner">
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <img
                src={props.data.imgSrc}
                alt={props.data.imgAlt}
                width="64"
                height="64"
              />
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">{props.data.title}</h4>
            <p className="m-0 text-sm">{props.data.description}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

Feature.PropTypes = {
  delayInMs: PropTypes.number,
  data: PropTypes.object,
};
