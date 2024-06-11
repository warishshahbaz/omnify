import React, { useState } from "react";
import { Table } from "antd";

const TableComp = ({ updatedData, column }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="h-[400px] mt-3 ">
      <Table
        rowSelection={rowSelection}
        columns={column}
        dataSource={updatedData ?? []}
        pagination={{
          pageSize: 20,
        }}
        scroll={{
          y: 350,
          x: 1500,
        }}
      />
    </div>
  );
};
export default TableComp;
