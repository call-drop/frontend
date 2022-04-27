import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../axios";

export default class MMS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_name: undefined,
      from_id: undefined,
      subject: "",
      file_name: "",
      content: "",
    };
    this.toChange = this.toChange.bind(this);
    this.fromChange = this.fromChange.bind(this);
    this.subjectChange = this.subjectChange.bind(this);
    this.filenameChange = this.filenameChange.bind(this);
    this.contentChange = this.contentChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toChange(event) {
    this.setState({
      to_name: event.target.value,
    });
  }

  fromChange(event) {
    this.setState({
      from_id: event.target.value,
    });
  }

  subjectChange(event) {
    this.setState({
      subject: event.target.value,
    });
  }
  filenameChange(event) {
    this.setState({
      file_name: event.target.value,
    });
  }
  contentChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://call--drop.herokuapp.com/api/mms/create", {
        to_name: this.state.to_name,
        from_id: this.state.from_id,
        subject: this.state.subject,
        file_name: this.state.file_name,
        content: this.state.content,
      })
      .then(function (response) {
        console.log(response);
        toast.configure();
        toast.success("Message Sent");
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
          <h3>Send MMS</h3>
          <div className="form-group col-lg-2">
            <label>To Number</label>
            <input
              type="number"
              onChange={this.toChange}
              value={this.state.to_name}
              className="form-control"
              placeholder="to id"
            />
          </div>

          <div className="form-group col-lg-2">
            <label>From Number</label>
            <input
              type="number"
              onChange={this.fromChange}
              value={this.state.from_id}
              placeholder="from id"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              onChange={this.subjectChange}
              value={this.state.subject}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label>File Name</label>
            <input
              type="text"
              onChange={this.filenameChange}
              value={this.state.file_name}
              className="form-control"
              placeholder="file name"
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              onChange={this.contentChange}
              value={this.state.content}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <br />
          <Button type="submit" onClick={this.handleSubmit}>
            {" "}
            Send Message{" "}
          </Button>
        </form>
      </div>
    );
  }
}
