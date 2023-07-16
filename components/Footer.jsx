import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black m-0 p-0">
      <div className="main_container md:flex-row flex flex-col justify-between md:items-start items-center w-full max-w-[1280px] text-white my-0 mx-auto md:flex-nowrap flex-wrap">
        <div className="left w-full max-w-[800px] md:w-[800px] flex justify-between  text-[14px] pl-5  flex-wrap">
          <div className="first w-full max-w-[230px] ">
            <ul className="font-semibold text-[12px] my-10 flex flex-col gap-2 mr-2">
              <li className="cursor-pointer hover:text-white/[0.5]">FIND A STORE</li>
              <li className="cursor-pointer hover:text-white/[0.5]">BECOME A PARTNER</li>
              <li className="cursor-pointer hover:text-white/[0.5]">SIGN UP FOR EMAIL</li>
              <li className="cursor-pointer hover:text-white/[0.5]">SEND US FEEDBACK</li>
              <li className="cursor-pointer hover:text-white/[0.5]">STUDENT DISCOUNT</li>
            </ul>
          </div>
          <div className="second my-10 flex flex-col gap-2 w-full max-w-[230px]">
            <div className=" cursor-pointer text font-semibold">GET HELP</div>
            <ul className="text-[13px] flex flex-col gap-2 text-white/[0.5] ">
              <li className="cursor-pointer hover:text-white">Order Status</li>
              <li className="cursor-pointer hover:text-white">Delivery</li>
              <li className="cursor-pointer hover:text-white">Return</li>
              <li className="cursor-pointer hover:text-white">Payment Options</li>
              <li className="cursor-pointer hover:text-white">Contact Us</li>
            </ul>
          </div>
          <div className="third my-10 flex flex-col gap-2 w-full max-w-[230px]">
            <div className=" cursor-pointer text font-semibold">About Nike</div>
            <ul className="text-[13px] flex flex-col gap-2 text-white/[0.5] ">
              <li className="cursor-pointer hover:text-white">News</li>
              <li className="cursor-pointer hover:text-white">Career</li>
              <li className="cursor-pointer hover:text-white">Investor</li>
              <li className="cursor-pointer hover:text-white">Sustainabilty</li>
            </ul>
          </div>
        </div>
        <div className="right w-full flex justify-center  max-w-[250px] mr-5 md:flex-nowrap flex-wrap">
          <div className="socialMedia my-10 flex justify-center gap-4 ">
            <div className="facebook flex justify-center items-center w-10 h-10 bg-white/[0.5] hover:bg-white rounded-full text-black text-[20px] cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="facebook flex justify-center items-center w-10 h-10 bg-white/[0.5] hover:bg-white rounded-full text-black text-[20px] cursor-pointer">
              <FaTwitter />
            </div>
            <div className="facebook flex justify-center items-center w-10 h-10 bg-white/[0.5] hover:bg-white rounded-full text-black text-[20px] cursor-pointer">
              <FaYoutube />
            </div>
            <div className="facebook flex justify-center items-center w-10 h-10 bg-white/[0.5] hover:bg-white rounded-full text-black text-[20px] cursor-pointer ">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer text-[12px] md:flex flex-col md:justify-between justify-center items-center mx-auto px-5 text-white/[0.5] max-w-[1280px] bg-black pb-3  flex-wrap text-center">
        <div className="copy_rights text-center">
          &copy;2023 Nike Inc Alrights Resevere Created by Shaikh Sharique
          Mohammad Aslam
        </div>

        <ul className="flex gap-2 justify-center flex-wrap text-center">
          <li className="whitespace-nowrap cursor-pointer hover:text-white">Guides</li>
          <li className="whitespace-nowrap cursor-pointer hover:text-white">Terms & Sales</li>
          <li className="whitespace-nowrap cursor-pointer hover:text-white">Terms of Use</li>
          <li className="whitespace-nowrap cursor-pointer hover:text-white">Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
