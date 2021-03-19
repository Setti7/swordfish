import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Spinner, SpinnerProps } from ".";

export default {
  title: "Component/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: { type: "select", options: ["big", "small"] } },
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "big",
};
