import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectLogo } from '../actions/index.js';
import { Col, Container, Row } from 'reactstrap';
import './ClientsSection.css';

class ClientsSection extends Component {
  renderList() {
    return this.props.logos.map((logo) => {
      return (
        <Col key={logo.id} className="client_logo" xs="4" sm="3" md="2">
          <img className="img-fluid"
            src={logo.image_path} alt={logo.name} />
        </Col>
      );
    });
  }
  render() {
    return (
      <section id="clients" className="ClientsSection">
        <Container>
          <Row>
            <Col>
              <h6>Here&rsquo;s an even dozen of my previous employers and clients</h6>
            </Col>
          </Row>
          <Row>
            {this.renderList()}
          </Row>
        </Container>
      </section>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up in the props of this (ClientsSection)
  return {
    logos: state.logos
  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectLogo is called, the result should be passed
  //  to all of our reducers.
  return bindActionCreators({ selectLogo: selectLogo}, dispatch);
}

// Promote ClientsSection from a React component to a Redux container.
// It needs to know about this new dispatch method, selectCompany,
//  and make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ClientsSection);
