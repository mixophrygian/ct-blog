import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import SingleEntryRow from "./SingleEntryRow";
import NoEntries from "./NoEntries";
import EntryDeletePrompt from "./EntryDeletePrompt";

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
  }

  render() {
    const { entries, page } = this.props;
    const perPage = 10;
    const pages = Math.ceil(entries.length / perPage);
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

        <EntryDeletePrompt
          show={this.state.deleteShow}
          entry={this.state.deleteEntry}
          hideDelete={this.hideDelete}
          entryDelete={this.entryDelete}
        />
      </div>
    ) : (
      <NoEntries className="SingleEntryRow" />
    );
    return (
      <div className="EntryList">
        <h2>Automatic Thought Journal</h2>
        {savedEntries}
      </div>
    );
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

  entryDelete() {
    this.props.dispatch({
      type: "ENTRIES_DELETE",
      entry: this.state.deleteEntry,
    });

    this.hideDelete();
  }
}

EntryList.propTypes = {
  entries: PropTypes.any,
  dispatch: PropTypes.func,
  page: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    entries: state.entries,

    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}
export default connect(mapStateToProps)(EntryList);
