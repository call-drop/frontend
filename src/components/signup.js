import React, { Component } from "react";
import './signup.css'
import {Button} from "react-bootstrap";


export default class SignUp extends Component {
    render() {
        return (
            <div>
                <form className="bg-dark text-white">
                    <h3>Sign Up</h3>
                    <div className="form-group col-lg-2">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
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
                        <a href="#">sign in?</a>
                    </p>
                </form>
            </div>
        );
    }
}