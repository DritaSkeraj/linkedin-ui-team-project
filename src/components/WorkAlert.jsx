import React from "react";
import { Button, Alert, Card, Container, Row } from "react-bootstrap";
import "./styles/WorkAlert.css";

class WorkAlert extends React.Component {
  state = {
    show: true,
  };
  render() {
    if (this.state.show) {
      return (
        <>
          <Alert
            id="sideNav"
            onClose={() => this.setState({ show: false })}
            dismissible
          >
            <Card>
              <Card.Header>Visit More LinkedIn Products</Card.Header>
              <Card.Body>
                <Container fluid>
                  <Row>
                    <Card>
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-talent-insights-medium-a"
                              x1="34.05"
                              y1="44.47"
                              x2="13.67"
                              y2="19.5"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#665ed0"></stop>
                              <stop offset="1" stop-color="#0073b1"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z"
                            fill="#caedff"
                          ></path>
                          <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                          <path
                            d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                            fill="url(#app-talent-insights-medium-a)"
                          ></path>
                        </svg>
                        <span>Insights</span>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>Insights</Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>Insights</Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>Insights</Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>Insights</Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>Insights</Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>Insights</Card.Body>
                    </Card>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Alert>
          <div className="backgroundFade"></div>
        </>
      );
    } else {
      return (
        <Button onClick={() => this.setState({ show: true })}>Show</Button>
      );
    }
  }
}

export default WorkAlert;