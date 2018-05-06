import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Button, Panel, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { formatDate } from "../utils/utils";
import EntryDeletePrompt from "./common/EntryDeletePrompt";

export class EntryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteShow: false,
      deleteEntry: {},
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
        <div className="header">
          <div className="date">{formatDate(entry.date)}</div>

          <LinkContainer to={"/"}>
            <NavItem className="home-button">
              <span>Home</span> <Glyphicon glyph="home" />
            </NavItem>
          </LinkContainer>

          <LinkContainer to={`/entry-edit/${entry.id}`}>
            <NavItem className="edit-button">
              <span>Edit</span> <Glyphicon glyph="edit" />
            </NavItem>
          </LinkContainer>
        </div>

        <Panel header={"Situation"}>{entry.situation}</Panel>
        <Panel header={"Emotional Response"}>{entry.emotionalResponse || ""}</Panel>
        <Panel header={"Automatic Thoughts"}>{entry.automaticThoughts || ""}</Panel>
        <h5>Cognitive Distortions</h5>
        <div className="distortions-container">{distortions}</div>
        <Panel header={"Rational Response"}>{entry.rationalResponse || ""}</Panel>
        <div className="delete-container">
          <Button bsSize="xsmall" className="entry-delete" onClick={() => this.showDelete(entry)}>
            Delete Entry
          </Button>
        </div>
        <EntryDeletePrompt
          show={this.state.deleteShow}
          entry={this.state.deleteEntry}
          hideDelete={this.hideDelete}
          entryDelete={this.entryDelete}
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

  showDelete(entry) {
    // change the local ui state
    this.setState({
      deleteShow: true,
      deleteEntry: entry,
    });
  }

  entryDelete() {
    // delete the entry
    this.props.dispatch({
      type: "ENTRIES_DELETE",
      entry: this.props.entry,
    });
    this.hideDelete();
    this.props.history.push("/");
  }

  hideDelete() {
    this.setState({
      deleteShow: false,
      deleteEntry: {},
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

function mapStateToProps(state, ownProps) {
  const entry = state.entries.find(x => Number(x.id) === Number(ownProps.match.params.id));
  return {
    entry,
  };
}
export default connect(mapStateToProps)(EntryView);
