import React, { Component } from "react";
import {Button} from "react-bootstrap";
import axios from "axios";


export default class Call  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            to: '',
            from: 8296446792,
        };
        this.toChange = this.toChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toChange(event) {
        this.setState({
        to: event.target.value,
        });
    }


    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.to);
        axios.post("https://call--drop.herokuapp.com/api/phone/sms/" + String(this.state.to), {
            to: this.state.to,
            from: this.state.from,
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
                    <h3>Send Call</h3>
                    <div className="form-group col-lg-2">
                        <label>To Number</label>
                        <input type="text" onChange={this.toChange} value={this.state.value} placeholder="to" />
                    </div>

                    <div className="form-group col-lg-2">
                        <label>From Number</label>
                        <input type="text" placeholder={this.state.from} disabled="true"/>
                    </div>

                    <br />
                    <Button type="submit" onClick={this.handleSubmit} > Call </Button>
                </form>
            </div>
        );
    }
}
