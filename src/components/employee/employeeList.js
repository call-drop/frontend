import React, { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../../axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function Employee() {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");

  const getKyc = () => {
    axios
      .get("/api/employee/list/" + search)
      .then((response) => {
        setList(response.data.data);
        setLoading(false);
        toast.configure();
        toast.success("Employee List Loaded");
      })
      .catch(function (error) {
        console.log(error);
        toast.configure();
        toast.error(error);
      });
  };

  useEffect(() => {
    if (loading) {
      getKyc();
    }
  });


  return (
    <div className=" justify-content-center">
      <div className="w-auto">
        <h1> Employee Lists </h1>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        <Button onClick={(e)=> {
        window.location.href = "/employeelist";
        }}>Reload search</Button>
        <br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <td>Date Of Birth</td>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Works At</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              list.map((values, plan) => (
                <tr>
                  <td>{values.id}</td>
                  <td>{values.date_of_birth}</td>

                  <td>{values.first_name}</td>
                  <td>{values.middle_name}</td>
                  <td>{values.last_name}</td>
                  <td>{values.works_at}</td>
                  <td>{values.type}</td>
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