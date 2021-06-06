import React from "react";
import { Input, Button, Row, Col } from "antd";

const TodoForm = ({
  buttonLabel,
  onChangeText,
  onSubmit,
  placeholder,
  value,
}: TodoFormProps) => {
  return (
    <div data-testid="todo-form-container">
      <Row>
        <Col span={23}>
          <Input
            data-testid="todo-form-input"
            style={{ width: "80%" }}
            placeholder={placeholder}
            value={value}
            onChange={onChangeText}
            onPressEnter={onSubmit}
          />
          <Button
            data-testid="todo-form-button"
            style={{ width: "20%" }}
            type="primary"
            onClick={onSubmit}
          >
            {buttonLabel.toUpperCase()}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TodoForm;
