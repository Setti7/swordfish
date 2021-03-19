import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LoginCard } from ".";

export default {
  title: "Component/LoginCard",
  component: LoginCard,
} as Meta;

const Template: Story = (args) => <LoginCard {...args} />;

// Default scenario
export const Default = Template.bind({});
