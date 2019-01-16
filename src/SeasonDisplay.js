import './SeasonDisplay.css';
import React from 'react';

const getSeason = lat =>{
    var month=new Date().getMonth();
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};
const seasonConfig = {
    summer:{
        text: "its summer!",
        icon:'sun'
    },

    winter:{
        text: "its winter!",
        icon:'snowflake'
    },
};
const SeasonDisplay = props =>{
    const season = "winter";
    const {text, icon} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
          <i className={`icon-left massive ${icon} icon`} />
          <h1>{text}</h1>
          <i className={`icon-right massive  ${icon} icon`} />
      </div>


    );

};
export default SeasonDisplay;