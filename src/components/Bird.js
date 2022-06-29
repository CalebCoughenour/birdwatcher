import React from "react";
import PropTypes from "prop-types";

function Bird(props) {
  return (
    <React.Fragment>
      <h4>{props.species} - {props.date}</h4>
      <p>{props.location}</p>
      <hr/>
    </React.Fragment>
  );
}

Bird.propTypes = {
  species: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Bird;