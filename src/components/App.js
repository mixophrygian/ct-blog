import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from "react-bootstrap";
import Menu from './common/Menu';
import '../stylesheets/main.scss';
import localforage from 'localforage';

// App component
export class App extends React.Component {
  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that entries list
    localforage.config({ name: "Automatic Thought Journal"});
    this.props.dispatch({ type: 'ENTRIES_FETCH_LIST' });
  }

  // render
  render() {
    const { children, entries } = this.props;
    if (!entries.length) {
      return (
        <ProgressBar active now={100}/>
      );
    }
    // render
    return (
      <div className="container">
        <div>
          <Menu children={children} />
        </div>
        <div className="footer">
          <p>some footer content</p>
        </div>
      </div>
    );
  }
}
// prop checks
App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  entries: PropTypes.any,
};

// export the connected class
function mapStateToProps(state) {
  return {
    entries: state.entries || [],
  };
}
export default connect(mapStateToProps)(App);
