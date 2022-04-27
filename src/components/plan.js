import React from 'react';
import Card from "react-bootstrap/Card";
import {Row, Col} from "react-bootstrap";

export default class Plan extends React.Component {
    render() {
        return (
            <div>
                <Row xs={4} md={4} className="g-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                      <Card className="bg-dark text-white">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                          <Card.Title>Card title</Card.Title>
                          <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
            </div>
        );
    }
}