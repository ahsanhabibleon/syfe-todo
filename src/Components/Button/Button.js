import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = (props) => {
  const {
    type,
    text,
    onClick,
    onBlur,
    onKeyDown,
    isPrimary,
    isSecondary,
    isDanger,
  } = props;
  const buttonClass = classNames("btn", {
    "btn-primary": isPrimary,
    "btn-secondary": isSecondary,
    "btn-danger": isDanger,
  });

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={onClick}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      {text}
    </button>
  );
};

export default Button;
