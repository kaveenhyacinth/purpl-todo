import React from "react";
import { Input, Button, Row, Col } from "antd";

const TodoForm = ({
  buttonLabel,
  onChangeText,
  onClick,
  onSubmit,
  placeholder,
  value,
}: TodoFormProps) => {
  return (
    <div>
      <Row>
        <Col span={23}>
          <Input
            style={{ width: "80%" }}
            placeholder={placeholder}
            value={value}
            onChange={onChangeText}
            onPressEnter={onClick}
          />
          <Button style={{ width: "20%" }} type="primary" onClick={onSubmit}>
            {buttonLabel.toUpperCase()}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TodoForm;
