import React from "react";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBirdList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.forVisibleOnPage
    }));
  }

  handleAddingNewBirdsToList = (newBird) => {
    const newMainBirdList = this.state.mainBirdList.concat(newBird);
    this.setState({
                  mainBirdList: newMainBirdList,
                  formVisibleOnPage: false}
                  );
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;