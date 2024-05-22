import React from "react";
export type ButtonType = {
  children: string | number | React.ReactNode;
  className?: string;
  variant: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  loaderClass?: string;
};
