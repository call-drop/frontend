import React, { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../../axios";
import Table from "react-bootstrap/Table";

export default function Tower() {
  const [towerList, settowerList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // make a function
  const getData = () => {
    axios
      .get("https://call--drop.herokuapp.com/api/towers-to-maintain", {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response.data.data, " response data");
        settowerList(response.data.data);
        setLoading(false);
        console.log(response);
        toast.configure();
        toast.success("List of the towers");
      })
      .catch(function (error) {
        console.log(error);
        toast.configure();
        toast.error(error);
      });
  };

  useEffect(() => {
    if (loading) {
      getData();
    }
  });

  console.log(towerList, " is tower list");

  return (
    <div className=" justify-content-center">
      <div className="w-75">
        <h1> Towers </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>apt_number</th>
              <td>last_maintained</td>
              <th>needs_maintenance</th>
              <th>maintenance_office</th>
              <th>street_name</th>
              <th>street_number</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              towerList.map((values, plan) => (
                <tr>
                  <td>{values.id}</td>
                  <td>{values.apt_number}</td>
                  <td>{values.last_maintained}</td>
                  <td>{values.needs_maintenance ? "True" : "False"}</td>

                  <td>{values.maintenance_office}</td>
                  <td>{values.street_name}</td>
                  <td>{values.street_number}</td>
                </tr>
              ))
            ) : (
              <div>Loading</div>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
