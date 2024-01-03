import React from "react";
import "./App.css";

function WithoutRedux() {
  const changeColor = (color) => {
    document.querySelector("#component_red").style.backgroundColor = color;
    document.querySelector("#component_green").style.backgroundColor = color;
    document.querySelector("#component_blue").style.backgroundColor = color;
  };

  return (
    <div>
      <div id="red">
        <div class="container" id="component_red">
          <h1>red</h1>
          <input
            type="button"
            value="fire"
            onClick={() => changeColor("red")}
          />
        </div>
      </div>
      <div id="green">
        <div class="container" id="component_green">
          <h1>green</h1>
          <input
            type="button"
            value="fire"
            onClick={() => changeColor("green")}
          />
        </div>
      </div>
      <div id="blue">
        <div class="container" id="component_blue">
          <h1>blue</h1>
          <input
            type="button"
            value="fire"
            onClick={() => changeColor("blue")}
          />
        </div>
      </div>
    </div>
  );
}

export default WithoutRedux;
