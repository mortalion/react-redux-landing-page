import React, { Component } from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'reactstrap';
import Header from './Header';
import NowSection from './NowSection';
import RolesSection from './RolesSection';
import ThenSection from './ThenSection';
import WhoSection from './WhoSection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NowSection />
        <RolesSection />
        <ThenSection />
        <WhoSection />

        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Welcome to React</h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="http://reactstrap.github.io"
                    target="_blank"
                  >
                    View Reactstrap Docs
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
