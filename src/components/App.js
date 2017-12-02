import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from './common/Menu';
import '../stylesheets/main.scss';
import localforage from 'localforage';

export class App extends React.Component {
  componentWillMount() {
    localforage.config({ name: "Automatic Thought Journal"});
    this.props.dispatch({ type: 'ENTRIES_FETCH_LIST' });
  }

  render() {
    const { children } = this.props;
    scrollToTop();
    return (
      <div className="container">
        <div>
          <Menu children={children} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  entries: PropTypes.any,
};

function scrollToTop() {
  // hack due to crazy component heights due to the sidebar library due to poor choices
  const parent = document.getElementsByClassName("page")[0];
    if (parent) {
      parent.parentElement.scrollTo(0, 0);
    }
}

function mapStateToProps(state) {
  return {
    entries: state.entries || [],
  };
}
export default connect(mapStateToProps)(App);
