import React from "react";
import Bird from "./Bird";
import PropTypes from "prop-types";

function BirdList(props) {
  return (
    <React.Fragment>
      {props.birdList.map((bird, index) =>
        <Bird
          location={bird.location}
          species={bird.species}
          date={bird.date}
          key={index}
        />
      )}
    </React.Fragment>
  );
}

BirdList.propTypes = {
  birdList: PropTypes.array
};

export default BirdList;