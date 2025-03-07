import React from "react";

const page = () => {
  return (
    <div className="h-full flex gap-5">
      <div className="border h-full w-[300px] flex items-center border-default-400 justify-center">
        Inventory
      </div>
      <div className="border h-full w-[250px] flex items-center border-default-400 justify-center">
        Item Description
      </div>
      <div className="border h-full w-[250px] flex items-center border-default-400 justify-center">
        Character
      </div>
      <div className="border h-full p-3 flex-1 flex-col gap-3 flex items-start border-default-400 justify-center">
        <div className="border w-full h-[300px] text-center flex items-center border-default-400 justify-center">
          Character Info
          <br />
          (Level, Name, HP, MP, EXP)
        </div>
        <div className="border w-full text-center flex-1 flex items-center border-default-400 justify-center">
          Character Feature 1
        </div>
        <div className="border w-full text-center flex-1 flex items-center border-default-400 justify-center">
          Character Feature 2
        </div>
      </div>
    </div>
  );
};

export default page;
