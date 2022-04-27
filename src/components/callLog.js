import React from "react";
import axios from "../axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function CallLog() {
  const [calls, setCalls] = React.useState([]);
  const [number, setNumber] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const getCalls = () => {
    axios
      .get("/api/phone/data/"+ number)
      .then((response) => {
        setCalls(response.data.data);
        setLoading(false);
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
        <h1> Plans</h1>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Number" />
        <Button type="submit" onClick={() => getCalls(number)} > Submit </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <td>bandwidth_used</td>
              <th>end_time</th>
              <th>is_active</th>
              <th>kyc_agent</th>
              <th>last_known_location</th>
              <th>mobile_number</th>
              <th>owner</th>
              <th>owner</th>
              <th>start_time</th> 
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              calls.map((values, plan) => (
                <tr>
                  <td>{values.id}</td>
                  <td>{values.bandwidth_used}</td>

                  <td>{values.end_time}</td>
                  <td>{values.is_active}</td>
                  <td>{values.is_postpaid}</td>
                  <td>{values.kyc_agent}</td>
                  <td>{values.last_known_location}</td>
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
