import React, { Component } from "react";
import {Button} from "react-bootstrap";
import axios from "../axios";


export default class SMS extends Component {

    constructor(props) {
        super(props);
        this.state = {
            to: '',
            from: 8296446792,
            text: '',
        };
        this.toChange = this.toChange.bind(this);
        this.textChange = this.textChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toChange(event) {
        this.setState({
        to: event.target.value,
        });
    }

    textChange(event) {
        this.setState({
        text: event.target.value,
        });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.to);
        console.log('A name was submitted: ' + this.state.text);
        axios.post("https://call--drop.herokuapp.com/api/sms/create", {
            to_name: this.state.to,
            from_id: this.state.from,
            content: this.state.text,
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="bg-dark text-white">
                    <h3>Send SMS</h3>
                    <div className="form-group col-lg-2">
                        <label>To Number</label>
                        <input type="text" onChange={this.toChange} value={this.state.value} placeholder="to" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <input type="text arera"  onChange={this.textChange} value={this.state.textChange} className="form-control" placeholder="Description" />
                    </div>
                    <br />
                    <Button type="submit" onClick={this.handleSubmit} > Send Message </Button>
                </form>
            </div>
        );
    }
}
