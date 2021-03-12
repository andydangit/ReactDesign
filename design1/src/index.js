import React from "react";
import ReactDOM from "react-dom";
import InputField from "./InputField";
import ButtonColor from "./button";
import BackgroundBorder from "./border";
import HeaderStyle from "./header";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <BackgroundBorder>
        <HeaderStyle />
        <InputField />
        <ButtonColor />
      </BackgroundBorder>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
