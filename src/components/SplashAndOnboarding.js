/* eslint-disable react/prop-types */
import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import { browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

export default class SplashAndOnboarding extends React.Component {
  componentDidMount() {
   browserHistory.replace('/');
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
      arrows: false
    };

    return (
      <div className="page-splash">
          <Slider {...settings}>
          <div className="slide-wrapper">
            <div className="slide-container">
              <h3>1</h3>
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <h3>2</h3>
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <h3>3</h3>
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <h3>4</h3>
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <h3>5</h3>
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="slide-container">
              <h3> last</h3>
              Hi I'm a splash page.
              <Button onClick={this.props.hide}>Click me to dismiss</Button>
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
