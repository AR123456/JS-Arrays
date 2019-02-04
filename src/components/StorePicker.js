import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        {/* this is how to put in a comment, the comment must be inside this element not before it   */}
        <h2>Please Enter a Store </h2>
        {/* values of input must be directly attached to state  */}
        <input
          type="text"
          required
          placeholder="Store Name"
          // when loaded defaultValue with run the function getFunName
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}
export default StorePicker;
