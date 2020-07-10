import React, { Component } from 'react';
import './listUsers.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';

class ListUsers extends Component{
    state = {
        users : []
    } 
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            this.setState({
                users: res.data
            })
        })
    }

    render(){
        const {users} = this.state;
        const userList = users.map(user =>{
            return(
              
                <div key={user.id}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Name : {user.name}</Card.Title>
                        <Card.Text>
                        Company Name : {user.company.name} <br/>
                        Company Catch Phrase : {user.company.catchPhrase} <br/>
                        Company Catch bs : {user.company.bs} <br/>
                        </Card.Text>
                        <Link to={`/UserDetails/${user.id}`} >User Details</Link>
                    </Card.Body>
                    </Card>
                      
                    {/* <div className="content">
                        <div>Name: {user.name}</div>
                        <div>Username: {user.username}</div>
                        <span className="input-group-btn">
                            <Link to={`/UserDetails/${user.id}`} >User Details</Link>
                        </span>
                        {/* <button  onClick={(e) => this.userDetails(user.id, e)}>User Details</button> 
                    </div> */}
                </div>
            )
        })
       return(
           <div>
                <h2>Users List</h2>
                {userList}
        </div>
       )
           
    }
   
}
export default ListUsers;