import React from 'react';
import {render} from 'react-dom';
function HelloWorld() {
  return (
    <div>
      <h1>
      Hello World
      </h1>
      <Article></Article> 
    </div>
  )
}
render (<HelloWorld/>, document.getElementById("root"))


// render (<Article/>, document.getElementById("root"))