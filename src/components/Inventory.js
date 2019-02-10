import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
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
