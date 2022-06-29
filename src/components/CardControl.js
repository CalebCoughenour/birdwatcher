import React from "react";
import NewBirdForm from './NewBirdForm';
import BirdList from './BirdList';


class CardControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBirdList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
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
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBirdForm onNewBirdCreation={this.handleAddingNewBirdsToList} />;
      buttonText = "Back To List";
    } else {
      currentlyVisibleState = <BirdList birdList={this.state.mainBirdList} />
      buttonText = "Add New Bird"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CardControl;