import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default class LogIn extends Component {
    state = {
        email:"",
        password:"",
        city:"",
        description:""
    }
    handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]: value});
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        alertify.success(this.state.email+" added successfully to DB");
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="email">E-mail:</Label>
                <Input
                type="email" 
                name="email" 
                id='email' 
                placeholder='Your e-mail'
                onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password:</Label>
                <Input 
                type="password" 
                name="password" 
                id='password' 
                placeholder='Your password'
                onChange={this.handleChange}></Input>
            </FormGroup>
            <Button type='submit'>Login</Button>
            
        </Form>
      </div>
    )
  }
}
