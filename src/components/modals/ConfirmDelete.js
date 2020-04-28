import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>

					Are you sure you want to delete post {props.post}?

				</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.delete}>
            Delete
          </Button>
					<Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<DeleteModal />);

export default DeleteModal;