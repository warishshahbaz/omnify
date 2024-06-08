import React, { useMemo, useState } from "react";
import { Button, Checkbox, Input, Menu, Modal, Radio, Select } from "antd";
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import DatePickerComp from "./datePicker";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

const items = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Scheduled Date",
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: "People",
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "Services / Products",
  },
];

const FilterModal = ({ isModalOpen, setIsModalOpen, data }) => {
  const [selectedKey, setSelectedKey] = useState("1");
  const [searchInput, setSearchInput] = useState("");
  const [selectedCheckValue, setSelectedCheckValue] = useState("");
  const [checkedList, setCheckedList] = useState([]);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onclick = (e) => {
    setSelectedKey(e.key ?? "");
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { payerFilterData, option } = useMemo(() => {
    let payerFilterData = data.filter((val, i) =>
      val.payer.toLowerCase().includes(searchInput.toLowerCase())
    );
    let option = data.map((val, i) => {
      return { value: val.payer.toLowerCase, label: val.payer ?? "" };
    });
    return { payerFilterData, option };
  }, [data, searchInput]);

  console.log(selectedCheckValue, "selectedCheckValue");

  return (
    <>
      <Modal
        title="Filter"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        footer={
          <div className="flex justify-end gap-2  ">
            <Button>Reset to Default</Button>{" "}
            <Button className="bg-black text-white ">Apply</Button>
          </div>
        }
      >
        <div className="flex ">
          <Menu
            defaultSelectedKeys={["1"]}
            onClick={onclick}
            defaultOpenKeys={["sub1"]}
            items={items}
            className={`bg-[#f8fafc] w-[200px] border-r-2 border-slate-400 h-[300px] `}
          />
          {selectedKey === "1" ? (
            <div className="w-[calc(100%-200px)] flex flex-col items-center ">
              <div className=" flex flex-col  ">
                <p className="font-semibold mb-2 ">Show order for</p>
                <Select
                  defaultValue="All"
                  className="w-[330px] h-[33px] "
                  onChange={handleChange}
                  options={[
                    {
                      value: "all",
                      label: "All",
                    },
                    {
                      value: "custome",
                      label: "Custome",
                    },
                    {
                      value: "Last_30_days",
                      label: "Last 30 days",
                    },
                    {
                      value: "this month",
                      label: "This month",
                    },
                  ]}
                />
              </div>

              <div className="flex gap-5 mt-4 ">
                <div className=" ">
                  <p className="mb-2 font-semibold ">From</p>
                  <DatePickerComp />
                </div>
                <div>
                  <p className="mb-2 font-semibold ">To</p>
                  <DatePickerComp />
                </div>
              </div>
            </div>
          ) : selectedKey === "2" ? (
            <FilterForPeople
              payerFilterData={payerFilterData}
              data={data}
              setSearchInput={setSearchInput}
              searchInput={searchInput}
            />
          ) : (
            <FilterForServiceProduct />
          )}
        </div>
      </Modal>
    </>
  );
};
export default FilterModal;

function FilterForPeople({
  payerFilterData,
  data,
  setSearchInput,
  searchInput,
}) {
  return (
    <div className="w-[calc(100%-200px)] flex flex-col items-center ">
      <Input
        placeholder="Search Payer or attendee name"
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-[300px] cursor-pointer "
        value={searchInput}
        prefix={<IoIosSearch />}
        suffix={
          searchInput !== "" && (
            <MdOutlineCancel onClick={() => setSearchInput("")} />
          )
        }
      />
      <div>
        <Checkbox.Group onChange={(check) => console.log(check)}>
          {payerFilterData.length > 0 &&
            payerFilterData.length !== data.length &&
            payerFilterData.map((item, i) => {
              return (
                <div
                  className="flex items-center gap-4 w-[300px] ml-6 mt-2 "
                  key={i}
                >
                  <Checkbox value={item?.payer ?? ""}>
                    {item.payer ?? ""}
                  </Checkbox>
                </div>
              );
            })}
        </Checkbox.Group>
      </div>
    </div>
  );
}

function FilterForServiceProduct() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className="flex  flex-col items-center w-full gap-3 ">
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Search by name</Radio>
          <Radio value={2}>Search by tags</Radio>
        </Radio.Group>
        {value === 1 ? (
          <Input
            placeholder="Search service name"
            // onChange={(e) => setSearchInput(e.target.value)}
            className="w-[350px] ml-3 "
            prefix={<IoIosSearch />}
            suffix={<MdOutlineCancel />}
          />
        ) : (
          <Input
            placeholder="Search tag name"
            // onChange={(e) => setSearchInput(e.target.value)}
            className="w-[350px] ml-3 "
            prefix={<IoIosSearch />}
            suffix={<MdOutlineCancel />}
          />
        )}
      </div>
    </>
  );
}
