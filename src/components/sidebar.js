"use client";

import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import collapseImg from "../gallary/collapse.png";
import frontendImg from "../gallary/icons.png";
import { CgArrowsExchange } from "react-icons/cg";
import { TfiWorld } from "react-icons/tfi";
import Image from "next/image";
import { GoChevronDown } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineExport } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { HiMiniChevronDown } from "react-icons/hi2";
import { SlQuestion } from "react-icons/sl";
import { PiCopyrightLight } from "react-icons/pi";

const items = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Orders",
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: "Subscriptions",
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "Calender",
  },
  {
    key: "sub1",
    label: "Waitlist",
    icon: <MailOutlined />,
  },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      className={`bg-white h-[100vh] p-2 ${
        collapsed ? "w-[80px]" : "w-[256px]"
      } `}
    >
      {collapsed ? (
        <div
          className={`mb-4 ${
            collapsed ? "w-[80px] " : "w-[100%]"
          } flex justify-center `}
        >
          <Image src={frontendImg} alt="icons" />
        </div>
      ) : (
        <div className="flex justify-between  ">
          <Image src={frontendImg} alt="icons" />
          <h3 className="text-[1rem] font-bold ">Frontend Desk</h3>
          <Image
            onClick={toggleCollapsed}
            src={collapseImg}
            alt="collapse"
            className="w-[20px] "
          />
        </div>
      )}

      {collapsed ? (
        <div
          className={` mb-4 ${
            collapsed ? "w-[80px] " : "w-[100%]"
          } flex justify-center `}
        >
          <CgArrowsExchange
            onClick={() => collapsed && setCollapsed(false)}
            size={22}
          />
        </div>
      ) : (
        <div className="flex justify-between p-2 my-4 bg-slate-200">
          <p className=" ">Location</p>
          <CgArrowsExchange size={22} />
        </div>
      )}

      {collapsed ? (
        <div
          className={`mb-4 ${
            collapsed ? "w-[80px] " : "w-[100%]"
          } flex justify-center `}
        >
          <TfiWorld />
        </div>
      ) : (
        <div className="my-4 bg-slate-200 p-1 ">
          <span className="text-[1rem] font-bold ">08:30 AM </span>
          <span>Tue 20 Jan</span>
          <div className="flex justify-between ">
            <div className="flex items-center gap-2 ">
              <TfiWorld />
              <span className="text-[12px] ">UTC: +5 hours</span>
            </div>
            <GoChevronDown />
          </div>
        </div>
      )}

      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        className={`bg-white  ${collapsed && "w-[72px]"} `}
      />

      <div className="absolute bottom-0 left-0 w-[256px] p-2 ">
        {collapsed ? (
          <div
            className={`mb-4 ${
              collapsed ? "w-[80px] " : "w-[100%]"
            } flex justify-center `}
          >
            <MdOutlineDashboard />
          </div>
        ) : (
          <div className=" w-full flex justify-between items-center ">
            <div className="flex gap-2 items-center">
              <MdOutlineDashboard />
              <p className="text-[13px]">Dashboard</p>
            </div>
            <AiOutlineExport />
          </div>
        )}

        {collapsed ? (
          <div
            className={`mb-4 ${
              collapsed ? "w-[80px] " : "w-[100%]"
            } flex justify-center `}
          >
            <RxAvatar />
          </div>
        ) : (
          <div className=" w-full flex justify-between items-center mt-4 ">
            <div className="flex gap-2 items-center">
              <RxAvatar />
              <div>
                <p className="text-[13px] font-bold ">Admin name</p>
                <p className="text-[12px]">admin@gmail.com</p>
              </div>
            </div>
            <HiMiniChevronDown />
          </div>
        )}

        {collapsed ? (
          <div
            className={`mb-4 ${
              collapsed ? "w-[80px] " : "w-[100%]"
            } flex justify-center `}
          >
            <SlQuestion />
          </div>
        ) : (
          <div className=" w-full flex justify-between items-center mt-4 ">
            <div className="flex gap-2 items-center">
              <SlQuestion />
              <div>
                <p className="text-[12px]">Help Center</p>
                <div className="text-[11px] flex items-center gap-2 ">
                  <PiCopyrightLight />
                  <p>2024 Omnify.inc</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
