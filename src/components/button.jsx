import React from "react";
import styled from "styled-components";

const Button1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f5ef;
  width: 8.1rem;
  height: 2.5rem;
  font-size: large;
  border-radius: 0.3rem;
  font-weight: 500;
  border-color: #ced4da;
  border-width: 2px;
  &:hover,
  &:focus {
    background-color: palevioletred;
  }
`;

export function PrimaryButton(props) {
  return (
    <Button1
      onClick={props.handleClick}
      value={props.value}
      name={props.name}
      style={props.style ? props.style : undefined}
    >
      {props.buttonText ? props.buttonText : "Button"}
    </Button1>
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
