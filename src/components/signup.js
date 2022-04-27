import React, { Component } from "react";
import './signup.css'
import {Button} from "react-bootstrap";


export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            };
        this.firstNameChange = this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    firstNameChange(event) {
        this.setState({
        firstName: event.target.value,
        lastName: event.target.value,
        email: event.target.value,
        password: event.target.value,
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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="bg-dark text-white" onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <div className="form-group col-lg-2">
                        <label>First name</label>
                        <input type="text" onChange={this.firstNameChange} value={this.state.value} placeholder="First name" />
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <Button type="submit"> Sign Up</Button>
                    <p className="forgot-password text-right">
                        Already registered
                        <a href="/hello">sign in?</a>
                    </p>
                </form>
            </div>
        );
    }
}
