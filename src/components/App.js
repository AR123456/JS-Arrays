import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "../components/Fish";
import base from "../base";
export class App extends Component {
  // set initial state (before running an ajax or adding to the form)
  //data can be passed down not up
  state = {
    fishes: {},
    order: {}
  };
  // syncing up the fish state with firebase
  componentDidMount() {
    const { params } = this.props.match;
    //reinstate local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes, `, {
      context: this,
      state: "fishes"
    });
  }
  //add order to local storage
  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  //need to unmount so that there is not memory leakage with multiple updates
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  updateFish = (key, updatedFish) => {
    //take a copy of current sate
    const fishes = { ...this.state.fishes };
    // update that stae
    fishes[key] = updatedFish;
    //stet that to state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //take copy of state
    const order = { ...this.state.order };
    //add order or update order
    order[key] = order[key] + 1 || 1;
    //call set state to update state object
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes" />
          {Object.keys(this.state.fishes).map(key => (
            <Fish
              key={key}
              index={key}
              details={this.state.fishes[key]}
              addToOrder={this.addToOrder}
            />
          ))}
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        {/* <Order {...this.state} /> */}
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
