import React from 'react';
import {Table} from "react-bootstrap";
import axios from "../axios";

export default class CallLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            callLog: [],
            callLogLoading: true,
            callLogError: false
        };
    }

    componentDidMount() {
        axios.get('https://call--drop.herokuapp.com/')
            .then(response => {
                this.setState({
                    callLog: response.data,
                    callLogLoading: false,
                    callLogError: false
                });
            })
            .catch(error => {
                this.setState({
                    callLogLoading: false,
                    callLogError: true
                });
            }); }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.callLog !== this.props.callLog) {
            this.setState({
                callLog: this.props.callLog,
                callLogLoading: false,
                callLogError: false
            });
        }
    }

    render(){
        return(
            <div>
                <h1 className="bg-dark text-white"> Welcome {"User"} ! </h1>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                          <th>User Name</th>
                          <th>Last Location</th>
                          <th>KYC Check</th>
                          <th>Number of Calls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.callLog.map((option) => (
                            <tr key={option.id}>{option.name}</tr>
                        ))}
                      </tbody>
                </Table>
            </div>
        )
    }
}
