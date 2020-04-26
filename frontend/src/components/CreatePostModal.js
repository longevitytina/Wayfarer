import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CreatePostForm from './CreatePostForm';

function CreatePostModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>

					<CreatePostForm {...props} handleClose={handleClose} />

				</Modal.Body>
        {/* <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

// render(<CreatePostModal />);

export default CreatePostModal;