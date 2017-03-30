import React, { Component } from 'react';
import { Card, CardBlock, CardImg, CardSubtitle, CardText,
  CardTitle, Col, Container, Row } from 'reactstrap';
import architect from '../assets/images/architect-8.jpg';
import leader from '../assets/images/leader-8.jpg';
import soldier from '../assets/images/soldier-8.jpg';
import './RolesSection.css';

class RolesSection extends Component {
  constructor(props) {
    super(props);
    this.state =  { loading: 3 }; // Loading the 3 card images
    this.showSection = this.showSection.bind(this);
  }
  showSection() {
    let { loading } = this.state;
    this.showSection = (loading === 0);
  }
  imageLoaded() {
    let remaining_to_load = this.state.loading -1;
    this.setState({ loading: remaining_to_load });
  }
  render() {
    let classHide = this.state.showsection ? "hide" : "";
    return (
      <section id="roles" className={"RolesSection " + classHide}>
        <Container>
          <Row>
            <Col>
              <h1>Roles I&rsquo;m prepared to perform</h1>
              <h6 className="subhead">
                Illustrated with paintings from my Haitian Art collection.
              </h6>
            </Col>
          </Row>
          <Row>
            <Col className="card-column" xs="12" sm="4">
              <Card>
                <CardBlock>
                  <CardTitle>Solution Architect</CardTitle>
                  <CardSubtitle>Favor Isomorphic JavaScript</CardSubtitle>
                </CardBlock>
                <CardImg className="img-fluid" src={architect} alt="architect"
                  onLoad={this.imageLoaded.bind(this)} />
                <CardBlock>
                  <CardText>
                    <strong><em>Isomorphic JavaScript:</em></strong> These days, I
                    like to employ JavaScript on both the front and back ends. That often
                    leads me to select React for the client and Node for the server.
                  </CardText>
                </CardBlock>
              </Card>
            </Col>
            <Col className="card-column" xs="12" sm="4">
              <Card>
                    <CardBlock>
                      <CardTitle>Technical Lead</CardTitle>
                      <CardSubtitle>Geographically-Dispersed Teams</CardSubtitle>
                    </CardBlock>
                <CardImg className="img-fluid" src={leader} alt="lead"
                  onLoad={this.imageLoaded.bind(this)} />
                <CardBlock>
                  <CardText>
                    <strong><em>Hands-On Leadership:</em></strong> I&rsquo;ll mentor and
                    shepherd the flock, keep things moving and on-track. But I&rsquo;ve got
                    to have my paws in the code. I&rsquo;ve been a manager; that&rsquo;s not for me.
                  </CardText>
                </CardBlock>
              </Card>
            </Col>
            <Col className="card-column" xs="12" sm="4">
              <Card>
                <CardBlock>
                  <CardTitle>Senior Developer</CardTitle>
                  <CardSubtitle>Full-stack. Front. Middle. Back.</CardSubtitle>
                </CardBlock>
                <CardImg className="img-fluid" src={soldier} alt="developer"
                  onLoad={this.imageLoaded.bind(this)} />
                <CardBlock>
                  <CardText>
                    <strong><em>A Good Soldier:</em></strong> I can carry the water
                    and hoe the hard rows while turning sows&rsquo; ears into silk purses.
                    I buckle down and bring home the bacon. And I eat up metaphors.
                  </CardText>
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
