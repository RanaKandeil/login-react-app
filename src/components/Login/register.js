import React from "react";
import axios from 'axios';
import { Button , Form} from 'react-bootstrap';

export class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        username: ''
      };
}
  
  handleSubmit = (e) =>{
    e.preventDefault();
    const formData = JSON.stringify(this.state);
    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/users',
      data:  JSON.stringify({formData}),
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
          //handle success
          this.props.history.push('/login');  
      })
      .catch((response) => {
          //handle error
          console.log(response);
      });
}

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
}
  render(){
    return(
   <div className="base-Container">
     <h2  >Register</h2>
       <Form onSubmit={this.handleSubmit}>
       <Form.Group controlId="formBasicUserName">
                <Form.Label>UserName</Form.Label>
                <Form.Control name="username"  onChange={this.handleChange}  type="username" placeholder="username" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" onChange={this.handleChange} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password"  onChange={this.handleChange}  type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}
}
export default Register;