import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Signup = ({context}) => {
	return (
    <Modal
      show={context.showSignupModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
			// backdrop='static'
			onHide={context.actions.toggleSignupModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
				<Button variant="outline-secondary" onClick={context.actions.toggleSignupModal}>Close</Button>
        <Button variant="outline-dark" onClick={context.actions.toggleSignupModal}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}
 
export default Signup;