import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Table, Pagination } from 'react-bootstrap';
import SingleEntryRow from './SingleEntryRow';
import EntryDeletePrompt from './EntryDeletePrompt';

// User list component
export class EntryList extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      deleteShow: false,
      deleteEntry: {},
    };

    // bind <this> to the event method
    this.changePage = this.changePage.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
    this.entryDelete = this.entryDelete.bind(this);
  }

  // render
  render() {
    // pagination
    const { entries, page } = this.props;
    const perPage = 10;
    const pages = Math.ceil(entries.length / perPage);
    const startOffset = (page - 1) * perPage;
    let startCount = 0;

    // show the list of entries
    return (
      <div className="EntryList">
        <h1>CBT blog</h1>
        <Table bordered hover responsive striped className="Table">
          <tbody>
            {entries.map((entry, index) => {
              if (index >= startOffset && startCount < perPage) {
                startCount++;
                return (
                  <SingleEntryRow key={index} entry={entry} showDelete={this.showDelete} className="SingleEntryRow" />
                );
              }
            })}
          </tbody>
        </Table>

        <Pagination
          className="entries-pagination" bsSize="medium" maxButtons={10} first last next
          prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}
        />

        <EntryDeletePrompt
          show={this.state.deleteShow} entry={this.state.deleteEntry}
          hideDelete={this.hideDelete} entryDelete={this.entryDelete}
        />
      </div>
    );
  }

  // change the entry lists' current page
  changePage(page) {
    this.props.dispatch(push(`/?page=${page}`));
  }

  // show the delete entry prompt
  showDelete(entry) {
    // change the local ui state
    this.setState({
      deleteShow: true,
      deleteEntry: entry,
    });
  }

  // hide the delete entry prompt
  hideDelete() {
    // change the local ui state
    this.setState({
      deleteShow: false,
      deleteEntry: {},
    });
  }

  // delete the entry
  entryDelete() {
    // delete the entry
    this.props.dispatch({
      type: 'ENTRIES_DELETE',
      entry: this.state.deleteEntry,
    });

    // hide the prompt
    this.hideDelete();
  }
}

EntryList.propTypes = {
  entries: PropTypes.array,
  dispatch: PropTypes.func,
  page: PropTypes.number,
}

// export the connected class
function mapStateToProps(state) {
  return {
    entries: state.entries,

    // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
    // react-router-redux wants you to get the url data by passing the props through a million components instead of
    // reading it directly from the state, which is basically why you store
    // the url data in the state (to have access to it)
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}
export default connect(mapStateToProps)(EntryList);
