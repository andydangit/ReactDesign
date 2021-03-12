import React from "react";

const InputField = (props) => {
  return (
    <div className="inputName">
      <div className="ui input">
        <input type="text" placeholder="Name" class="" />
      </div>
      <div className="inputEmail">
        <div className="ui input">
          <input type="email" placeholder="Email" class="" />
        </div>
      <div className="inputPassword">
        <div className="ui input">
          <input type="password" placeholder="Password"class="" />
        </div>
        </div> 
      </div>
    </div>
  );
};

export default InputField;
