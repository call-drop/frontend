import {Formik} from "formik";
import React, { Component } from "react";
import axios from "../axios";
import { useFormik } from 'formik';

const Login = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      username: '',
      userid: '',
      password: '',
    },
    onSubmit: values => {
      localStorage.setItem('username', values.username);
      localStorage.setItem('userid', values.userid);
      localStorage.setItem('password', values.password);
      if (values.userid === '-1')
        localStorage.setItem('isEmp', "1");
      else
        localStorage.setItem('isEmp', "");
      window.location.reload();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />

      <label htmlFor="userid">User ID</label>
      <input
        id="userid"
        name="userid"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userid}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
