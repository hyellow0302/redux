import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./redux/color";
import "./App.css";

function WithRedux() {
  const stateColor = useSelector((state) => state.color.value);
  const dispatch = useDispatch();

  const changeColor = (newColor) => {
    dispatch(change(newColor));
  };
  console.log(stateColor);

  return (
    <div>
      <div id="red">
        <div
          className="container"
          id="component_red"
          style={{ backgroundColor: stateColor.color }}
        >
          <h1>red</h1>
          <input
            type="button"
            value="fire"
            onClick={() => changeColor("red")}
          />
        </div>
      </div>
      <div id="green">
        <div
          className="container"
          id="component_green"
          style={{ backgroundColor: stateColor.color }}
        >
          <h1>green</h1>
          <input
            type="button"
            value="fire"
            onClick={() => changeColor("green")}
          />
        </div>
      </div>
      <div id="blue">
        <div
          className="container"
          id="component_blue"
          style={{ backgroundColor: stateColor.color }}
        >
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

export default WithRedux;
