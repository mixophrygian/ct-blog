import PropTypes from "prop-types";
import React from "react";
import { formatDate } from "../../utils/utils";

// User List Element component
export default class SingleEntryRow extends React.Component {
  constructor(props) {
    super(props);
    this.viewEntry = this.viewEntry.bind(this);
    this.renderDistortionLabels = this.renderDistortionLabels.bind(this);
    this.truncateAndAddMoreLink = this.truncateAndAddMoreLink.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.getTruncateAmountFromDevice = this.getTruncateAmountFromDevice.bind(this);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  viewEntry(e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("data-id");
    if (e.target.tagName !== "SPAN") {
      this.props.history.push(`/entry/${id}`, {});
    }
  }

  getTruncateAmountFromDevice() {
    const { height } = this.state;
    let truncateChars;
    switch (true) {
      // iphone 5
      case height <= 568:
        truncateChars = 60;
        break;
      // iphone 6
      case height <= 667:
        truncateChars = 125;
        break;
      // iphone 6 plus
      case height <= 736:
        truncateChars = 250;
        break;
      // iphone X
      case height <= 812:
        truncateChars = 215;
        break;
      // tablet and up
      default:
        truncateChars = 500;
    }
    return truncateChars;
  }

  renderDistortionLabels(list) {
    /* originally this had the distortion name inside as {shortLabel(label)}
     * But I think it looks better as a colored dot
    */

    if (!list) return;
    return (
      <div className="distortionLabelContainer">
        {list.map(label => <div key={label} className={`${label} distortionLabel`} />)}
      </div>
    );
  }

  truncateAndAddMoreLink(text) {
    const LENGTH = this.getTruncateAmountFromDevice();
    if (text.length > LENGTH) {
      const truncatedText = text.substring(0, LENGTH) + "... ";
      return (
        <span>
          {truncatedText}
          <input type="button" value="more" className="moreLink" onClick={this.viewEntry} />
        </span>
      );
    }
    return <span>{text}</span>;
  }

  render() {
    const { entry } = this.props;
    const date = formatDate(entry.date);
    return (
      <div className="tableRow " data-id={entry.id} onClick={this.viewEntry}>
        <div className="entryDate">{date}</div>
        <div className="entryTitle">{this.truncateAndAddMoreLink(entry.situation)}</div>
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
