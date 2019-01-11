import PropTypes from "prop-types";
import React from "react";
import { FormGroup, FormControl, HelpBlock } from "react-bootstrap";
import Textarea from "react-textarea-autosize";

// Form field component
export default class FormField extends React.Component {
  // render
  render() {
    const { className, doValidate, meta } = this.props;
    if (doValidate) {
      return (
        <FormGroup
          className={className}
          validationState={!meta.touched ? null : meta.error ? "error" : "success"}
        >
          {this.content()}
          <FormControl.Feedback />
          <HelpBlock>{meta.touched && meta.error ? meta.error : null}</HelpBlock>
        </FormGroup>
      );
    }
    return <FormGroup className={className}>{this.content()}</FormGroup>;
  }

  // the field content
  content() {
    const { label } = this.props;
    return (
      <div className="form-row">
        <div className="form-label">{label}</div>
        <div className="form-field">{this.field()}</div>
      </div>
    );
  }

  // the field itself
  field() {
    const { input, type, placeholder, children } = this.props;
    return (
      <Textarea
        spellCheck={"false"}
        {...input}
        autoComplete={"off"}
        type={type}
        placeholder={placeholder}
      >
        {children}
      </Textarea>
    );
  }
}

// prop checks
FormField.propTypes = {
  meta: PropTypes.object,
  children: PropTypes.node,
  input: PropTypes.object,
  doValidate: PropTypes.bool, // true or false
  label: PropTypes.any, // the field text or a react component if we have html inside (empty string by default)
  type: PropTypes.string, // input type: text (by default), password
  placeholder: PropTypes.string, // input placeholder (empty string by default)
  className: PropTypes.string, // the class name (empty string by default)
};
