import React from 'react';

const Header = (props) => {

// how do we get the props I just got from Main?
// good!
// now how do I use it?
// hmm props.children is a bit different.
// if you console.log(props) for this component
// you will see the two data I passed from main
// NavLink and Hello
// can you replace the text 'header' with the Hello prop?

  return (
    <div> {props.children}
      <p> andy = {"hello"} </p>
      <p>{props.Hello}</p> this will give you the props
      <p>{props.NavLink}</p>
    </div>
  )

};

export default Header;