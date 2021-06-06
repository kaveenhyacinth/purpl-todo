import React from "react";
import TodoForm from "../components/TodoForm/TodoForm";
import { Story, Meta } from "@storybook/react";

export default {
  title: "UI/TodoForm",
  component: TodoForm,
  argTypes: {
    onSubmit: {
      description:
        "Handles add new todo when click the button or hit Enter button inside the input field",
    },
    onChangeText: {
      description: "Handles text input changes",
    },
  },
} as Meta;

const Template: Story<TodoFormProps> = (args) => <TodoForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "New Task",
  buttonLabel: "Add",
  value: "",
};
