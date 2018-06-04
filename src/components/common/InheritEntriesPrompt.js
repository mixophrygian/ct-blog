import PropTypes from "prop-types";
import React from "react";
import { Modal, Button } from "react-bootstrap";

export default class InheritEntriesPrompt extends React.Component {
  render() {
    const { show, hide } = this.props;
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            Looks like you have some entries from before you logged in. These are now attached to
            your account.
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={hide}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// prop checks
InheritEntriesPrompt.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func,
};
