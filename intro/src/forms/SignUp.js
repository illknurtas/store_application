import React, { Component } from 'react';
import alertify from 'alertifyjs';
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';

export default class SignUp extends Component {
    state = {
        fullName:"",
        email:"",
        password:"",
        bday:"",
        city:""
    }
    handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]: value});
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        alertify.success(this.state.fullName+" your account has been created successfully!");
    }
  render() {
    return (
      <div>
        <Form>
            <FormGroup>
                <Label for="fullName">Full Name:</Label>
                <Input
                type="fullName" 
                name="fullName" 
                id='fullName' 
                placeholder='Write your full name'
                onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for='city'>City</Label>
                <Input 
                type='select'
                name='city'
                id='city'
                onChange={this.handleChange}>
                    <option>İstanbul</option>
                    <option>Ankara</option>
                    <option>Çanakkale</option>
                    <option>İzmir</option>
                    <option>Kastamonu</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="bday">Birth Date:</Label>
                <Input
                type='date'
                name='bday'
                id="bday"
                onChange={this.handleChange}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="email">E-mail:</Label>
                <Input
                type="email" 
                name="email" 
                id='email' 
                placeholder='Enter your e-mail'
                onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password:</Label>
                <Input 
                type="password" 
                name="password" 
                id='password' 
                placeholder='Type your password'
                onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="password">Confirm Password:</Label>
                <Input 
                type="password" 
                name="password" 
                id='password' 
                placeholder='Type your password again'
                onChange={this.handleChange}></Input>
                <FormText tooltip>This password should match the current password</FormText>
            </FormGroup>
            <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}
