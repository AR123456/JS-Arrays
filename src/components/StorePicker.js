import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // one way uses a constructor, may be better to use the way below where goToStore was made inot an event
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  myInput = React.createRef();
  // if you need to access "this" inside a custom  method do it this way
  goToStore = event => {
    //1.  stop the form from submitting
    event.preventDefault();
    //2.  get text from that input
    console.log(this);
    //3. change page to what was entered
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        {/* this is how to put in a comment, the comment must be inside this element not before it   */}
        <h2>Please Enter a Store </h2>

        {/* values of input must be directly attached to state  */}
        <input
          type="text"
          // surface the input on the component
          ref={this.myInput}
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
