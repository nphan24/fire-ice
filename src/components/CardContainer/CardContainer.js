import React from 'react';
import { connect } from 'react-redux';
// import Card from '../Card/Card';

export const CardContainer = (props) => {
  console.log('proppers', props);


  return (
    <div>
      <p>this is a CardContainer</p>
    </div>
  );
};

export const mapStateToProps = state => ({
  houses: state.houses
});

export default connect(mapStateToProps)(CardContainer);