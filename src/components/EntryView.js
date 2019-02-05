import PropTypes from "prop-types";
import React from "react";
import { Button } from "react-bootstrap";
import colors from "../stylesheets/colors.scss";
import CheckMark from "./icons/checkmark.js";
import AreYouSurePrompt from "./common/AreYouSurePrompt";
import { labelMap, formatDate } from "../utils/utils";

export class EntryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteShow: false,
    };
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
    this.entryDelete = this.entryDelete.bind(this);
    this.renderDistortions = this.renderDistortions.bind(this);
  }

  componentWillMount() {
    const { entry, history } = this.props;
    if (!entry || !entry.id) {
      history.replace("/");
    }
  }

  render() {
    const { entry } = this.props;
    if (!entry) return null;
    const distortions = this.renderDistortions(entry.cognitiveDistortions);
    return (
      <div className="page-entry-view page">
        <div className="date">{formatDate(entry.date)}</div>
        <h3 className="header">Thought</h3>
        <div>
          <div className="header">Situation</div>
          <p>{entry.situation}</p>
        </div>
        <div>
          <div className="header">Emotional Response</div>
          <p>{entry.emotionalResponse || ""}</p>
        </div>
        <div>
          <div className="header">Initial Thoughts</div>
          <p>{entry.automaticThoughts || ""}</p>
        </div>
        <div className="header distortionsHeader">Distortions</div>
        <div className="distortions-container">{distortions}</div>
        <br />
        <div>
          <div className="header">Rational Response</div>
          <p>{entry.rationalResponse || ""}</p>
        </div>
        <div className="delete-container">
          <Button className="btn delete-button" onClick={() => this.showDelete(entry)}>
            Delete Entry
          </Button>
        </div>
        <AreYouSurePrompt
          show={this.state.deleteShow}
          hidePrompt={this.hideDelete}
          confirmAction={this.entryDelete}
          text="Are you sure you want to delete this one?"
        />
      </div>
    );
  }

  renderDistortions(distortionsList) {
    if (!distortionsList || distortionsList.length === 0 || typeof distortionsList === "string")
      return distortionsList;
    const returnNodes = distortionsList.map((distortion, index) => {
      return (
        <div className="distortionsView" key={index}>
          <div className="checkMarkContainer">
            <CheckMark size={35} fill={colors.warmpurple} />
          </div>
          <div className="textContainer">
            <div className="labelTitle">{labelMap[distortion].title}</div>
            <div className="labelDescription">{labelMap[distortion].description}</div>
          </div>
        </div>
      );
    });
    return returnNodes;
  }

  showDelete() {
    this.setState({
      deleteShow: true,
    });
  }

  entryDelete() {
    const { dispatch, entry, history } = this.props;
    dispatch({
      type: "ENTRIES_DELETE",
      entry: entry,
    });
    this.hideDelete();
    history.push("/");
  }

  hideDelete() {
    this.setState({
      deleteShow: false,
    });
  }
}
EntryView.propTypes = {
  entry: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  error: PropTypes.bool,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
};

export default EntryView;
