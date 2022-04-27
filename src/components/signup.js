import React, { Component } from "react";
import {Button} from "react-bootstrap";
import axios from "../axios";


export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            aadhar: '',
            };
        this.firstNameChange = this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.aadharChange = this.aadharChange.bind(this);
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

    aadharChange(event) {
        this.setState({
            aadhar: event.target.value,
        });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.firstName);
        console.log('A name was submitted: ' + this.state.lastName);
        axios.post("https://call--drop.herokuapp.com/api/customer/create", {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            aadhar: this.state.email,
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
                        <input type="aadhar"  onChange={this.aadharChange} className="form-control" placeholder="Aadhar Number" />
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
