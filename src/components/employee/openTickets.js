import React from 'react';
import axios from '../../axios';

export default class openTickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketList: [],
        };
        this.handleGetList = this.handleGetList.bind(this);
    }

    handleGetList() {
        axios.get("https://call--drop.herokuapp.com/api/tickets/list", {withCredentials: true})
            .then(function (response) {
                console.log(response);
                this.setState({
                    ticketList: response.data.data,
                });
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.handleGetList();
    }

  render() {
    return (
      <div>
        <h1>Open Tickets Available</h1> 
        <ul>
            {this.state.ticketList.map((value) => (
                <li key={value}>{value}</li>
            ))}
        </ul>
      </div>
    );
  }
}