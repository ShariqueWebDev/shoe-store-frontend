import React, { useContext, useEffect, useState } from "react";
import { BiSolidCheckCircle } from "react-icons/bi";
import { Context } from "@/utils/context";

function Alert() {
  const {alert, showAlert} = useContext(Context);
 
  return (
    <div className={`fixed bottom-4 right-6 w-[300px] z-10 `} >
      {alert && (
        <div>
          <div className=" bg-black/[0.9] text-white h-[50px] flex justify-center items-center px-3 text-[14px] ]"><div className="mr-2 text-[#378b45] text-[18px]">{alert.img}</div>{`${alert.type}, ${alert.massege}`}</div>
          <div className="h-[5px] bg-green-700 "></div>
        </div>
      )}
    </div>
  );
}

export default Alert;
