/// <reference types="react-scripts" />

type UserEvent = (event: ChangeEvent<HTMLInputElement>) => void;

type TodoFormProps = {
  placeholder: string;
  value: string;
  buttonLabel: string;
  onChangeText: UserEvent;
  onSubmit: UserEvent;
};
