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
        <div class="section-content">
  				<Container>
  					<h3>Roles I'm happy (and qualifed) to perform</h3>
  					<p>Illustrated with paintings from my Haitian Art collection.</p>
  					<Row>

  						<Col xs="6" sm="4">
  							<Card>
									<CardBlock>
										<CardTitle>Solution Architect</CardTitle>
										<CardSubtitle className="Roles-CardSubtitle">
                      Lean toward Isomorphic JavaScript
                    </CardSubtitle>
									</CardBlock>
									<CardImg className="img-fluid" src={architect} alt="chalkboard" />
									<CardBlock>
										<CardText className="Roles-CardText">
                      <strong><em>Isomorphic JavaScript:</em></strong> Tech-speak for a
                      solution that uses JavaScript on both the front and back ends.
                      Today, I really like permutations of React on the client and
                      Node.js on the server. Using GraphQL for data access makes me smile.
                    </CardText>
									</CardBlock>
								</Card>
              </Col>

              <Col xs="6" sm="4">
  							<Card>
									<CardBlock>
										<CardTitle>Technical Lead</CardTitle>
										<CardSubtitle className="Roles-CardSubtitle">
                      Geographically-dispersed teams
                    </CardSubtitle>
									</CardBlock>
									<CardImg className="img-fluid" src={leader} alt="chalkboard" />
									<CardBlock>
										<CardText className="Roles-CardText">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                      cum quo itaque qui perferendis.
                    </CardText>
									</CardBlock>
								</Card>
              </Col>

              <Col sm="4">
  							<Card>
									<CardBlock>
										<CardTitle>Senior Developer</CardTitle>
										<CardSubtitle className="Roles-CardSubtitle">
                      Full-stack. Front. Middle. Back.
                    </CardSubtitle>
									</CardBlock>
									<CardImg className="img-fluid" src={soldier} alt="chalkboard" />
									<CardBlock>
										<CardText className="Roles-CardText">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                      cum quo itaque qui perferendis.
                    </CardText>
									</CardBlock>
								</Card>
              </Col>

  					</Row>
  				</Container>
  			</div>
      </section>
    );
  }
}

export default RolesSection;
