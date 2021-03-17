import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const HeaderStyle = (props) => (
  <Segment clearing>
    <Header as='h3' floated='right'>
      X
    </Header>
    <Header as='h3' floated='left'>
      Sign Up 
    </Header>
  </Segment>
)

export default HeaderStyle;