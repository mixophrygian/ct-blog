import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';


// SplashAndOnboarding page component
export default class SplashAndOnboarding extends React.Component {
  componentDidMount() {
   browserHistory.replace('/');
  }

  render() {
    return (
      <div className="page-splash">
        <div className="content">
          Hi I'm a splash page.
          <Button onClick={this.props.hide}>Click me to dismiss</Button>
        </div>
      </div>
    );
  }
}

SplashAndOnboarding.propTypes = {
  hide: PropTypes.func,
};
