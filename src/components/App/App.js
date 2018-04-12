import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { fetchHouse } from '../../ApiCalls/fetchHouse';
import CardContainer from '../CardContainer/CardContainer';
class App extends Component {
  async componentDidMount() {
    const houses = await fetchHouse();
    this.props.addHouses(houses);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className="Display-info">
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string })
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({ 
  addHouses:(houses) => dispatch(actions.addHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
