import React from "react";
import ReactDOM from "react-dom";
import InputField from './InputField';
import ButtonColor from './button';

const App = () => {
  return(
  <div className="container">
    
      <InputField />
      <ButtonColor/> 

  </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
