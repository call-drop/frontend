import React from 'react';
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
        axios.get("https://call--drop.herokuapp.com/api/towers-to-maintain/", {withCredentials: true})
            .then(function (response) {
                console.log(response);
                this.setState({
                    towerList: response.data,
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
        <h1>Tower</h1>

      </div>
    );
  }
}