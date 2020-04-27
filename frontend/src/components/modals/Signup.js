import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Signup = ({context}) => {
	return (
    <Modal
      show={context.showSignupModal}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
			// backdrop='static'
			onHide={context.actions.toggleSignupModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
			
			
			</Modal.Body>
      <Modal.Footer>
				<Button variant="outline-secondary" onClick={context.actions.toggleSignupModal}>Close</Button>
        <Button variant="outline-dark" onClick={context.actions.toggleSignupModal}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}
 
export default Signup;