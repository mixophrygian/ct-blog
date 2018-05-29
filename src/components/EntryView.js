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

          <LinkContainer role="button" className="btn home-button" to={"/"}>
            <NavItem>
              <span>Home</span> <Glyphicon glyph="home" />
            </NavItem>
          </LinkContainer>

          <LinkContainer role="button" className="btn edit-button" to={`/entry-edit/${entry.id}`}>
            <NavItem>
              <span>Edit</span> <Glyphicon glyph="edit" />
            </NavItem>
          </LinkContainer>
        </div>

        <Panel>
          <Panel.Heading>Situation</Panel.Heading>
          <Panel.Body>{entry.situation}</Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>Emotional Response</Panel.Heading>
          <Panel.Body>{entry.emotionalResponse || ""}</Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>Automatic Thoughts</Panel.Heading>
          <Panel.Body>{entry.automaticThoughts || ""}</Panel.Body>
        </Panel>
        <h4>Cognitive Distortions</h4>
        <div className="distortions-container">{distortions}</div>
        <br />
        <Panel>
          <Panel.Heading>Rational Response</Panel.Heading>
          <Panel.Body>{entry.rationalResponse || ""}</Panel.Body>
        </Panel>
        <div className="delete-container">
          <Button className="btn delete-button" onClick={() => this.showDelete(entry)}>
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
    this.setState({
      deleteShow: true,
      deleteEntry: entry,
    });
  }

  entryDelete() {
    this.props.dispatch({
      type: "ENTRIES_DELETE",
      entry: this.props.entry,
    });
    this.hideDelete();
    // TODO: delete from MySQL if logged in
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
  // eslint-disable-next-line eqeqeq
  const entry = state.entries.find(x => x.id == ownProps.match.params.id);
  return {
    entry,
  };
}
export default connect(mapStateToProps)(EntryView);
