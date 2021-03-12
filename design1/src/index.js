import React from "react";
import ReactDOM from "react-dom";
import InputField from './InputField';

const App = () => {
  return(
  <div className="container">
      <InputField/>

  </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
