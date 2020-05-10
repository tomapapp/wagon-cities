import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class City extends Component {
  render() {
    return (
      <div className="active-city">
          <h3>{this.props.activeCity.name}</h3>
          <p>{this.props.activeCity.address}</p>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} width="100%" alt=""/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    activeCity: state.activeCity
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {setActiveCity: setActiveCity},
//     dispatch
//   );
// }

export default connect(mapStateToProps, null)(City);
