import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { API } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    const callLambda = async () => {
      const result = await API.put("nycjsamplify", "/helloworld");
      setState(result.success);
    };

    callLambda();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Result is: ${state}`}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
