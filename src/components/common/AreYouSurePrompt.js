import PropTypes from "prop-types";
import React from "react";
import { Modal, Button } from "react-bootstrap";

// User delete component
export default class AreYouSurePrompt extends React.Component {
  // render
  render() {
    const { show, hidePrompt, confirmAction, text } = this.props;
    return (
      <Modal className="u-sure-container" show={show}>
        <Modal.Header>
          <Modal.Title>{text}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={hidePrompt}>No</Button>
          <Button className="new-entry-button" onClick={confirmAction}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// prop checks
AreYouSurePrompt.propTypes = {
  show: PropTypes.bool,
  hidePrompt: PropTypes.func,
  confirmAction: PropTypes.func,
  text: PropTypes.string,
};
