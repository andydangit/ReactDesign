import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '350px', height: '300px' },
    borderColor: 'text.primary',
  };

const BackgroundBorder = (props) => {
    return ( 
        <div className = 'Content'>  {props.children}
        <Box display="flex" justifyContent="center">
        <Box border={1} {...defaultProps} />
        </Box> 
        </div>
    )
}

export default BackgroundBorder;