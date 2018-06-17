import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Field, SubmissionError, reduxForm, isPristine } from "redux-form";
import { Form } from "react-bootstrap";
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import AreYouSurePrompt from "./common/AreYouSurePrompt";
import { mySQLDate } from "../utils/utils.js";

export class EntryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cognitiveDistortions: [],
      entries: [],
      shouldShowCancelModal: false,
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.saveChecked = this.saveChecked.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
    this.setPreviouslyChecked = this.setPreviouslyChecked.bind(this);
    this.showCancelModal = this.showCancelModal.bind(this);
    this.hideCancelModal = this.hideCancelModal.bind(this);
    this.cancelEntry = this.cancelEntry.bind(this);
    this.actuallyCancel = this.actuallyCancel.bind(this);
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

  showCancelModal() {
    this.setState({ shouldShowCancelModel: true });
  }

  hideCancelModal() {
    this.setState({ shouldShowCancelModel: false });
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

  actuallyCancel() {
    this.props.history.goBack();
  }

  cancelEntry() {
    if (this.props.pristine) {
      this.actuallyCancel();
    } else {
      this.showCancelModal();
    }
  }

  formSubmit(values) {
    const { dispatch, entry } = this.props;
    const { cognitiveDistortions } = this.state;
    let date = mySQLDate(new Date());
    let id = null;
    if (entry && entry.id) {
      date = mySQLDate(new Date(entry.date));
      id = entry.id;
    }
    const parsedEntry = {
      id,
      date,
      situation: values.situation || "",
      emotionalResponse: values.emotionalResponse || "",
      automaticThoughts: values.automaticThoughts || "",
      cognitiveDistortions: cognitiveDistortions.length ? cognitiveDistortions : "",
      rationalResponse: values.rationalResponse || "",
    };
    return new Promise((resolve, reject) => {
      dispatch({
        type: "ENTRIES_ADD_EDIT",
        entry: parsedEntry,
        callbackError: error => {
          reject(new SubmissionError({ _error: error }));
        },
        callbackSuccess: response => {
          this.setState({ cognitiveDistortions: [] });
          this.props.history.push(`/entry/${response.id}`);
          resolve(parsedEntry);
        },
      });
    });
  }

  render() {
    const { entry, error, handleSubmit, invalid, submitting } = this.props;
    return (
      <div className="page-entry-edit page">
        <div className="header-container">
          <h1 className="header">{entry && entry.id ? "Edit Entry" : "New Entry"}</h1>
          <button onClick={this.cancelEntry}>cancel</button>
        </div>
        <Form name="entryForm" horizontal onSubmit={handleSubmit(this.formSubmit)}>
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
        <AreYouSurePrompt
          show={this.state.shouldShowCancelModel}
          hidePrompt={this.hideCancelModal}
          confirmAction={this.actuallyCancel}
          text="Are you sure you want to discard changes?"
        />
      </div>
    );
  }
}

EntryEdit.propTypes = {
  entry: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func,
  error: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
};

const EntryEditForm = reduxForm({
  form: "entryEdit",
  // validate(values) {
  //   const errors = {};
  //   if (!values.situation) {
  //     errors.situation = "Entryname is required";
  //   }
  //   return errors;
  // },
})(EntryEdit);

const mapStateToProps = (state, ownProps) => {
  return {
    pristine: isPristine("entryEdit"),
    initialValues: ownProps.entry,
  };
};
export default connect(mapStateToProps)(EntryEditForm);
