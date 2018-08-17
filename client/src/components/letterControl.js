import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Col,
  Input,
  Row,
  Progress,
  Label
} from "reactstrap";

class LetterControl extends Component {
  state = {};
  render() {
    return (
      <Col md="8">
        <Card>
          <CardBody>
            <br />
            <Row>
              <Col md="3">
                <Input placeholder="Name" />
              </Col>
              <Col md="1">Edit 46/46</Col>
            </Row>
            <br />
            <Row>
              <Col md="3">
                <Input placeholder="to" />
              </Col>
              <Col md="1">
                <Button>Analyze</Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="6">
                <Input type="textarea" placeholder="Content..." />
              </Col>
              <Col md="3">
                <Label>Anger</Label>
                <Progress color="danger" value="47">
                  25%
                </Progress>
                <Label>Joy</Label>
                <Progress color="success" value="22">
                  25%
                </Progress>
                <Label>Saddness</Label>
                <Progress value="99">25%</Progress>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="6">
                <i class="fas fa-arrow-circle-left" />
              </Col>
              <Col md="6">
                <i class="fas fa-arrow-circle-right" />
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <Button>Cancel</Button>
              </Col>

              <Col md="6">
                <Button>Save</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default LetterControl;