import React, { useEffect } from "react";
import axios from "../axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";

export default function Plan() {
  const [plans, setPlans] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // make a function
  const getPlans = () => {
    axios
      .get("/api/plan/list")
      .then((response) => {
        setPlans(response.data.data);
        setLoading(false);
        toast.success("Plans fetched successfully");
      })
      .catch(function (error) {
        console.log(error);
        toast.configure();
        toast.error(error);
      });
  };

  useEffect(() => {
    if (loading) {
      getPlans();
    }
  });

  console.log(plans);

  return (
    <div className=" justify-content-center">
      <div className="w-75">
        <h1> Plans</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <td>validity</td>
              <th>cost</th>
              <th>type</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              plans.map((values, plan) => (
                <tr>
                  <td>{values.id}</td>
                  <td>{values.validity}</td>

                  <td>{values.cost}</td>
                  <td>{values.type}</td>
                  <td>{values.value}</td>
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
