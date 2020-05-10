import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import { setActiveCity } from '../actions';

import City from './city';

class CityList extends Component {
  handleClick = (event) => {
    this.props.setActiveCity(event.target.innerHTML);
  }

  renderList = () => {
    return this.props.cities.map((city, index) => {
      return(
        <li className="list-group-item" key={index} onClick={this.handleClick}>{city.name}</li>
      );
    });
  }

  componentWillMount() {
    this.props.setCities();
  }


  render() {
    return (
      <div className="cities">
        {this.renderList()}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities, setActiveCity },
    dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
