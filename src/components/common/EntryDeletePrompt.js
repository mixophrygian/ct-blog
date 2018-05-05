import PropTypes from "prop-types";
import React from "react";
import { Modal, Button } from "react-bootstrap";

// User delete component
export default class EntryDeletePrompt extends React.Component {
  // render
  render() {
    const { show, hideDelete, entryDelete } = this.props;
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Are you sure you want to delete this one?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={hideDelete}>No</Button>
          <Button bsStyle="primary" onClick={entryDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// prop checks
EntryDeletePrompt.propTypes = {
  show: PropTypes.bool,
  entry: PropTypes.object,
  hideDelete: PropTypes.func,
  entryDelete: PropTypes.func,
};
