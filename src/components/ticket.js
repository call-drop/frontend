import React from "react";
import { Button, Card } from "react-bootstrap";
import { Form, Formik, Field } from "formik";
import axios from "axios";

export default class Ticket extends React.Component {
  render() {
    return (
      <div>
        <Card className="text-center bg-dark text-white">
          <Card.Body>
            <h1>Issue Ticket</h1>
            <br />
            <Card.Title>Enter your details here to create a ticket</Card.Title>
            <br />
            <Formik
              initialValues={{
                ticket_mobile_number: "",
                details: "",
              }}
              onSubmit={async (values) => {
                await axios.post(
                  "https://call--drop.herokuapp.com/api/ticket/create",
                  values
                );
              }}
            >
              <Form className="bg-dark">
                <div className="row mb-4">
                  <label htmlFor="fullName">Mobile Number</label>
                  <div className="col-md-15">
                    <Field
                      id="ticket_mobile_number"
                      name="ticket_mobile_number"
                      placeholder="9900348807"
                      className="bg-dark text-white"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="description">Description</label>
                  <div className="col-sm-15">
                    <Field
                      id="details"
                      name="details"
                      placeholder="description"
                      className="bg-dark text-white"
                    />
                  </div>
                </div>

                <br />

                <Button variant="primary" type="submit">
                  {" "}
                  Submit Ticket{" "}
                </Button>
              </Form>
            </Formik>
          </Card.Body>
          <Card.Footer className="text-muted"> 2 days ago </Card.Footer>
        </Card>
      </div>
    );
  }
}
