import React from "react";
import { Modal, Button } from "react-bootstrap";
import Timer from "./Timer";

function SessionModal({ show, handleStayConnected, handleLogout, timeout }) {
  return (
    <Modal animation={false} show={show}>
      <Modal.Header>
        <Modal.Title>You have been idle for too long.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          You're being timed out due to inactivity. Please choose to stay signed
          in or to logout. Otherwise, you will be logged off automatically.
        </h6>

        <p className="text-muted">
          Time remaining : <Timer timeInSecs={timeout} />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="primary" onClick={handleStayConnected}>
          Keep me signed in
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SessionModal;
