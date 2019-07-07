import PropTypes from "prop-types";
import React from "react";
import Grave from "../art/grave.svg";
import { Modal, Button } from "react-bootstrap";

// User delete component
export default class NoticeOfSunset extends React.Component {
  // render
  render() {
    const { show, confirmAction } = this.props;
    return (
      <Modal className="u-sure-container" show={show}>
        <Modal.Header>
          <Modal.Title>This site is going away September 1st</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Grave} className="sunsetGrave" />
          Thanks for using the Automatic Thought Journal prototype! This site is being sunset on
          September 1st. If you'd like to download the source code and run the journal locally, it
          will remain available and open sourced on{" "}
          <a className="link" href="https://github.com/mixophrygian/ct-blog">
            Github
          </a>
          .
        </Modal.Body>
        <Modal.Footer>
          <Button className="new-entry-button" onClick={confirmAction}>
            Got it
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// prop checks
NoticeOfSunset.propTypes = {
  show: PropTypes.bool,
  hidePrompt: PropTypes.func,
  confirmAction: PropTypes.func,
  text: PropTypes.string,
};
