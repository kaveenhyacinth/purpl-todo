import React from "react";
import TodoTile from "../components/TodoTile/TodoTile";
import { Story, Meta } from "@storybook/react";

export default {
  title: "UI/TodoTile",
  component: TodoTile,
  argTypes: {
    onComplete: {
      description: "Handles marking a todo as done",
    },
    onDelete: {
      description: "Handles deleting a todo",
    },
  },
} as Meta;

const Template: Story<TodoTileProps> = (args) => <TodoTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  completed: false,
  text: "Complete the Purpl Todo web application",
};
