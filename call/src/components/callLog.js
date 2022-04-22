import React from 'react';
import {Table} from "react-bootstrap";
import axios from 'axios';

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
        axios.get('/api/callLog')
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
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                    <tr>
                      <th>#</th>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index}>Table heading</th>
                      ))}
                    </tr>
                  </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>2</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>3</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                  </tbody>
                </Table>
            </div>
        )
    }
}