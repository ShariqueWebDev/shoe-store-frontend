import Link from "next/link";
import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const failedPage = () => {
  return (
    <div className="mx-2">
      <div className="max-w-[600px] max-sm:max-w-[400px] border border-black mx-auto my-[150px] p-4 max-sm:p-2 rounded-md">
        <div className="text-[22px] max-sm:text-[18px] font-semibold flex items-center gap-2">
          <span>
            <BiErrorCircle />
          </span>
          Payment fialed!
        </div>
        <div className="text-[15px] max-sm:text-[13px] mt-2">
          For any product related query drop an email to
        </div>
        <div className="cursor-pointer underline text-[15px] max-sm:text-[13px]">
          shariques966@gmail.com
        </div>
        <div className=" cursor-pointer  my-3 rounded-full font-semibold max-sm:text-[14px]">
          <Link href={"/"}>Continue shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default failedPage;
