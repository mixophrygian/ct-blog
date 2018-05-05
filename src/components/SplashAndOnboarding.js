/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

import React from "react";
import Slider from "react-slick";
import { history } from "history";
import { Button } from "react-bootstrap";
import Flowers from "./art/Flowers.svg";
import AirBalloon from "./art/AirBalloon.svg";
import Monkeys from "./art/Monkeys.svg";
import FingerPuppets from "./art/FingerPuppets.svg";

export default class SplashAndOnboarding extends React.Component {
  componentDidMount() {
    history.replace("/");
  }

  render() {
    const settings = {
      infinite: false,
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: true,
      arrows: false,
    };

    return (
      <div className="page-splash">
        <Slider {...settings}>
          <div className="slide-wrapper">
            <div className="slide-container">
              <Button className="closeIcon" onClick={this.props.hide}>
                <div aria-hidden="true">&times;</div>
              </Button>
              <h3>Automatic</h3>
              <h3>Thought</h3>
              <h3>Journal</h3>
              <br />
              <p>
                <i>
                  "Your thoughts create your emotions. Therefore, your emotions cannot prove that
                  your thoughts are accurate." - David Burns.
                </i>
              </p>
              <br />
              <p>
                Hi! The Automatic Thought Journal is a micro blog for deconstructing cognitive
                distortions.
              </p>
              <img src={Flowers} />
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <Button className="closeIcon" onClick={this.props.hide}>
                <div aria-hidden="true">&times;</div>
              </Button>
              <h3>Cognitive Distortions?</h3>
              <br />
              <p>
                This micro blog was created to be used as a companion tool for the book{" "}
                <b>Feeling Good</b>
                by David Burns.
              </p>
              <br />
              <p>
                In this book he outlines an exercize in which someone who has experienced an
                automatic thought can methodically break it down into manageable pieces.
              </p>
              <img src={AirBalloon} />
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <Button className="closeIcon" onClick={this.props.hide}>
                <div aria-hidden="true">&times;</div>
              </Button>
              <h3>How do I use this?</h3>
              <br />
              <p>
                In this book he outlines an exercize in which someone who has experienced an
                automatic thought can methodically break it down into manageable pieces.
              </p>
              <br />
              <p>
                By noticing the pattern that the thoughts follow, you start to see the distortions
                for what they are - distortions.
              </p>
              <img src={Monkeys} />
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <h3>Try it out!</h3>
              <br />
              <p>We don't save your data, in fact it never leaves this phone.</p>
              <br />
              <p>
                Read more about the cognitive distortions from the menu and in David Burns'{" "}
                <b>Feeling Good</b>.
              </p>
              <p>[This onboarding flow only appears when a user has no entries]</p>
              <img src={FingerPuppets} />
              <Button onClick={this.props.hide}>Got it!</Button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

SplashAndOnboarding.propTypes = {
  hide: PropTypes.func,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
