import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from './common/Menu';
import '../stylesheets/main.scss';
import localforage from 'localforage';
import { isLoadingAsync } from '../utils/utils';

export class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       isLoading: true,
     }
  }

  componentWillMount() {
    localforage.config({ name: "Automatic Thought Journal"});
    this.props.dispatch({
      type: 'ENTRIES_FETCH_LIST',
    });
    this.props.dispatch({
      type: 'CHECK_IF_ONBOARDED',
    });
  }

  componentWillReceiveProps(nextProps) {
    const hasEnoughStateToLoad = !isLoadingAsync(nextProps.entries) && !isLoadingAsync(nextProps.onboarded);
    if (hasEnoughStateToLoad) {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    if (isLoadingAsync(this.props.entries)) return;
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    const { children } = this.props;
    scrollToTop();
    if (isLoading) {
      return null;
    }
    return (
      <div>
        <div className="container">
          <div>
            <Menu children={children} />
          </div>
        </div>
        <div className="plzNoLandscape">
          We think you'll like this better in portrait mode.
        </div>
      </div>
    );
  }
}

function scrollToTop() {
  // hack due to crazy component heights due to the sidebar library due to poor choices
  const parent = document.getElementsByClassName("page")[0];
    if (parent) {
      parent.parentElement.scrollTo(0, 1);
    }
}

function mapStateToProps(state) {
  return {
    entries: state.entries || [],
    onboarded: state.onboarded,
  };
}

App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  entries: PropTypes.any,
  onboarded: PropTypes.any,
};

export default connect(mapStateToProps)(App);

