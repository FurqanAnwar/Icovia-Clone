import React, { useRef } from "react";
import Arrow from "src/components/Arrow/Arrow";

const Button = (props) => {
  const btnRef = useRef();
  let btnClass;

  if (props.type === "complex-btn") btnClass = "Btn-Slash";

  return (
    <button
      onClick={props.handleClick ? props.handleClick : handleBtnClick}
      className={`Btn ${props.class ? props.class : ""} `}
    >
      <span className={`Btn__Title Btn--Block ${btnClass ? btnClass : ""} `}>
        {props.handleTitle ? props.handleTitle : props.title}
      </span>

      {props.type === "complex-btn" ? <Arrow /> : null}
      {props.children && props.children}
    </button>
  );
};

const handleBtnClick = (event) => {
  let target = event;
  console.log("target is ", target)
}
export default Button;
