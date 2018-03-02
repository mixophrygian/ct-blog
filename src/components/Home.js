import React, { PropTypes } from 'react';
import EntryList from './common/EntryList';
import SplashAndOnboarding from './SplashAndOnboarding';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { isPromise } from '../utils/utils';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     showSplash: false,
    };
    this.hideSplash = this.hideSplash.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entries.length || isPromise(nextProps)) {
      this.hideSplash();
    } else {
      this.setState({ showSplash: true })
    }
  }
  componentDidMount() {
   browserHistory.replace('/');
   if (this.props.entries.length || isPromise(this.props)) {
      this.hideSplash();
    } else {
      this.setState({ showSplash: true })
    }
  }

  hideSplash() {
    this.setState({ showSplash: false });
  }

  render() {
    return (
      this.state.showSplash ?
        <SplashAndOnboarding hide={this.hideSplash}/> :
        <div className="page-home">
          <EntryList />
        </div>
    );
  }
}

Home.propTypes = {
  entries: PropTypes.any,
};

function mapStateToProps(state) {
  return {
    entries: state.entries || [],
  };
}
export default connect(mapStateToProps)(Home);
