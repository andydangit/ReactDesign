import React from 'react';
import ReactDOM from 'react-dom';



const App = () => {
  return (
    <div> Hello test </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

