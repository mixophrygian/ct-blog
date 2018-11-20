import PropTypes from "prop-types";
import React from "react";
import { formatDate } from "../../utils/utils";

// User List Element component
export default class SingleEntryRow extends React.Component {
  constructor(props) {
    super(props);
    this.viewEntry = this.viewEntry.bind(this);
    this.renderDistortionLabels = this.renderDistortionLabels.bind(this);
  }

  viewEntry(e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("data-id");
    if (e.target.tagName !== "SPAN") {
      this.props.history.push(`/entry/${id}`, {});
    }
  }

  renderDistortionLabels(list) {
    if (!list) return;
    return (
      <div className="distortionLabelContainer">
        {list.map(label => <div className={`${label} distortionLabel`}>{label}</div>)}
      </div>
    );
  }

  render() {
    const { entry } = this.props;
    const date = formatDate(entry.date);

    return (
      <div className="tableRow " data-id={entry.id} onClick={this.viewEntry}>
        <div className="entryDate">{date}</div>
        <div className="entryTitle">{entry.situation}</div>
        {this.renderDistortionLabels(entry.cognitiveDistortions)}
      </div>
    );
  }
}
/* <a href="">more</a> */

// prop checks
SingleEntryRow.propTypes = {
  entry: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
