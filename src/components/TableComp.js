import React, { useMemo, useState } from "react";
import { Button, Table } from "antd";
import { CiCalendar } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { PiWarningCircleLight } from "react-icons/pi";
import moment from "moment";

const TableComp = ({ updatedData, editColumnData, column }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  // const COLUMN = [
  //   {
  //     title: (
  //       <div className="flex items-center gap-2 ">
  //         <CiCalendar /> <p>Created On</p>
  //       </div>
  //     ),
  //     dataIndex: "created_on",
  //   },
  //   {
  //     title: (
  //       <div className="flex items-center gap-2 ">
  //         <RxAvatar /> <p>Payer</p>
  //       </div>
  //     ),
  //     dataIndex: "payer",
  //   },
  //   {
  //     title: (
  //       <div className="flex items-center gap-2 ">
  //         <PiWarningCircleLight /> <p>Status</p>
  //       </div>
  //     ),
  //     dataIndex: "status",
  //     width: 130,
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //   },
  //   {
  //     title: "Payer Phone",
  //     dataIndex: "payer_phone",
  //   },
  //   {
  //     title: "Services",
  //     dataIndex: "services",
  //   },
  //   {
  //     title: "Scheduled",
  //     dataIndex: "scheduled",
  //   },
  // ];

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // const updatedColumn = useMemo(() => {
  //   let res = COLUMN.filter(
  //     (item) => !editColumnData.includes(item?.dataIndex)
  //   );
  //   console.log(res);
  // }, [editColumnData]);

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
