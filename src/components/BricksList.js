import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTechnology } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import './BricksList.css';

class BricksList extends Component {
  renderList() {
		return this.props.technologies.map((technology) => {
			return (
        <Button key={technology.id} className="brick" outline>
          {technology.name}
        </Button>
			);
		});
	}
	render() {
		return (
      <div className="BricksList">
        {this.renderList()}
      </div>
		);
	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up in the props of this (BricksList)
	return {
		technologies: state.technologies
	};
}

function mapDispatchToProps(dispatch) {
	// Whenever selectTechnology is called, the result should be passed
	//  to all of our reducers.
	return bindActionCreators({ selectTechnology: selectTechnology}, dispatch);
}

// Promote BricksList from a React component to a Redux container.
// It needs to know about this new dispatch method, selectTechnology,
//  and make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BricksList);
