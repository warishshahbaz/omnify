import React from "react";
import { DatePicker, Space, theme } from "antd";

const DatePickerComp = () => {
  const { token } = theme.useToken();
  const style = {
    border: `1px solid ${token.colorPrimary}`,
    borderRadius: "50%",
  };
  const cellRender = (current, info) => {
    if (info.type !== "date") {
      return info.originNode;
    }
    if (typeof current === "number" || typeof current === "string") {
      return <div className="ant-picker-cell-inner">{current}</div>;
    }
    return (
      <div
        className="ant-picker-cell-inner"
        style={current.date() === 1 ? style : {}}
      >
        {current.date()}
      </div>
    );
  };
  return (
    <>
      <DatePicker cellRender={cellRender} />
    </>
  );
};
export default DatePickerComp;
