import React from 'react';
import EntryList from './common/EntryList';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <EntryList />
      </div>
    );
  }
}
