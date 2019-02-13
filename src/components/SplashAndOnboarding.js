/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

import React from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import BalloonIllustration from "./art/airBalloonIllustration.svg";
import HeartHand from "./art/heart-hand.svg";
import Potion from "./art/potion.svg";
import Puzzle from "./art/puzzle.svg";

export default class SplashAndOnboarding extends React.Component {
  componentDidMount() {
    if (this.props.history) {
      this.props.history.replace("/");
    }
  }

  render() {
    const settings = {
      infinite: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: false,
      arrows: true,
    };

    return (
      <div className="page-splash">
        <Slider {...settings}>
          <div className="slide-wrapper">
            <div className="slide-container">
              <div>
                <h3>Automatic</h3>
                <h3>Thought</h3>
                <h3>Journal</h3>
              </div>
              <img src={BalloonIllustration} />
              <p>
                <i>
                  "Your thoughts create your emotions. Therefore, your emotions cannot prove that
                  your thoughts are accurate."
                  <br />
                  <br />
                  David Burns
                </i>
              </p>
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <Button className="closeIcon" onClick={this.props.hide}>
                <div aria-hidden="true">&times;</div>
              </Button>
              <h3>Cognitive Distortions?</h3>
              <br />
              <img src={HeartHand} />
              <p>
                This micro blog was created to be used as a companion tool for the book{" "}
                <b>Feeling Good</b>
                {} by David Burns. In this book he outlines an exercize in which someone who has
                experienced an automatic thought can methodically break it down into manageable
                pieces.
              </p>
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <Button className="closeIcon" onClick={this.props.hide}>
                <div aria-hidden="true">&times;</div>
              </Button>
              <h3>How do I use this?</h3>
              <br />
              <img src={Puzzle} />

              <p>
                By noticing the pattern that the thoughts follow, you start to see the distortions
                for what they are - distortions - and begin to recognize them before believing that
                they are the truth.
              </p>
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <h3>Try it out!</h3>
              <br />
              <img src={Potion} />
              <p>
                Read more about the cognitive distortions from the side menu and in David Burns'{" "}
                <b>Feeling Good</b>. Use this journal anonymously or create a free account to save
                your entries across devices.
              </p>
              <Button className="gotItButton" onClick={this.props.hide}>
                Got it!
              </Button>
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
