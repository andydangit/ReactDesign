import React from 'react';
import Box from '@material-ui/core/Box';
import InputField from './InputField';

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '350px', height: '300px' },
    borderColor: 'text.primary',
  };

const Border = (props) => {
    return ( 

        
        <div className = 'Content'>  {props.children}
        <Box display="flex" justifyContent="center">
        <Box border={1}  {...defaultProps} /> <InputField /> 
        
        </Box> 
        
        </div>
    )
}

export default Border;