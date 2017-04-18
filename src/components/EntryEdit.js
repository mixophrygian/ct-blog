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

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    const {entry, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-entry-edit">
        <PageHeader>{'Entry ' + (entry.id ? 'edit' : 'add')}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="situation" label="Situation"/>
          <Field component={FormField} name="emotionalResponse" label="Emotional Response"/>
          <Field component={FormField} name="automaticThoughts" label="Automatic Thoughts"/>
          <Field component={FormField} name="cognitiveDistortions" label="Cognitive Distortions"/>
          <Field component={FormField} name="rationalResponse" label="Rational Response"/>
          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
            buttonSave="Save Entry"/>
        </Form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch, entry} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'ENTRIES_ADD_EDIT',
        entry: {
          id: values.id,
          date: entry.date || new Date(),
          situation: values.situation,
          emotionalResponse: values.emotionalResponse,
          automaticThoughts: values.automaticThoughts,
          cognitiveDistortions: values.cognitiveDistortions,
          rationalResponse: values.rationalResponse,
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: (response) => {
          dispatch(push(`/entry/${response.id}`));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const EntryEditForm = reduxForm({
  form: 'entry_edit',
  validate: function (values) {
    const errors = {};
    if (!values.entryname) {
      errors.entryname = 'Entryname is required';
    }
    return errors;
  },
})(EntryEdit);

// export the connected class
function mapStateToProps(state, own_props) {
  const entry = state.entries.find(x => Number(x.id) === Number(own_props.params.id)) || {};
  return {
    entry: entry,
    initialValues: entry,
  };
}
export default connect(mapStateToProps)(EntryEditForm);
