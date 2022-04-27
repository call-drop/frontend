import React, { useEffect } from "react";
import axios from "../../axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";

export default function KYC() {
  const [kyc, setKyc] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // make a function
  const getKyc = () => {
    axios
      .get("/api/tickets/list")
      .then((response) => {
        setKyc(response.data.data);
        setLoading(false);
        toast.success("Tickets fetched successfully");
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
      <div className="w-75">
        <h1> Unchecked KYC </h1>
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
              kyc.map((values, plan) => (
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
