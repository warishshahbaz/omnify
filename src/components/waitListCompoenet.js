import React from "react";
import { Select } from "antd";
const ListSelect = () => {
  return (
    <div className=" flex gap-4 mt-4 ">
      <Select
        showSearch
        className="w-[33%] h-[35px] "
        placeholder="All Waitlist"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={WAIT_LIST}
      />
      <Select
        showSearch
        className="w-[33%] h-[35px] "
        placeholder="Newly Added"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={WAIT_LIST}
      />
      <Select
        showSearch
        className="w-[33%] h-[35px] "
        placeholder="Leads"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={WAIT_LIST}
      />
    </div>
  );
};
export default ListSelect;

const WAIT_LIST = [
  {
    value: "1",
    label: "Not Identified",
  },
  {
    value: "2",
    label: "Closed",
  },
  {
    value: "3",
    label: "Communicated",
  },
  {
    value: "4",
    label: "Identified",
  },
  {
    value: "5",
    label: "Resolved",
  },
  {
    value: "6",
    label: "Cancelled",
  },
];
