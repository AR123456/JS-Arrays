import React from "react";

const Login = props => {
  return (
    <div>
      <nav className="login">
        <h2>Inventory Login </h2>
        <p>Sign in to manage your stores's inventory.</p>
        <button className="github" onClick={() => props.authenticate("Github")}>
          Log in with GitHub
        </button>
        <button
          className="twitter"
          onClick={() => props.authenticate("Twitter")}
        >
          Log in with Twitter
        </button>
      </nav>
    </div>
  );
};

export default Login;
