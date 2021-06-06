/// <reference types="react-scripts" />

type UserEvent = (event: ChangeEvent<HTMLInputElement>) => void;

type TodoActions =
  | { type: "ADD"; payload: Todo }
  | { type: "COMPLETE"; payload: number }
  | { type: "DELETE"; payload: number };

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoFormProps = {
  placeholder: string;
  value: string;
  buttonLabel: string;
  onChangeText?: UserEvent;
  onSubmit?: UserEvent;
};

type TodoTileProps = {
  text: string;
  completed: boolean;
  onComplete?: UserEvent;
  onDelete?: UserEvent;
};
