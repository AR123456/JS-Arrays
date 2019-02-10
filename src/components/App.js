import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

export class App extends Component {
  // set initial state (before running an ajax or adding to the form)
  //data can be passed down not up
  state = {
    fishes: {},
    order: {}
  };
  // create secondary method (function) to take in fish , will need to access fish inside of it. method lives in app but needs to run in add fish form .  Use props to pass to inventory then inventory passes to add fish
  addFish = fish => {
    //This is what needs to be done to update state in react
    // 1. Take a copy of the existing state the ...(spread)  takes the entire object in state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    //using time stamp to get a unique key for each (using time stamp is not quniqe to react, just using here for simplicity ( vs using an array))
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    //using methond that is built in this.setState , because fishes property and value are the same just need to say it one time.
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
