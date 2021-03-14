import React from 'react';
import Box from '@material-ui/core/Box';
import InputField from './InputField';

const divStyle = {
    MarginBottom: "300px",
    backgroundColor: "Yellow",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    width: "400px",
    height: "200px",


  };

const Border = (props) => {
    return ( 

        
        <div className="container">
            <div style = {divStyle}> <InputField /> </div> 
        
        </div>
    )
}

export default Border;