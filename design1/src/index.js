import React from "react";
import ReactDOM from "react-dom";
import InputField from "./InputField";
import ButtonColor from "./button";
import BackgroundBorder from "./border";

const App = () => {
  return (
    <div className="container">
      <BackgroundBorder>
        <InputField />
        <ButtonColor />
      </BackgroundBorder>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
