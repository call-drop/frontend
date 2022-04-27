import React from 'react';
import axios from '../../axios';
import Table from "react-bootstrap/Table";


export default class OpenTickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketList: [],
            loading: true,
        };
        this.handleGetList = this.handleGetList.bind(this);
    }

    handleGetList() {
        axios.get("https://call--drop.herokuapp.com/api/tickets/list", {withCredentials: true})
            .then(function (response) {
                console.log(response);
                this.setState({
                    ticketList: response.data.data,
                    loading:false
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <td>raiser </td>
              <th>resolver</th>
              <th>timestamp</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {!this.state.loading ? (
              this.state.ticketList.map((values) => (
                <tr>
                  <td>{values.id}</td>
                  <td>{values.raiser}</td>
                  <td>{values.resolver}</td>
                  <td>{values.timestamp}</td>
                  <td>{values.status ? <p>True</p>: <p>False</p>}</td>
                </tr>
              ))
            ) : (
              <div>Loading</div>
            )}
          </tbody>
        </Table> 
       
      </div>
    );
  }
}