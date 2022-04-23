import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Formik, Field, ErrorMessage} from "formik";

export default class Ticket extends React.Component {
    render(){
        return(
            <div>
                <Card className="text-center bg-dark text-white">
                  <Card.Body>
                    <h1>Issue Ticket</h1>
                      <br />
                    <Card.Title>
                      Enter your details here to create a ticket
                    </Card.Title>
                    <br />
                    <Formik
                      initialValues={{
                        fullName: '',
                        email: '',
                        phone: '',
                        description: ''
                      }}
                      onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                      }}
                    >
                      <Form className="bg-dark" >
                        <div className="row mb-4">
                            <label htmlFor="fullName">Full Name</label>
                            <div className="col-md-15">
                                <Field id="fullName" name="fullName" placeholder="Shikhar" className="bg-dark text-white"/>
                            </div>
                        </div>


                        <div className="row mb-3">
                            <label htmlFor="description">Description</label>
                            <div className="col-sm-15">
                                <Field id="description" name="description" className="bg-dark text-white"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="email">Email</label>
                            <div className="col-sm-15">
                                <Field id="email" name="email" placeholder="shikhar@gmail.com" type="email" className="bg-dark text-white"/>
                            </div>
                        </div>

                        <br/>

                        <Button variant="primary"> Submit Ticket </Button>
                      </Form>
                    </Formik>
                  </Card.Body>
                  <Card.Footer className="text-muted"> 2 days ago </Card.Footer>
                </Card>
            </div>
        )
    }
}