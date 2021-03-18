import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps {
  size?: "big" | "small";
  style?: "primary" | "accent";
  disabled?: boolean;
}

export const Button = ({
  size = "big",
  style = "primary",
  disabled = false,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`
      font-bold items-center shadow-md text-button focus:outline-none focus:ring-2 focus:ring-offset-2
      ${size === "big" ? "py-2 px-6 rounded-lg" : "py-1 px-3 rounded-md"} 
      ${
        style === "primary"
          ? "bg-primary-700 hover:bg-primary-600 focus:ring-primary-700 disabled:bg-primary-300"
          : "bg-accent hover:bg-accent-hover focus:ring-accent disabled:bg-accent-disabled"
      }
      ${props.className}`}
    >
      {props.children}
    </button>
  );
};
