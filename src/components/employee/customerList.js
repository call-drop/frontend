import React, { Component } from "react";
import { toast } from "react-toastify";
import axios from "../../axios";


export default class customerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            callList: [],
            employee: this.props.employee
        };
        this.handleGetList = this.handleGetList.bind(this);
    }


    handleGetList() {
        if (this.state.employee) {
            axios.get("https://call--drop.herokuapp.com/api/customer/list", {withCredentials: true})
                .then(function (response) {
                    toast.success("List of the customers");
                    console.log(response);
                    this.setState({
                        callList: response.data,
                    });
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
     componentDidMount() {
        this.handleGetList();
    }

    render() {
        console.log(this.state.callList);
        return (
            <div>
                The list of the customers:
                <ul>
                    {this.state.callList.map((val) => {
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
}
