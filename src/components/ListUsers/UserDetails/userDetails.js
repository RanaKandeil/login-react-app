import React, { Component } from 'react';
import './UserDetails.css';
import axios from 'axios';

class UserDetails extends Component{
    state = {
        user : {}
    } 
    componentDidMount(){
        const userId = this.props.match.params.userId;
        axios.get('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(res =>{
            this.setState({
                user: res.data
            })
        })
    }

    render(){
        const {user} = this.state;
       return(
           <div>
                <h2>User Detail</h2>
                <div className="content">
                    <div>Name: {user.name}</div>
                    <div>Username: {user.username}</div>
                    <div>Email: {user.email}</div>
                    <div>Address: {user.address?.street}  {user.address?.city}</div>
                    <div>Phone: {user.phone} </div>
                    <div>Website: {user.website}  </div>
                </div>
                <button onClick={this.props.history.goBack}>Back</button>
            </div>
       )
           
    }
}
export default UserDetails;