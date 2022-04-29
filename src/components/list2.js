import React from "react";
import axios from "../axios";
import { toast } from "react-toastify";

export default function List2() {
  const [plans, setPlans] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [start_time, setStart_time] = React.useState(new Date());
  // make a function
  const getPlans = () => {
    axios
      .get("/api/get-analytics/" + start_time)
      .then((response) => {
        setPlans(response.data);
        setLoading(false);
        toast.configure();
        toast.configure();
        toast.success("Plans fetched successfully");
      })
      .catch(function (error) {
        console.log(error);
        toast.configure();
        toast.error(error);
      });
  };


  console.log(plans);

  return (
    <div className=" justify-content-center">
      <div className="w-75">
        <h1> calls</h1>
        <input
          type="number"
          name="number"
          value={start_time}
          onChange={(e) => setStart_time(e.target.value)}
        />

        <button
          onClick={(e) => {
            getPlans();
          }}
        >
          Get
        </button>

        {loading ? "loading" : JSON.stringify(plans)}
      </div>
    </div>
  );
}
