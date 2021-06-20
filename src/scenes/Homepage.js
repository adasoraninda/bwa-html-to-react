import React from "react";
import { Fade } from "react-awesome-reveal";

import Section from "elements/Section";
import Header from "parts/Header";
import Clients from "parts/Clients";
import Feature from "parts/Feature";

import HeroImage from "assets/images/hero-image.png";

import FeatureImage1 from "assets/images/feature-tile-icon-01.svg";
import FeatureImage2 from "assets/images/feature-tile-icon-02.svg";
import FeatureImage3 from "assets/images/feature-tile-icon-03.svg";

export default function Homepage() {
  const features = [
    {
      title: "Join the system",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
      imgSrc: FeatureImage1,
      imgAlt: "Feature tile icon 01",
    },
    {
      title: "Join the system",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
      imgSrc: FeatureImage2,
      imgAlt: "Feature tile icon 02",
    },
    {
      title: "Join the system",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
      imgSrc: FeatureImage3,
      imgAlt: "Feature tile icon 03",
    },
  ];

  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade direction="up" delay={500}>
                  <h1 className="mt-0 mb-16">Landing template for startups</h1>
                </Fade>
                <div className="container-xs">
                  <Fade direction="up" delay={1000}>
                    <p className="mt-0 mb-32">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="hero-figure illustration-element-01">
                <Fade direction="up" delay={1500}>
                  <img
                    className="has-shadow"
                    src={HeroImage}
                    alt="Hero image"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Section className="clients">
          <Fade direction="up" delay={1500}>
            <Clients />
          </Fade>
        </Section>
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => {
                  return (
                    <Feature
                      key={index}
                      delayInMs={index * 500}
                      data={feature}
                    ></Feature>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
