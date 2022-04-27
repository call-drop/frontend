import React, { Component } from "react";
import {Button} from "react-bootstrap";
import axios from "axios";


export default class customerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            callList: [],
            employee: this.props.employee
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleGetList(event) {
        axios.get("https://call--drop.herokuapp.com/api/customer/list")
        .then(function (response) {
            console.log(response);
            this.setState({
                callList: response.data,
            });
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                The list of the customers:
                <ul>
                    callList.map(function(call) {
                        <li>{call.firstName} {call.lastName}</li>
                    })
                </ul>
                    
            </div>
        );
    }
}
