import React from "react";
import { SpinnerType } from "./type";

export const Spinner = (props: SpinnerType) => {
  const { color = "black", className = "" } = props;
  return (
    <div
      style={{
        borderColor: color,
      }}
      className={`${className} w-5 h-5 rounded-full border-solid border-[1px] z-10 !border-b-transparent animate-spin`}
    />
  );
};
