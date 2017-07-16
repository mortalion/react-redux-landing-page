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
    this.imageLoaded = this.imageLoaded.bind(this);
  }
  imageLoaded() {
    this.setState(prevState => ({
      loading: prevState.loading - 1
    }));
  }
  render() {
    //console.log(this.state.loading);
    let classHide = this.state.loading > 0 ? "hide" : "";
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
                  <CardTitle>Solutions Architect</CardTitle>
                  <CardSubtitle>Favor Serverless Solutions</CardSubtitle>
                </CardBlock>
                <CardImg className="img-fluid" src={architect} alt="architect"
                  onLoad={this.imageLoaded} />
                <CardBlock>
                  <CardText>
                    <strong><em>Isomorphic JavaScript:</em></strong> I
                    leverage server-side rendering with Node.js for enhanced SEO. I look to serverless solutions for performance, reliability, and cost-savings.
                  </CardText>
                </CardBlock>
              </Card>
            </Col>
            <Col className="card-column" xs="12" sm="4">
              <Card>
                    <CardBlock>
                      <CardTitle>Technical Lead</CardTitle>
                      <CardSubtitle>Globally-Dispersed Teams</CardSubtitle>
                    </CardBlock>
                <CardImg className="img-fluid" src={leader} alt="lead"
                  onLoad={this.imageLoaded} />
                <CardBlock>
                  <CardText>
                    <strong><em>Hands-On Leadership:</em></strong> I&rsquo;ll mentor the team,     shepherd the flock. But I&rsquo;ve got to have my paws in the code more often than not. Meetings to plan meetings are not my cup of tea.
                  </CardText>
                </CardBlock>
              </Card>
            </Col>
            <Col className="card-column" xs="12" sm="4">
              <Card>
                <CardBlock>
                  <CardTitle>Senior Developer</CardTitle>
                  <CardSubtitle>Full-stack. Front to Back.</CardSubtitle>
                </CardBlock>
                <CardImg className="img-fluid" src={soldier} alt="developer"
                  onLoad={this.imageLoaded} />
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
