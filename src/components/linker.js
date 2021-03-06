import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../axios";

export default class Linked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: undefined,
      is_postpaid: false,
      owner: undefined,
      last_known_location: 4,
    };
    this.numberChange = this.numberChange.bind(this);
    this.is_postpaidChange = this.is_postpaidChange.bind(this);
    this.ownerChange = this.ownerChange.bind(this);
    this.last_known_locationChange = this.last_known_locationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  numberChange(event) {
    this.setState({
      number: event.target.value,
    });
  }

  is_postpaidChange(event) {
    console.log(event.target.value);
    this.setState({
      is_postpaid: event.target.value,
    });
  }

  ownerChange(event) {
    this.setState({
      owner: event.target.value,
    });
  }

  last_known_locationChange(event) {
    this.setState({
      last_known_location: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://call--drop.herokuapp.com/api/phone/create", {
        number: Number(this.state.number),
        is_postpaid: Boolean(this.state.is_postpaid),
        owner: Number(this.state.owner),
        last_known_location: Number(this.state.last_known_location),
        kyc_agent: "null",
      })
      .then(function (response) {
        console.log(response);
        toast.configure();
        toast.success("Linked Successfully");
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="justify-content-center bg-dark text-white">
        <br />
        <br />

        <div className="justify-content-center">
          <form className="text-white w-50">
            <h3>Linker</h3>
            <div className="form-group">
              <label>Number</label>
              <input
                type="number"
                onChange={this.numberChange}
                value={this.state.value}
                className="form-control"
                placeholder="Number"
              />
            </div>
            <br />

            <div className="form-group">
              <label>Is Postpaid</label>
              <div onChange={this.is_postpaidChange}>
                <input type="radio" name="optradio" value={true} />
                Yes
                <input type="radio" name="optradio" value={false} />
                No
              </div>
            </div>
            <br />
            <div className="form-group">
              <label>Owner</label>
              <input
                type="number"
                onChange={this.ownerChange}
                className="form-control"
                placeholder="Owner"
              />
            </div>

            <br />
            <Button type="submit" onClick={this.handleSubmit}>
              {" "}
              Link
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
