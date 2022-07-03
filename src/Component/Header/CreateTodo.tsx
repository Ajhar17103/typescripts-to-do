import React, { FC } from "react";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import "./Style.css";


interface Props {
  handleFormSubmit:any
  onChangeHandler:any 
 
}

const CreateTodo= ({handleFormSubmit,onChangeHandler}:Props) => {
  
  return (
    <>
      <Container fluid className="containers">
        <Card className="cards">
          <Card.Body>
            <Card.Title className="text-center text-success mb-4">
              Add Your Todo's
              <hr />
            </Card.Title>

            <Form onSubmit={handleFormSubmit} >
              <Row>
                <Col>
                  <Form.Control type='text' name='task' onChange={onChangeHandler} placeholder="Enter your Task" />
                </Col>
                <Col>
                  
                  <Form.Control type='number' name='time' onChange={onChangeHandler}  placeholder="Enter Time " />
                </Col>
                <Col>
                  <Button variant="primary" type="submit"  >
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
