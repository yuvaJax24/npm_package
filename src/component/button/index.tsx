import React from "react";
import { ButtonType } from "./type";
import { Spinner } from "../spinner";

export function Button(props: ButtonType) {
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

  const buttonClasses = () => {
    switch (variant) {
      case "primary":
        return "border-0 bg-[#7700C7] hover:bg-[#8140ad] active:bg-[#9423de] text-white ";
      case "secondary":
        return "border-[#7700C7] border-solid border-[1px] bg-[#F4EDFF] !text-[#7700C7] hover:bg-[#8140ad] hover:text-white active:bg-[#9423de] active:text-white";
      default:
        break;
    }
  };

  return (
    <button
      className={`${className} ${buttonClasses()} outline-none relative px-4 py-2 flex items-center gap-1 rounded-lg font-Lato text-base font-medium disabled:bg-[#CDCDCD] disabled:cursor-not-allowed text-white disabled:opacity-50`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading && (
        <Spinner
          color={variant === "primary" ? "white" : "#7700C7"}
          className={loaderClass}
        />
      )}
      {children}
    </button>
  );
}
