/* eslint-disable react/prop-types */
import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import { browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

// SplashAndOnboarding page component

function SampleNextArrow(props) {
  const {className, onClick} = props
  return (
    <div
      className={className}
      style={{ display: 'block', background: 'rgba(0,0,0,0.5)'}}
      onClick={onClick}
    ></div>
  );
}

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
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />
    };
    return (
      <div className="page-splash">
          <Slider {...settings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div>
              <h3> last</h3>
              Hi I'm a splash page.
              <Button onClick={this.props.hide}>Click me to dismiss</Button>
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
