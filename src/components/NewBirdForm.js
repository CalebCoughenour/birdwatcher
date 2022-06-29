import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewBirdForm(props) {

  function handleNewBirdSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({species: event.target.species.value, date: event.target.date.value, location: event.target.location.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewBirdSubmission}>
        <input 
          type='text'
          name='species'
          placeholder='Species Name'
        />
        <input 
          type='date'
          name='date'
        />
        <input 
          type='text'
          name='location'
          placeholder='Location Spotted'
        />
      </form>    
    </React.Fragment>
  )
}