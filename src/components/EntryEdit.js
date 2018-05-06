import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";

// Entry add/edit page component
export class EntryEdit extends React.Component {
  // constructor

  constructor(props) {
    super(props);
    this.state = {
      cognitiveDistortions: [],
      entries: [],
    };

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
    this.saveChecked = this.saveChecked.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
    this.setPreviouslyChecked = this.setPreviouslyChecked.bind(this);
  }

  componentDidMount() {
    const { entry } = this.props;
    if (!entry) return;
    const distortions = entry.cognitiveDistortions;
    if (distortions) {
      distortions.map(this.setPreviouslyChecked);
      this.setState({ cognitiveDistortions: distortions });
    }
  }

  setPreviouslyChecked(name) {
    const node = document.getElementsByName(name)[0];
    node.checked = true;
    node.parentNode.className = `choice-active ${name}`;
  }

  toggleChecked(e) {
    e.preventDefault();
    const checkbox = e.target.getElementsByTagName("input")[0];
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
      e.target.className = `choice-active ${checkbox.name}`;
    } else {
      e.target.className = `choice `;
    }
    this.saveChecked(checkbox);
  }

  saveChecked(checkbox) {
    const newDistortions = this.state.cognitiveDistortions.slice();
    if (checkbox.checked) {
      newDistortions.push(checkbox.name);
    } else {
      const index = newDistortions.indexOf(checkbox.name);
      if (index > -1) newDistortions.splice(index, 1);
    }
    this.setState({ cognitiveDistortions: newDistortions });
  }

  // submit the form
  formSubmit(values) {
    const { dispatch, entry } = this.props;
    const { cognitiveDistortions } = this.state;
    let date = new Date();
    let id = values.id;
    if (entry) {
      date = entry.date;
      id = entry.id;
    }
    return new Promise((resolve, reject) => {
      dispatch({
        type: "ENTRIES_ADD_EDIT",
        entry: {
          id: id,
          date: date,
          situation: values.situation || "",
          emotionalResponse: values.emotionalResponse || "",
          automaticThoughts: values.automaticThoughts || "",
          cognitiveDistortions: cognitiveDistortions || "",
          rationalResponse: values.rationalResponse || "",
        },
        callbackError: error => {
          reject(new SubmissionError({ _error: error }));
        },
        callbackSuccess: response => {
          this.setState({ cognitiveDistortions: [] });
          dispatch(push(`/entry/${response.id}`));
          resolve();
        },
      });
    });
  }

  // render
  render() {
    const { entry, handleSubmit, error, invalid, submitting } = this.props;
    return (
      <div className="page-entry-edit page">
        <PageHeader>{entry && entry.id ? "Edit Entry" : "New Entry"}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field
            component={FormField}
            name="situation"
            label="Situation"
            placeholder="Just the facts.  No evaluation"
          />
          <Field
            component={FormField}
            name="emotionalResponse"
            label="Emotional Response"
            placeholder="Your raw emotional response"
          />
          <Field
            component={FormField}
            name="automaticThoughts"
            label="Automatic Thoughts"
            placeholder="The automatic thoughts"
          />

          <p>Cognitive Distortions</p>
          <div className="distortions-container">
            <button className="choice" onClick={this.toggleChecked}>
              All-or-Nothing Thinking
              <input
                type="checkbox"
                className="invisible"
                name="allOrNothingThinking"
                defaultChecked={false}
              />
            </button>

            <button className="choice" onClick={this.toggleChecked}>
              Overgeneralizaton
              <input
                type="checkbox"
                className="invisible"
                name="overgeneralization"
                defaultChecked={false}
              />
            </button>

            <button className="choice" onClick={this.toggleChecked}>
              Mental Filter
              <input
                type="checkbox"
                className="invisible"
                name="mentalFilter"
                defaultChecked={false}
              />
            </button>

            <button className="choice" onClick={this.toggleChecked}>
              Discounting the Positives
              <input
                type="checkbox"
                className="invisible"
                name="discountingThePositive"
                defaultChecked={false}
              />
            </button>

            <button className="choice" onClick={this.toggleChecked}>
              Jumping to Conclusions
              <input
                type="checkbox"
                className="invisible"
                name="jumpingToConclusions"
                defaultChecked={false}
              />
            </button>

            <button className="choice" onClick={this.toggleChecked}>
              Magnifying or Minifying
              <input
                type="checkbox"
                className="invisible"
                name="magnifyingOrMinifying"
                defaultChecked={false}
              />
            </button>

            <button className="choice" onClick={this.toggleChecked}>
              Emotional Reasoning
              <input
                type="checkbox"
                className="invisible"
                name="emotionalReasoning"
                defaultChecked={false}
              />
            </button>

            <button className="choice" onClick={this.toggleChecked}>
              'Should' statements
              <input
                type="checkbox"
                className="invisible"
                name="shouldStatements"
                defaultChecked={false}
              />
            </button>

            <button className="choice" onClick={this.toggleChecked}>
              Labeling
              <input type="checkbox" className="invisible" name="labeling" defaultChecked={false} />
            </button>

            <button className="choice" onClick={this.toggleChecked}>
              Personalization and Blame
              <input
                type="checkbox"
                className="invisible"
                name="personalizationAndBlame"
                defaultChecked={false}
              />
            </button>
          </div>
          <Field
            component={FormField}
            name="rationalResponse"
            label="Rational Response"
            placeholder="A rational response to these distortions"
          />
          <FormSubmit
            error={error}
            invalid={invalid}
            submitting={submitting}
            buttonSaveLoading="Saving..."
            buttonSave="Save Entry"
          />
        </Form>
      </div>
    );
  }
}

EntryEdit.propTypes = {
  entry: PropTypes.object,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  error: PropTypes.bool,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
};

// decorate the form component
const EntryEditForm = reduxForm({
  form: "entryEdit",
  validate(values) {
    const errors = {};
    if (!values.entryname) {
      errors.entryname = "Entryname is required";
    }
    return errors;
  },
})(EntryEdit);

function mapStateToProps(state, ownProps) {
  const entry = state.entries.length
    ? state.entries.find(x => Number(x.id) === Number(ownProps.match.params.id))
    : null;
  return {
    entry,
    initialValues: entry,
  };
}

export default connect(mapStateToProps)(EntryEditForm);
