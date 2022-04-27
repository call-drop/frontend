import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../axios";

export default class Call extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: undefined,
      from: undefined,
    };
    this.toChange = this.toChange.bind(this);
    this.fromChange = this.fromChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toChange(event) {
    this.setState({
      to: event.target.value,
    });
  }
  fromChange(event) {
    this.setState({
      from: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("A name was submitted: " + this.state.to);
    axios
      .post("https://call--drop.herokuapp.com/api/call/create", {
        to_name: Number(this.state.to),
        from_id: Number(this.state.from),
        duration: Math.floor(Math.random() * 500),
      })
      .then(function (response) {
        toast.success("sucess")
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="bg-dark text-white">
          <h3>Send Call</h3>
          <div className="form-group col-lg-2">
            <label>To Number</label>
            <input
              type="number"
              onChange={this.toChange}
              value={this.state.to}
              placeholder="to"
            />
          </div>
          <div className="form-group col-lg-2">
            <label>From Number</label>
            <input
              type="number"
              onChange={this.fromChange}
              value={this.state.from}
              placeholder="from"
            />
          </div>

          <br />
          <Button type="submit" onClick={this.handleSubmit}>
            {" "}
            Call{" "}
          </Button>
        </form>
      </div>
    );
  }
}
