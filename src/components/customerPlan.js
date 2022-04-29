import React from "react";
import axios from "../axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function PersonalPlan() {
  const [plan, setPlan] = React.useState([]);
  const [number, setNumber] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const getCalls = () => {
    axios
      .get("/api/phone/data/" + number)
      .then((response) => {
        setPlan(response.data.data);
        setLoading(false);
        toast.configure();
        toast.success("Calls fetched successfully");
      })
      .catch(function (error) {
        console.log(error);
        toast.configure();
        toast.error(error);
      });
  };

  return (
    <div className=" justify-content-center">
      <div className="w-75">
        <h1> Personal Call Logs</h1>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter Number"
        />
        <Button type="submit" onClick={() => getCalls(number)}>
          {" "}
          Submit{" "}
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <td>bandwidth_used</td>
              <th>end_time</th>
              <th>is_active</th>
              <th>is_postpaid</th>
              <th>kyc_agent</th>
              <th>last_known_location</th>
              <th>mobile_number</th>
              <th>owner</th>
              <th>phone_data</th>
              <th>start_time</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              plan.map((values, plan) => (
                <tr>
                  <td>{values.id}</td>
                  <td>{values.bandwidth_used}</td>
                  <td>{values.end_time}</td>
                  <td>{values.is_active ? "True" : "False"}</td>
                  <td>{values.is_postpaid ? "True" : "False"}</td>
                  <td>{values.kyc_agent}</td>
                  <td>
                    {values.last_known_location === null
                      ? " NA"
                      : values.last_known_location}
                  </td>
                  <td>{values.mobile_number}</td>
                  <td>{values.owner}</td>

                  <td>{values.phone_data}</td>
                  <td>{values.start_time}</td>
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
