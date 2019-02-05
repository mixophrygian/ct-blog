/* eslint-disable guard-for-in */
import PropTypes from "prop-types";
import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Form, Field, SubmissionError, reduxForm, submit, isPristine } from "redux-form";
import FormField from "./common/FormField";
import AreYouSurePrompt from "./common/AreYouSurePrompt";
import CheckMark from "./icons/checkmark.js";
import { mySQLDate, labelMap } from "../utils/utils.js";

export class EntryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cognitiveDistortions: [],
      entries: [],
      shouldShowCancelModal: false,
    };
    this.distortionsButtons = this.distortionsButtons.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
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

  componentWillReceiveProps(props) {
    if (props.cancel) this.cancelEntry();
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
    this.props.resetCancel();
    this.setState({ shouldShowCancelModel: false });
  }

  toggleChecked(e) {
    e.preventDefault();
    const checkbox = e.currentTarget.getElementsByTagName("input")[0];
    checkbox.checked = !checkbox.checked;
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
    this.props.resetCancel();
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

  distortionsButtons() {
    const { cognitiveDistortions } = this.state;
    const buttons = [];
    let checked = false;
    for (const distortion in labelMap) {
      if (cognitiveDistortions.indexOf(distortion) > -1) {
        checked = true;
      } else {
        checked = false;
      }
      const buttonClass = checked
        ? `choice-active distortionsView ${distortion}`
        : "choice distortionsView";

      buttons.push(
        <button key={distortion} className={`${buttonClass}`} onClick={this.toggleChecked}>
          <div className="checkMarkContainer">
            <CheckMark size={35} fill={checked ? "white" : labelMap[distortion].color} />
          </div>
          <div className="distortionTextContainer">
            <div className="labelTitle spacer">{labelMap[distortion].title}</div>
            <div className="labelDescription">{labelMap[distortion].description}</div>
          </div>
          <input
            type="checkbox"
            className="invisible"
            name={labelMap[distortion].cssClass}
            defaultChecked={false}
          />
        </button>
      );
    }
    return <div className="distortions-container">{buttons}</div>;
  }

  render() {
    const { entry, handleSubmit } = this.props;
    return (
      <div className="page-entry-edit page">
        <div className="header-container">
          <h1 className="header">{entry && entry.id ? "Edit Entry" : "New Entry"}</h1>
        </div>
        <Form name="entryForm" onSubmit={handleSubmit(this.formSubmit)}>
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

          <div className="label-link-container">
            <div className="form-label">Distortions</div>
            <div
              data-balloon={`For a more detailed explanation on what 
                these labels mean check out 'Distortions' in the menu`}
              data-balloon-pos="left"
              className="help"
            >
              Help
            </div>
          </div>

          {this.distortionsButtons()}

          <Field
            component={FormField}
            name="rationalResponse"
            label="Rational Response"
            placeholder="A rational response to these distortions"
          />
          <Button
            className="new-entry-button bottom-button"
            onClick={() => this.props.dispatch(submit("entryEdit"))}
          >
            Save
          </Button>
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
  cancel: PropTypes.bool,
  error: PropTypes.bool,
  pristine: PropTypes.bool,
  resetCancel: PropTypes.func,
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
