import React, { FC } from "react";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import "./Style.css";

const CreateTodo: FC = (props:any) => {
  return (
    <>
      <Container fluid className="containers">
        <Card className="cards">
          <Card.Body>
            <Card.Title className="text-center text-success mb-4">
              Add Your Todo's
              <hr />
            </Card.Title>

            <Form onSubmit={props.formSubmit}>
              <Row>
                <Col>
                  <Form.Control type='text' name='task' placeholder="Enter your Task" />
                </Col>
                <Col>
                  
                  <Form.Control type='number' name='time' placeholder="Enter Time " />
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CreateTodo;
