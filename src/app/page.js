"use client";
import EditColumnComp from "@/components/EditColumnComp";
import FilterComp from "@/components/filterComp";
import FilterModal from "@/components/filterModal";
import Sidebar from "@/components/sidebar";
import TableComp from "@/components/TableComp";
import ListSelect from "@/components/waitListCompoenet";
import moment from "moment";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Button, Table } from "antd";
import { CiCalendar } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { PiWarningCircleLight } from "react-icons/pi";

function getStatus(status) {
  if (status === "active") {
    return (
      <div className="bg-green-100 text-center rounded-xl  ">
        <span className="text-green-400 font-semobold ">Active</span>
      </div>
    );
  } else if (status === "inactive") {
    return (
      <div className="bg-gray-100 rounded-xl text-center ">
        <span className=" text-gray-400 font-semobold text-center ">
          Inactive
        </span>
      </div>
    );
  } else {
    return (
      <div className="bg-blue-100 text-center rounded-xl ">
        <span className="text-blue-400 font-semobold ">Lead</span>
      </div>
    );
  }
}

const TODAY_TIME = new Date().getTime();
const data = [];
for (let i = 0; i < 20; i++) {
  if (i % 5 == 0) {
    data.push({
      key: i,
      created_on: moment(TODAY_TIME).subtract(18, "minutes").calendar(),
      status: getStatus("lead"),
      payer: `Mike Teller  ${i}`,
      email: "mike@gmail.com",
      payer_phone: "+91 8765758356",
      services: `Private language session. ${i}`,
      scheduled: moment().format("MMMM Do YYYY, h:mm:ss a"),
    });
  } else if (i % 2 == 0) {
    data.push({
      key: i,
      created_on: moment(TODAY_TIME).subtract(1, "days").calendar(),
      status: getStatus("active"),
      payer: `James row  ${i}`,
      email: "james@gmail.com",
      payer_phone: "+91 7665758356",
      services: `Boxing session. ${i}`,
      scheduled: moment().format("MMMM Do YYYY, h:mm:ss a"),
    });
  } else {
    data.push({
      key: i,
      created_on: moment(TODAY_TIME).subtract(15, "minutes").calendar(),
      status: getStatus("inactive"),
      payer: `Peter Thomsan ${i}`,
      email: "peter@gmail.com",
      payer_phone: "+91 9965758686",
      services: `Appointment session. ${i}`,
      scheduled: moment().format("MMMM Do YYYY, h:mm:ss a"),
    });
  }
}

const COLUMN = [
  {
    title: (
      <div className="flex items-center gap-2 ">
        <CiCalendar /> <p>Created On</p>
      </div>
    ),
    dataIndex: "created_on",
  },
  {
    title: (
      <div className="flex items-center gap-2 ">
        <RxAvatar /> <p>Payer</p>
      </div>
    ),
    dataIndex: "payer",
  },
  {
    title: (
      <div className="flex items-center gap-2 ">
        <PiWarningCircleLight /> <p>Status</p>
      </div>
    ),
    dataIndex: "status",
    width: 130,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Payer Phone",
    dataIndex: "payer_phone",
  },
  {
    title: "Services",
    dataIndex: "services",
  },
  {
    title: "Scheduled",
    dataIndex: "scheduled",
  },
];
export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchPayers, setSearchPayers] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editColumnData, setEditColumnData] = useState([]);
  const [updatedColumn, setUpdatedColumn] = useState(COLUMN);

  function editColumnChange(values) {
    let set = new Set([...editColumnData, ...values]);
    localStorage.setItem("edit", JSON.stringify(values));
    let myData = JSON.parse(localStorage.getItem("edit"));

    let result = [...set].filter((x) => myData.includes(x));
    console.log(myData, "=====================vbalues=====================");
    setEditColumnData(result);
  }
  console.log(editColumnData, "editColumnData");
  const updatedData = useMemo(() => {
    if (searchPayers === "") {
      return data;
    } else {
      return data.filter((val) => {
        return val?.payer?.toLowerCase().includes(searchPayers.toLowerCase());
      });
    }
  }, [searchPayers]);

  // Submit Edit column

  function submitEditColumn() {
    let res = COLUMN.filter(
      (item) => !editColumnData.includes(item?.dataIndex)
    );
    console.log(res, "-----------------------");
    if (editColumnData.length > 0) {
      setUpdatedColumn(res);
    } else {
      setUpdatedColumn(COLUMN);
    }
  }

  // Reset Deafault
  function resetDefaultCoumn() {
    setEditColumnData([]);
    setUpdatedColumn(COLUMN);
  }

  return (
    <div className="h-screen flex w-full ">
      <aside className={`h-screen  ${collapsed ? "w-[80px]" : "w-[256px]"} `}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </aside>
      <main
        className={` m-3 p-3 overflow-y-auto rounded-md shadow-xl bg-white ${
          collapsed ? "w-[calc(100vw-80px)]" : "w-[calc(100vw-256px)]"
        }`}
      >
        <h2 className="font-bold ">Waitlist</h2>
        <ListSelect />
        <FilterComp
          setIsModalOpen={setIsModalOpen}
          setSearchPayers={setSearchPayers}
          searchPayers={searchPayers}
          setIsEditModalOpen={setIsEditModalOpen}
        />
        <TableComp
          updatedData={updatedData}
          editColumnData={editColumnData}
          column={updatedColumn}
        />
      </main>

      {Boolean(isModalOpen) && (
        <FilterModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={data ?? []}
        />
      )}

      {Boolean(isEditModalOpen) && (
        <EditColumnComp
          open={isEditModalOpen}
          setOpen={setIsEditModalOpen}
          editColumnChange={editColumnChange}
          submitEditColumn={submitEditColumn}
          editColumnData={editColumnData}
          resetDefaultCoumn={resetDefaultCoumn}
          updatedColumn={updatedColumn}
        />
      )}
    </div>
  );
}
