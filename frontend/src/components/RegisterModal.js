import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Register from './Register';

function RegisterModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
		
    <>
      <li className="nav-item">
				<button type="button" className="btn nav-link" onClick={handleShow}>Register</button>
			</li>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">

					<Register {...props} handleClose={handleClose} />

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

// render(<RegisterModal />);

export default RegisterModal;