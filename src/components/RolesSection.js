import React, { Component } from 'react';
import { Button, Card, CardBlock, CardImg, CardSubtitle, CardText,
  CardTitle, Col, Container, Row } from 'reactstrap';
import architect from '../assets/architect.jpg';
import leader from '../assets/leader.jpg';
import soldier from '../assets/soldier.jpg';
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
						<Col>
  							<Card>
  								<CardBlock>
  									<CardTitle>Solution Architect</CardTitle>
  									<CardSubtitle>Lean toward Isomorphic JavaScript</CardSubtitle>
  								</CardBlock>
  								<CardImg className="img-fluid" src={architect} alt="architect" />
  								<CardBlock>
  									<CardText>
                      <strong><em>Isomorphic JavaScript:</em></strong> Tech-speak for a
                      solution that uses JavaScript on both the front and back ends.
                      Today, I really like permutations of React on the client and
                      Node.js on the server. Using GraphQL for data access makes me smile.
                    </CardText>
                    <Button tag="a" color="success" size="large"
                      href="http://iartx.com/armand-gesner.html" target="_blank">
                      Artist's Biography
                    </Button>
  								</CardBlock>
  							</Card>
              </Col>
              <Col>
  							<Card>
  								<CardBlock>
  									<CardTitle>Technical Lead</CardTitle>
  									<CardSubtitle>Geographically-dispersed teams</CardSubtitle>
  								</CardBlock>
  								<CardImg className="img-fluid" src={leader} alt="lead" />
  								<CardBlock>
  									<CardText>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                      cum quo itaque qui perferendis.
                    </CardText>
                    <Button tag="a" color="success" size="large"
                      href="http://iartx.com/auguste-toussaint.html" target="_blank">
                      Artist's Biography
                    </Button>
  								</CardBlock>
  							</Card>
              </Col>
              <Col>
  							<Card>
  								<CardBlock>
  									<CardTitle>Senior Developer</CardTitle>
  									<CardSubtitle>Full-stack. Front. Middle. Back.</CardSubtitle>
  								</CardBlock>
  								<CardImg className="img-fluid" src={soldier} alt="developer" />
  								<CardBlock>
  									<CardText>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                      cum quo itaque consectetur adipisicing elit qui perferendis.
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
