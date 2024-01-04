import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./redux/color";
import "./App.css";

function WithRedux() {
  const stateColor = useSelector((state) => state.color.value);

  // useDispatch 훅을 사용하여 dispatch 함수를 가져옵니다.
  const dispatch = useDispatch();

  const changeColor = (newColor) => {
    // useDispatch를 사용하여 액션(change)을 디스패치합니다.
    dispatch(change({ color: `${newColor}` }));
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
