import React from "react";
import Button from './button';

const InputField = (props) => {
  return (
    <div className = "container"> <text style = {{fontSize: "20px", fontWeight: "bold"}}>Sign up</text> 
    <text style = {{fontSize: "15px", fontWeight: "bold", marginLeft: "280px"}}>X</text> 
    <div className="inputName"> 
      <div className="ui input" style = {{ width: "350px", marginTop: "25px"}}>
        <input type="text" placeholder="Name" style = {{ backgroundColor:"#eaeaea", color: " black"}}  />
      </div>
      <div className="inputEmail">
        <div className="ui input" style = {{ width: "350px"}}>
          <input type="email" placeholder="Email" style = {{ backgroundColor:"#eaeaea", color: " black"}} />
        </div>
      <div className="inputPassword">
        <div className="ui input" style = {{ width: "350px"}}>
          <input type="password" placeholder="Password" style = {{ backgroundColor:"#eaeaea", color: " black"}}/>
        </div>
        </div> 
        <div style = {{ marginLeft: "130px", marginTop: "25px"}}>
        <Button /> 
        </div> 
        <div style ={{ fontSize: "10px", marginLeft: " 135px", marginTop: "15px", color: "lightGray"}}> Already have an account</div>
      </div>
    </div>
    </div>
  );
};

export default InputField;
