import React from "react";

export function PrimaryButton(props) {
  return (
    <button
      onClick={props.handleClick}
      className={"PrimaryButton"}
      value={props.value}
      name={props.name}
      style={props.style ? props.style : undefined}
    >
      {props.buttonText ? props.buttonText : "Button"}
    </button>
  );
}

export function IconButton({ icon, onClick, text }) {
  return (
    <div className={"IconButtonWrapper"}>
      <img src={icon} className={"IconImage"} alt="" />
      <button onClick={onClick} className={"IconButton"}>
        {text}
      </button>
    </div>
  );
}
