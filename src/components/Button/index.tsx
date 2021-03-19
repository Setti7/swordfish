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
      items-center 
      font-bold
      focus:outline-none
      ${size === "big" ? "py-2 px-6 rounded-lg" : "py-1 px-3 rounded-md"} 
      ${
        style === "primary"
          ? `bg-primary text-primary-text focus:bg-primary-600 disabled:bg-primary-400 disabled:text-primary-text-disabled`
          : `bg-accent text-accent-text  disabled:text-accent-text-disabled disabled:bg-accent-300focus:bg-accent disabled:bg`
      }
      ${props.className}`}
    >
      {props.children}
    </button>
  );
};
