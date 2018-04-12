import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';

export const CardContainer = (props) => {
  // console.log('proppers', props);
  let displayHouses; 

  if (props.houses.length === 0) {
    displayHouses = (
      <div>
        <p>Loading...</p>
      </div>
    );  
  } else {
    displayHouses = props.houses.map(house => {
      return (
        <Card 
          key={house.name}
          house={house}
        />
      );
    });
  }

  return (
    <div>
      {displayHouses}
    </div>
  );
};

export const mapStateToProps = state => ({
  houses: state.houses
});

export default connect(mapStateToProps)(CardContainer);