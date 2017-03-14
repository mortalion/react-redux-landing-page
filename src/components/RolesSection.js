import React, { Component } from 'react';
import { Button, Card, CardBlock, CardImg, CardSubtitle,
  CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import architect from '../assets/images/architect.jpg';
import leader from '../assets/images/leader.jpg';
import soldier from '../assets/images/soldier.jpg';
import './RolesSection.css';

class RolesSection extends Component {
  render() {
    return (
      <section id="roles" className="RolesSection">
				<Container>
          <Row>
            <Col>
              <h1>Roles I'm prepared to perform</h1>
    					<h6>Illustrated with paintings from my Haitian Art collection.</h6>
            </Col>
          </Row>
					<Row>
						<Col xs="12" md="4">
							<Card>
								<CardBlock>
									<CardTitle>Solution Architect</CardTitle>
									<CardSubtitle>Lean toward Isomorphic JavaScript</CardSubtitle>
								</CardBlock>
								<CardImg className="img-fluid" src={architect} alt="architect" />
								<CardBlock>
									<CardText>
                    <strong><em>Isomorphic JavaScript:</em></strong> These days, I
                    like to employ JavaScript on both the front and back ends. That often
                    leads me to select React for the client and Node for the server.
                  </CardText>
                  <Button tag="a" color="success" size="large"
                    href="http://iartx.com/armand-gesner.html" target="_blank">
                    Artist's Biography
                  </Button>
								</CardBlock>
							</Card>
            </Col>
            <Col xs="12" md="4">
							<Card>
								<CardBlock>
									<CardTitle>Technical Lead</CardTitle>
									<CardSubtitle>Geographically-dispersed teams</CardSubtitle>
								</CardBlock>
								<CardImg className="img-fluid" src={leader} alt="lead" />
								<CardBlock>
									<CardText>
                    <strong><em>Hands-On Leadership:</em></strong> I'll shepherd the
                    flock, and keep things rolling and on-track, but I've got to have my
                    hands in the code. I've been a manager; that's not for me.
                  </CardText>
                  <Button tag="a" color="success" size="large"
                    href="http://iartx.com/auguste-toussaint.html" target="_blank">
                    Artist's Biography
                  </Button>
								</CardBlock>
							</Card>
            </Col>
            <Col xs="12" md="4">
							<Card>
								<CardBlock>
									<CardTitle>Senior Developer</CardTitle>
									<CardSubtitle>Full-stack. Front. Middle. Back.</CardSubtitle>
								</CardBlock>
								<CardImg className="img-fluid" src={soldier} alt="developer" />
								<CardBlock>
									<CardText>
                    <strong><em>A Good Soldier:</em></strong> I can carry the water
                    and hoe the hard rows while turning sows' ears into silk purses.
                    Call it what you will, I buckle down and bring home the bacon.
                  </CardText>
                  <Button tag="a" color="success" size="large"
                    href="http://iartx.com/zephirin-frantz.html" target="_blank">
                    Artist's Biography
                  </Button>
								</CardBlock>
							</Card>
            </Col>
					</Row>
				</Container>
      </section>
    );
  }
}

export default RolesSection;
