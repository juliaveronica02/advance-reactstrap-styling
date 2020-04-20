import React from "react";
import "./styles.css";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Card,
  CardTitle
} from "reactstrap";

export default function App() {
  return (
    <div className="wrapper">
      <div className="contact">
        <h3>Hello World</h3>
      </div>
      <Container className="form">
        <Card>
          <CardTitle>Login Page</CardTitle>
          <Form>
            <FormGroup>
              <Input type="email" name="email" placeholder="@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" placeholder="******" />
            </FormGroup>
            <Button outline color="primary" block>
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
