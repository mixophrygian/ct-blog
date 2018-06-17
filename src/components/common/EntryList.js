import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table } from "react-bootstrap";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import SingleEntryRow from "./SingleEntryRow";
import NoEntries from "./NoEntries";
import AreYouSurePrompt from "./AreYouSurePrompt";
import InheritEntriesPrompt from "./InheritEntriesPrompt";

export class EntryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteShow: false,
      deleteEntry: {},
      currentPage: 1,
    };

    this.changePage = this.changePage.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
    this.entryDelete = this.entryDelete.bind(this);
    this.hideInheritEntriesPrompt = this.hideInheritEntriesPrompt.bind(this);
  }

  changePage(page) {
    this.setState({ currentPage: page });
    this.props.dispatch(push(`page?/page=${page}`));
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
    const { dispatch } = this.props;
    const { deleteEntry } = this.state;
    dispatch({
      type: "ENTRIES_DELETE",
      entry: deleteEntry,
    });
    this.hideDelete();
  }

  render() {
    const { entries, showInheritEntriesPrompt } = this.props;
    const { currentPage } = this.state;
    const PER_PAGE = 6;
    const startOffset = (currentPage - 1) * PER_PAGE;
    let startCount = 0;
    const savedEntries = entries.length ? (
      <div>
        <Table bordered hover striped className="Table">
          <tbody>
            {entries.map((entry, index) => {
              if (index >= startOffset && startCount < PER_PAGE) {
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
      </div>
    ) : (
      <NoEntries history={this.props.history} className="SingleEntryRow" />
    );
    return (
      <div className="EntryList">
        <h2>Automatic Thought Journal</h2>
        {savedEntries}
        <Pagination
          onChange={this.changePage}
          current={currentPage}
          defaultPageSize={PER_PAGE}
          total={entries.length}
          showLessItems
        />
        <InheritEntriesPrompt
          show={showInheritEntriesPrompt}
          hide={this.hideInheritEntriesPrompt}
        />
        <AreYouSurePrompt
          show={this.state.deleteShow}
          hidePrompt={this.hideDelete}
          confirmAction={this.entryDelete}
          text="Are you sure you want to delete this one?"
        />
      </div>
    );
  }
}

EntryList.propTypes = {
  entries: PropTypes.any,
  dispatch: PropTypes.func,
  history: PropTypes.object,
  showInheritEntriesPrompt: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    showInheritEntriesPrompt: state.showInheritEntriesPrompt,
    entries: state.entries,
  };
}

export default connect(mapStateToProps)(EntryList);
