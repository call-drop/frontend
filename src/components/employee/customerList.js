import React, { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../../axios";
import Table from "react-bootstrap/Table";


export default function CutomerList() {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getKyc = () => {
    axios
      .get("/api/customer/list")
      .then((response) => {
        setList(response.data.data);
        setLoading(false);
        toast.configure();
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
      <div className="w-auto">
        <h1> Customer Lists </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <td>Aadhar Number</td>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              list.map((values, plan) => (
                <tr>
                  <td>{values.id}</td>
                  <td>{values.aadhar_number}</td>

                  <td>{values.first_name}</td>
                  <td>{values.middle_name}</td>
                  <td>{values.last_name}</td>
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