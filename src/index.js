import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props){
  return <h1>Halo, {props.name}</h1>;
}

function App(){
  return (
    <div>
      <Welcome name="web" />
      <Welcome name="star" />
      <Welcome name="light" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
