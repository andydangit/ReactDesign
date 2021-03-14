import React from 'react';
import Header from './Header';

const Main = () => {

  // my piece of data. It can be anything...doesn't have to be an array.
  const NavLinks = ["home", "about", "contact"];
  const SomeOtherData = "hello";

  return (
    <div>
      <Header NavLink={NavLink} Hello={SomeOtherData}/>
      <p>main</p>
    </div>
  )

};

export default Main;