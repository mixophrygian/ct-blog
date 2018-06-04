import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table } from "react-bootstrap";
// import Pagination from "react-bootstrap/lib/Pagination";
import SingleEntryRow from "./SingleEntryRow";
import NoEntries from "./NoEntries";
import EntryDeletePrompt from "./EntryDeletePrompt";
import InheritEntriesPrompt from "./InheritEntriesPrompt";
import db from "../../api/db.js";

export class EntryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteShow: false,
      deleteEntry: {},
    };

    this.changePage = this.changePage.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
    this.entryDelete = this.entryDelete.bind(this);
    this.hideInheritEntriesPrompt = this.hideInheritEntriesPrompt.bind(this);
  }

  changePage(page) {
    this.props.dispatch(push(`/?page=${page}`));
  }

  showDelete(entry) {
    this.setState({
      deleteShow: true,
      deleteEntry: entry,
    });
  }

  hideDelete() {
    this.setState({
      deleteShow: false,
      deleteEntry: {},
    });
  }

  hideInheritEntriesPrompt() {
    this.props.dispatch({ type: "HIDE_INHERIT_ENTRIES_PROMPT" });
  }

  entryDelete() {
    const { dispatch, auth } = this.props;
    const { deleteEntry } = this.state;
    dispatch({
      type: "ENTRIES_DELETE",
      entry: deleteEntry,
    });
    db.deleteEntryFromDB(deleteEntry, auth);
    this.hideDelete();
  }

  render() {
    const { entries, page, showInheritEntriesPrompt } = this.props;
    const perPage = 10;
    // const pages = Math.ceil(entries.length / perPage);
    const startOffset = (page - 1) * perPage;
    let startCount = 0;
    const savedEntries = entries.length ? (
      <div>
        <Table bordered hover responsive striped className="Table">
          <tbody>
            {entries.map((entry, index) => {
              if (index >= startOffset && startCount < perPage) {
                startCount++;
                return (
                  <SingleEntryRow
                    history={this.props.history}
                    key={index}
                    entry={entry}
                    showDelete={this.showDelete}
                    className="SingleEntryRow"
                  />
                );
              }
            })}
          </tbody>
        </Table>

        {/*
      <Pagination
        className="entries-pagination"
        bsSize="medium"
        maxButtons={10}
        first
        last
        next
        prev
        boundaryLinks
        items={pages}
        activePage={page}
        onSelect={this.changePage}
      />
      */}
        <InheritEntriesPrompt
          show={showInheritEntriesPrompt}
          hide={this.hideInheritEntriesPrompt}
        />
        <EntryDeletePrompt
          show={this.state.deleteShow}
          hideDelete={this.hideDelete}
          entryDelete={this.entryDelete}
        />
      </div>
    ) : (
      <NoEntries history={this.props.history} className="SingleEntryRow" />
    );
    return (
      <div className="EntryList">
        <h2>Automatic Thought Journal</h2>
        {savedEntries}
      </div>
    );
  }
}

EntryList.propTypes = {
  entries: PropTypes.any,
  dispatch: PropTypes.func,
  history: PropTypes.object,
  page: PropTypes.number,
  auth: PropTypes.object,
  showInheritEntriesPrompt: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    showInheritEntriesPrompt: state.showInheritEntriesPrompt,
    entries: state.entries,
    page: 1,
  };
}

// Number(state.routing.locationBeforeTransitions.query.page) || 1,
export default connect(mapStateToProps)(EntryList);
