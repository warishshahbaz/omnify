import { Button, Input } from "antd";

import React from "react";
import { SlRefresh } from "react-icons/sl";
import { PiBookOpenThin } from "react-icons/pi";
import { GrFormSearch } from "react-icons/gr";
import { LiaFilterSolid } from "react-icons/lia";
import { PiDownloadSimple } from "react-icons/pi";

function FilterComp({
  setIsModalOpen,
  setSearchPayers,
  searchPayers,
  setIsEditModalOpen,
}) {
  return (
    <div className="flex justify-between items-center mt-4">
      <Button onClick={() => setIsModalOpen(true)} icon={<LiaFilterSolid />}>
        Add Filter
      </Button>
      <div className="flex  items-center gap-4">
        <Input
          onChange={(e) => setSearchPayers(e.target.value)}
          value={searchPayers}
          prefix={<GrFormSearch size={20} />}
          className="h-[32px] "
          placeholder="Search Client"
        />
        <SlRefresh size={25} />
        <PiBookOpenThin size={25} onClick={() => setIsEditModalOpen(true)} />
        <PiDownloadSimple size={25} />
      </div>
    </div>
  );
}

export default FilterComp;
