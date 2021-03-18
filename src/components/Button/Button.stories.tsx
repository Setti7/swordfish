import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../Button";

export default {
  title: "Button",
  argTypes: {
    style: { control: { type: "select", options: ["primary", "accent"] } },
    size: { control: { type: "select", options: ["big", "small"] } },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Default scenario
export const Default = Template.bind({});
Default.args = {
  style: "primary",
  size: "big",
  disabled: false,
  children: "Sign in",
};
