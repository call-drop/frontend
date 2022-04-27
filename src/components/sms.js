import React, { Component } from "react";
import {Button} from "react-bootstrap";
import axios from "axios";


export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            to: '',
            from: 8296446792,
            text: '',
        };
        this.to = this.toChange.bind(this);
        this.text = this.text.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firstNameChange(event) {
        this.setState({
        firstName: event.target.value,
        });
    }

    lastNameChange(event) {
        this.setState({
        lastName: event.target.value,
        });
    }

    emailChange(event) {
        this.setState({
        email: event.target.value,
        });
    }

    passwordChange(event) {
        this.setState({
        password: event.target.value,
        });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.firstName);
        console.log('A name was submitted: ' + this.state.lastName);
        console.log('A name was submitted: ' + this.state.email);
        console.log('A name was submitted: ' + this.state.password);
        axios.post("https://call--drop.herokuapp.com/", {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        }).then(function (response) {
            console.log(response);
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="bg-dark text-white">
                    <h3>Sign Up</h3>
                    <div className="form-group col-lg-2">
                        <label>First name</label>
                        <input type="text" onChange={this.firstNameChange} value={this.state.value} placeholder="First name" />
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text"  onChange={this.lastNameChange} className="form-control" placeholder="Last name" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email"  onChange={this.emailChange} className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"  onChange={this.passwordChange} className="form-control" placeholder="Enter password" />
                    </div>
                    <Button type="submit" onClick={this.handleSubmit} > Sign Up</Button>

                    <p className="forgot-password text-right">
                        Already registered
                        <a href="/login"> Login In ?</a>
                    </p>
                </form>
            </div>
        );
    }
}
