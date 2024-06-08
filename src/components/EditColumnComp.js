import React, { useState } from "react";
import { Button, Checkbox, Modal } from "antd";

const CLOUMN_NAME = [
  {
    name: "Order Created On",
    value: "created_on",
  },
  {
    name: "Payer",
    value: "payer",
  },
  {
    name: "Email",
    value: "email",
  },
  {
    name: "Status",
    value: "status",
  },
  {
    name: "Payer Phone",
    value: "payer_phone",
  },
  {
    name: "Service",
    value: "service",
  },
  {
    name: "Scheduled",
    value: "scheduled",
  },
];

const EditColumnComp = ({
  open,
  setOpen,
  editColumnChange,
  submitEditColumn,
  editColumnData,
  resetDefaultCoumn,
  updatedColumn,
}) => {
  console.log(editColumnData, "editColumnData");
  return (
    <>
      <Modal
        title="Edit Column"
        className="absolute top-[150px] right-1  "
        open={open}
        width={350}
        height={600}
        onCancel={() => {
          setOpen(false);
        }}
        footer={
          <div className="flex gap-3 justify-around ">
            <Button className=" w-[140px] " onClick={resetDefaultCoumn}>
              Reset Default
            </Button>
            <Button
              onClick={submitEditColumn}
              className="bg-black text-white px-5 py-2 w-[140px] "
            >
              Apply
            </Button>
          </div>
        }
      >
        <p>Select the column to rearrange</p>
        <div>
          <Checkbox.Group onChange={editColumnChange}>
            {CLOUMN_NAME.map((item, i) => {
              console.log(updatedColumn.dataIndex !== item.value);
              return (
                <div key={i} className="w-[200px] my-1 ">
                  <Checkbox checked={true} value={item.value}>
                    <div className="border-[1px] px-2 py-1 border-slate-300 rounded-md bg-[#ffffff] ">
                      {item.name}
                    </div>
                  </Checkbox>
                </div>
              );
            })}
          </Checkbox.Group>
        </div>
      </Modal>
    </>
  );
};
export default EditColumnComp;
