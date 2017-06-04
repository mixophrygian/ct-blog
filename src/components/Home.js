import React from 'react';
import EntryList from './common/EntryList';
import { browserHistory } from 'react-router';


// Home page component
export default class Home extends React.Component {
  componentDidMount() {
   browserHistory.replace('/');
  }

  render() {
    return (
      <div className="page-home">
        <EntryList />
      </div>
    );
  }
}
