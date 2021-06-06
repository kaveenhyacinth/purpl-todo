import React from "react";
import { Card, Button, Row, Col } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { primary, white } from "../../theme/Colors";

const TodoTile = ({ completed, onComplete, onDelete, text }: TodoTileProps) => {
  return (
    <div className="w-full my-2">
      <Row gutter={10} justify="space-between">
        <Col span={23}>
          <Card
            onClick={onComplete}
            style={{ background: completed ? primary : white }}
          >
            <p>
              {completed ? <span className="line-through">{text}</span> : text}
            </p>
          </Card>
        </Col>
        <Col span={1} className="gutter-row">
          <Button
            style={{ width: "100%", height: "100%" }}
            icon={<DeleteFilled />}
            type="text"
            onClick={onDelete}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TodoTile;
