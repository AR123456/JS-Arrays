import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        {/* this is how to put in a comment, the comment must be inside this element not before it   */}
        <h2>Please Enter a Store </h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}
export default StorePicker;
