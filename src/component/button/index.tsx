import React from "react";
import { ButtonType } from "./type";
import classNames from "classnames";
import Spinner from "../spinner";

function Button(props: ButtonType) {
  const {
    children,
    className = "",
    variant = "primary",
    type = "button",
    onClick = () => {},
    disabled = false,
    loading = false,
    loaderClass = "",
  } = props;

  const buttonClasses = classNames(
    "relative px-4 py-2 flex items-center gap-1 rounded-lg font-Lato text-base font-medium ",
    {
      " bg-[#7700C7] hover:bg-[#8140ad] active:bg-[#9423de] text-white ":
        variant === "primary",
    },
    {
      "border-[#7700C7] border-solid border-[1px] bg-[#F4EDFF] text-[#7700C7] hover:bg-[#8140ad] hover:text-white active:bg-[#9423de] active:text-white":
        variant === "secondary",
    },
    {
      "disabled:bg-[#CDCDCD] disabled:cursor-not-allowed text-white opacity-50":
        disabled,
    },
    className
  );

  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading && <Spinner color="#7700C7" className={loaderClass} />}
      {children}
    </button>
  );
}

export default Button;
