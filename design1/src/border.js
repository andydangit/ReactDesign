import React from 'react';
import Box from '@material-ui/core/Box';
import InputField from './InputField';

const divStyle = {
    marginLeft:"300px",
    marginTop: "100px",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    width: "400px",
    height: "300px",
    borderRadius: "5px",

  };

const Border = (props) => {
    return ( 

        
        <div className="container">
            <div style = {divStyle}> <InputField /> </div> 
        
        </div>
    )
}

export default Border;