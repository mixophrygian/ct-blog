import PropTypes from "prop-types";
import React from "react";
import { Button, div, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { formatDate } from "../utils/utils";
import AreYouSurePrompt from "./common/AreYouSurePrompt";

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
    this.prettyLabel = this.prettyLabel.bind(this);
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
        <LinkContainer role="button" activeClassName="" className="btn home-button" to={"/"}>
          <NavItem>
            <span>Home</span> <Glyphicon glyph="home" />
          </NavItem>
        </LinkContainer>

        <LinkContainer role="button" className="btn edit-button" to={`/entry-edit/${entry.id}`}>
          <NavItem>
            <span>Edit</span> <Glyphicon glyph="edit" />
          </NavItem>
        </LinkContainer>

        <div>
          <div className="header">Situation</div>
          <p>{entry.situation}</p>
        </div>
        <div>
          <div className="header">Emotional Response</div>
          <p>{entry.emotionalResponse || ""}</p>
        </div>
        <div>
          <div className="header">Automatic Thoughts</div>
          <p>{entry.automaticThoughts || ""}</p>
        </div>
        <div className="header">Cognitive Distortions</div>
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

  prettyLabel(name) {
    const list = {
      allOrNothingThinking: "All-or-Nothing Thinking",
      overgeneralization: "Overgeneralization",
      mentalFilter: "Mental Filter",
      discountingThePositive: "Discounting The Positives",
      jumpingToConclusions: "Jumping to Conclusions",
      magnifyingOrMinifying: "Magnifying Or Minifying",
      emotionalReasoning: "Emotional Reasoning",
      shouldStatements: "'Should' Statements",
      labeling: "Labeling",
      personalizationAndBlame: "Personalization and Blame",
    };
    return list[name];
  }

  renderDistortions(distortionsList) {
    if (!distortionsList || distortionsList.length === 0 || typeof distortionsList === "string")
      return distortionsList;
    const returnNodes = distortionsList.map((distortion, index) => {
      const classes = `distortionsView ${distortion}`;
      return (
        <p className={classes} key={index}>
          {this.prettyLabel(distortion)}
        </p>
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
