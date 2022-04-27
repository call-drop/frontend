import React from 'react';
import { toast } from 'react-toastify';
import axios from '../../axios';

export default class Tower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            towerList: [],
        };
        this.handleGetList = this.handleGetList.bind(this);
    }

    handleGetList() {
        axios.get("https://call--drop.herokuapp.com/api/towers-to-maintain", {withCredentials: true})
            .then(function (response) {
                console.log(response);
                toast.success("List of the towers");
                this.setState({
                    towerList: response.data.data.data,
                });
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.handleGetList();
        console.log("lol", this.state.towerList);
    }

  render() {
    return (
      <div>
        <h1>Tower</h1>
        <ul>
            {this.state.towerList.map((value) => (
                <li key={value}>{value}</li>
            ))}
        </ul>
      </div>
    );
  }
}