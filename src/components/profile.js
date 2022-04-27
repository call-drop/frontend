import React, { Component } from "react";
import axios from "../axios";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberList: [],
            customerId:'',
        };
        this.handleGetList = this.handleGetList.bind(this);
        this.onChangeCustomerId = this.onChangeCustomerId.bind(this);
    }


    handleGetList() {
        axios.get("https://call--drop.herokuapp.com/api/customer/phone_number_list/" + this.state.customerId, {withCredentials: true})
        .then(function (response) {
            console.log(response);
            toast.configure();
            toast.success("Phone Numbers List Retrieved");
            this.setState({
                numberList: response.data,
            });
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }
    
    onChangeCustomerId(e) {
        this.setState({
            customerId: e.target.value,
        });
    }
    
    render() {
        console.log(this.state.numberList);
        return (
            <div className="bg-dark text-white">
                <h1>Welcome to your Profile</h1>

                <div className="form-group">
                    <label>Customer ID</label>
                    <input type="customerId" onChange={this.onChangeCustomerId} value={this.state.customerId} className="form-control" placeholder="Customer ID" />
                </div>

                <Button type="submit" onClick={this.handleGetList} > Submit </Button>

                {() => {if (this.state.numberList.length > 0) {
                    return (
                        <div>
                            The list of the customers:
                            <ul>
                                {this.state.numberList.map((val) => {
                                    return (
                                        <li key={val}>
                                            {val}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                }
                else {
                    return (
                        <div className="bg-dark text-white">
                            <h2>No Phone Numbers Available</h2>
                        </div>
                    );
                }
            }}
            </div>
        );
    }
}
