import React from 'react';
import { Button , Form} from 'react-bootstrap';
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
          };
    }
    handleSubmit = (e) =>{
        e.preventDefault();
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
           let user =  res.data.find(user => this.state.email === 'Julianne.OConner@kory.org')
           if(user == null){
               return null
           }else{
               return user
           }
         }).then ( user => {
             if (user == null){
                alert("Try Login using this email Julianne.OConner@kory.org");
             }else{
                this.props.history.push('/listUsers');  
             }
         })
         
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
           <h2>Login</h2>
           <Form onSubmit={this.handleSubmit}>
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
export default Login;