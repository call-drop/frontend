import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "../axios";

export default class Linked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: undefined,
      is_postpaid: false,
      owner: undefined,
      kyc_agent: undefined,
      last_known_location: 4,
    };
    this.numberChange = this.numberChange.bind(this);
    this.is_postpaidChange = this.is_postpaidChange.bind(this);
    this.ownerChange = this.ownerChange.bind(this);
    this.kyc_agentChange = this.kyc_agentChange.bind(this);
    this.last_known_locationChange = this.last_known_locationChange.bind(this);
  }

  numberChange(event) {
    this.setState({
      number: event.target.value,
    });
  }

  is_postpaidChange(event) {
    this.setState({
      is_postpaid: event.target.value,
    });
  }

  ownerChange(event) {
    this.setState({
      owner: event.target.value,
    });
  }

  kyc_agentChange(event) {
    this.setState({
      kyc_agent: event.target.value,
    });
  }

  last_known_locationChange(event) {
    this.setState({
      last_known_location: event.target.value,
    });
  }

  handleSubmit(event) {
    axios
      .post("https://call--drop.herokuapp.com/api/phone/create", {
        number: this.state.number,
        is_postpaid: this.state.is_postpaid,
        owner: this.state.owner,
        kyc_agent: this.state.kyc_agent,
        last_known_location: this.state.last_known_location,
      })
      .then(function (response) {
        console.log(response);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="justify-content-center">
        <br />
        <br />
        <br />
        <br />

        <div className="justify-content-center ">
          <form className="text-black w-50 ">
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>Number</label>
              <input
                type="text"
                onChange={this.numberChange}
                value={this.state.value}
                className="form-control"
                placeholder="Number"
              />
            </div>
            <div className="form-group">
              <label>Is Postpaid</label>
              <input type="radio" className="form-control" onChange={this.is_postpaidChange} value="Yes" name="Yes" /> Yes
              <input type="radio" className="form-control"onChange={this.is_postpaidChange} value="No" name="No" /> No
            </div>
            <div className="form-group">
              <label>Owner</label>
              <input
                type="aadhar"
                onChange={this.ownerChange}
                className="form-control"
                placeholder="Owner"
              />
            </div>
            <div className="form-group">
              <label>KYC Agent</label>
              <input
                type="number"
                onChange={this.kyc_agentChange}
                className="form-control"
                placeholder="KYC Agent"
              />
            </div>

            <br />
            <Button type="submit" onClick={this.handleSubmit}>
              {" "}
              Sign Up
            </Button>

            <p className="forgot-password text-right">
              Already registered
              <a href="/login"> Login In ?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
