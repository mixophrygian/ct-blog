import React, { PropTypes } from 'react';
import { FormGroup, FormControl, HelpBlock, Row, Col } from 'react-bootstrap';
import Textarea from 'react-textarea-autosize';

// Form field component
export default class FormField extends React.Component {
  // render
  render() {
    const { className, doValidate, meta } = this.props;
    if (doValidate) {
      return (
        <FormGroup
          className={className}
          validationState={!meta.touched ? null : meta.error ? 'error' : 'success'}
        >
          {this.content()}
          <FormControl.Feedback />
          <HelpBlock>
            {meta.touched && meta.error ? meta.error : null}
          </HelpBlock>
        </FormGroup>
      );
    }
    return (
      <FormGroup className={className}>
        {this.content()}
      </FormGroup>
    );
  }

  // the field content
  content() {
    const { theme, label } = this.props;
    if (theme === 'other_theme') {
      // layout for some other theme
    } else {
      // default theme: 2col
      return (
        <Row>
          <Col sm={3}>{label}</Col>
          <Col sm={9}>{this.field()}</Col>
        </Row>
      );
    }
  }

  // the field itself
  field() {
    const { input, type, placeholder, children } = this.props;
    return (
      <Textarea {...input} autoComplete={'off'} type={type} placeholder={placeholder}>
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
  theme: PropTypes.string,  // 2col (default), etc
  doValidate: PropTypes.bool, // true or false
  label: PropTypes.any,  // the field text or a react component if we have html inside (empty string by default)
  type: PropTypes.string,   // input type: text (by default), password
  placeholder: PropTypes.string,    // input placeholder (empty string by default)
  className: PropTypes.string,  // the class name (empty string by default)
};
