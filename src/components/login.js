import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            password: '',
            };
        this.phoneNumber = this.phoneNumberChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    phoneNumberChange(event) {
        this.setState({
        phoneNumber: event.target.value,
        });
    }

    passwordChange(event) {
        this.setState({
        password: event.target.value,
        });
    }

    handleSubmit(event) {
        axios.post("https://call--drop.herokuapp.com/", {
            phoneNumber: this.state.phoneNumber,    
            password: this.state.password,
        }).then(function (response) {
            console.log(response);
        })
        event.preventDefault();
    }

    render() {
        return (
            <form className="bg-dark text-white">
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="email" onChange={this.phoneNumber} value={this.state.phoneNumber} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <br />
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <br />
                <p className="forgot-password text-right">
                    <a href="/login">Forgot password?</a>
                </p>
            </form>
        );
    }
}