import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const ModalProfile = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="4">
                Email address:
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={props.email}
                />
              </Col>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name:</Form.Label>
              <Form.Control 
                type="text" 
                placeholder={props.name} 
                onChange={props.handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>City:</Form.Label>
              <Form.Control 
                as="select"
                onChange={props.handleSelect}
              >
                <option key="null"></option>
                {props.cities.map(city => (
										<option key={city._id}>{city.name}</option>
								))}
              </Form.Control>
            </Form.Group>


            {/* <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Bio:</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalProfile;