import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import { SubmissionError, reduxForm } from 'redux-form';
import { Button, Panel, NavItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { formatDate } from '../utils/utils';
import EntryDeletePrompt from './common/EntryDeletePrompt';


// Entry add/edit page component
export class EntryView extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      deleteShow: false,
      deleteEntry: {},
    };
    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
    this.entryDelete = this.entryDelete.bind(this);
    this.renderDistortions = this.renderDistortions.bind(this);
    this.prettyLabel = this.prettyLabel.bind(this);
  }

  componentWillMount() {
    const { entry } = this.props;
    if (!entry.id) {
      browserHistory.replace('/');
    }
  }

  // render
  render() {
    const { entry } = this.props;
    const distortions = this.renderDistortions(entry.cognitiveDistortions);
    return (
      <div className="page-entry-view">
        <div className="header">
          <div className="date">{formatDate(entry.date)}</div>

          <LinkContainer to={'/'}>
            <NavItem className="home-button">
              <span>Home</span> <Glyphicon glyph="home" />
            </NavItem>
          </LinkContainer>

          <LinkContainer to={`entry-edit/${entry.id}`}>
            <NavItem className="edit-button">
              <span>Edit</span> <Glyphicon glyph="edit" />
            </NavItem>
          </LinkContainer>

        </div>

        <Panel header={'Situation'}>
          {entry.situation}
        </Panel>
        <Panel header={'Emotional Response'}>
          {entry.emotionalResponse || ''}
        </Panel>
        <Panel header={'Automatic Thoughts'}>
          {entry.automaticThoughts || ''}
        </Panel>
        <Panel header={'Cognitive Distortions'}>
          {distortions}
        </Panel>
        <Panel header={'Rational Response'}>
          {entry.rationalResponse || ''}
        </Panel>
        <div className="delete-container">
          <Button bsSize="xsmall" className="entry-delete" onClick={() => this.showDelete(entry)}>
          Delete Entry
          </Button>
        </div>
        <EntryDeletePrompt
          show={this.state.deleteShow} entry={this.state.deleteEntry}
          hideDelete={this.hideDelete} entryDelete={this.entryDelete}
        />
      </div>
    );
  }

  prettyLabel(name) {
    const list = {
      allOrNothingThinking: 'All-or-Nothing Thinking',
      overgeneralization: 'Overgeneralization',
      mentalFilter: 'Mental Filter',
      discountingThePositive: 'Discounting The Positives',
      jumpingToConclusions: 'Jumping to Conclusions',
      magnifyingOrMinifying: 'Magnifying Or Minifying',
      emotionalReasoning: 'Emotional Reasoning',
      shouldStatements: "\'Should\' Statements",
      labeling: 'Labeling',
      personalizationAndBlame: 'Personalization and Blame',
    };
    return list[name];
  }

  renderDistortions(distortionsList) {
    if (!distortionsList || distortionsList.length === 0 || typeof distortionsList === 'string') return distortionsList;
    const returnNodes = distortionsList.map((distortion, index) => {
      const classes = `distortionsView ${distortion}`;
      return (
        <p className={classes} key={index}>{this.prettyLabel(distortion)}</p>
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
      type: 'ENTRIES_DELETE',
      entry: this.props.entry,
    });
    this.hideDelete();
    browserHistory.push('/');
  }

  hideDelete() {
    this.setState({
      deleteShow: false,
      deleteEntry: {},
    });
  }


  // submit the form
  formSubmit(values) {
    const { dispatch } = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'ENTRIES_ADD_EDIT',
        entry: {
          id: values.id,
          date: new Date(),
          entryname: values.entryname,
          job: values.job,
        },
        callbackError: (error) => {
          reject(new SubmissionError({ _error: error }));
        },
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        },
      });
    });
  }
}
EntryView.propTypes = {
 entry: PropTypes.object,
 dispatch: PropTypes.func,
 handleSubmit: PropTypes.func,
 error: PropTypes.bool,
 submitting: PropTypes.bool,
 invalid: PropTypes.bool,
}
// decorate the form component
const EntryViewForm = reduxForm({
  form: 'entryEdit',
  validate(values) {
    const errors = {};
    if (!values.entryname) {
      errors.entryname = 'Entryname is required';
    }
    return errors;
  },
})(EntryView);

// export the connected class
function mapStateToProps(state, ownProps) {
  const entry = state.entries.find(x => Number(x.id) === Number(ownProps.params.id));
  return {
    entry,
    initialValues: entry,
  };
}
export default connect(mapStateToProps)(EntryViewForm);
