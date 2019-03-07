import React, { Component } from "react";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends Component {
  state = {
    uid: null,
    owner: null
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }
  authHandler = async authData => {
    //look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    //claim the store if there is no owner
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    // set the state of the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid,
      //compare logged in user to user of the store and allow access to inventory if true
      owner: store.owner || authData.user.uid
    });

    //this console.log has a bunch of info about the twitter account I used to log in with, like a crazzy lot but not password
    console.log(authData);
  };
  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };
  //logout method
  logout = async () => {
    console.log("logging out ");
    await firebase.auth().signOut();
    // clear state
    this.setState({ uid: null });
  };

  render() {
    const logout = <button onClick={this.logout}> Logout </button>;

    // check if logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    //check if logged in user is owner of the store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner of this store </p>
          {logout}
        </div>
      );
    }
    // so they are the ownner show inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        {/* the add fish function / method is now avalible to inventory as a prop that was passed from app  */}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes{" "}
        </button>
      </div>
    );
  }
}

export default Inventory;
