import React from "react";
import Button from './button';

const InputField = (props) => {
  return (
    <div className="inputName">
      <div className="ui input">
        <input type="text" placeholder="Name"  />
      </div>
      <div className="inputEmail">
        <div className="ui input">
          <input type="email" placeholder="Email" />
        </div>
      <div className="inputPassword">
        <div className="ui input">
          <input type="password" placeholder="Password" />
        </div>
        </div> 
        <div style = {{ marginLeft: "40px", marginTop: "10px"}}>
        <Button /> 
        </div> 
      </div>
    </div>
  );
};

export default InputField;
