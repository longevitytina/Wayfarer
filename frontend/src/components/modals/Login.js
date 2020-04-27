import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import UserModel from "../../models/user";

// needs history, setCurrentUser
class Login extends Component {
	state = { 
		show: false,
		error: "",
		email: "",
		password: "",
	}
	handleClose = () => {
    this.setState({show: false});
	}
	
  handleShow = () => {
    this.setState({show: true});
	}

	handleChange = (event) => {
    this.setState({
			[event.target.id]: event.target.value,
			error: "",
    });
	};

	handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    // UserModel.login(this.state)
    //   .then((res) => {
    //     this.props.setCurrentUser(res.data.data);
    //     this.props.history.push("/profile");
    //   })
    //   .catch((err) => {
		// 		if (err.status) {
    //       this.setState({
    //         error: err.response.data.message,
    //       });
    //     }
		// 	});
		console.log(this.props);
		
	};
	
	render() { 
		return ( 
			<>
				<li className="nav-item">
					<button type="button" className="btn nav-link" onClick={this.handleShow}>Log In</button>
				</li>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form noValidate onSubmit={this.handleSubmit}>
						<Form.Group controlId="email">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								required
								onChange={this.handleChange}
								value={this.state.email}
								isInvalid={!!this.state.error}
							/>
						</Form.Group>
						<Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								required
								onChange={this.handleChange}
								value={this.state.password}
								isInvalid={!!this.state.error}
							/>
							<Form.Control.Feedback type="invalid">
								{this.state.error}
							</Form.Control.Feedback>
						</Form.Group>
					</Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={this.handleClose}>Close</Button>
            <Button variant="outline-dark" type="submit" onClick={this.handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
		);
	}
}

export default Login;
