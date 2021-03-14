import React from "react";
import ReactDOM from "react-dom";
import InputField from "./InputField";
import Border from "./border";
import HeaderStyle from "./header";
import "./App.css";


const App = () => {
  return (
    <div className="container">

      <Border>

      </Border>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
