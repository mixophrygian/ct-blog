import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form, Panel } from "react-bootstrap";
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import { formatDate } from '../utils/utils';


// Entry add/edit page component
export class EntryView extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    const {entry, handleSubmit, error, invalid, submitting} = this.props;
    console.log(entry);
    return (
      <div className="page-entry-edit">
        <PageHeader>{formatDate(entry.date)}</PageHeader>
        <Panel header={'Entryname'}>
          {entry.entryname}
        </Panel>
        <Panel header={'Job'}>
          {entry.job || ''}
        </Panel>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
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
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const EntryViewForm = reduxForm({
  form: 'entry_edit',
  validate: function (values) {
    const errors = {};
    if (!values.entryname) {
      errors.entryname = 'Entryname is required';
    }
    return errors;
  },
})(EntryView);

// export the connected class
function mapStateToProps(state, own_props) {
  const entry = state.entries.find(x => Number(x.id) === Number(own_props.params.id)) || {};
  return {
    entry: entry,
    initialValues: entry,
  };
}
export default connect(mapStateToProps)(EntryViewForm);
