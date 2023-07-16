import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { fetchDataFromApi } from "./../utils/api";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { useSelector } from "react-redux";

const Header = () => {
  const {cartItems} = useSelector((state)=>state.cart || {})

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState("")

  const handleScrollbar = () => {
    if (window.scrollY > 300 && window.scrollY > lastScrollY) {
      setShow("-translate-y-[80px]");
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollbar);
    return () => {
      window.removeEventListener("scroll", handleScrollbar);
    };
  }, [lastScrollY]);

  const getCategoriesFromApi = async () => {
    const {data} = await fetchDataFromApi("/api/categories?populate=*")
    setCategories(data);
  }

  useEffect(() => {
    getCategoriesFromApi();
  }, []);

  return (
    <header
      className={`w-full h-[60px] md:[80px] bg-white text-black flex justify-center items-center z-20 sticky top-0 transition-transform duration-300  ${show} `}
    >
      <Wrapper className={`h-[60px] flex justify-between items-center`}>
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            className="cursor-pointer"
            width={50}
            height={50}
            alt="nike logo"
          />
        </Link>
        <Menu categories={categories} showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        <div className="flex justify-center items-center gap-5 text-black">
          {/* RIGHT ICONS SECTIONS */}
          <div className="cursor-pointer flex justify-center items-center relative ">
            <Link href={"/cart"}>
              <IoMdHeartEmpty className="" size={18} />
            </Link>
            <div className="absolute text-xs bottom-[12px] left-[10px] bg-red-600 w-5  rounded-full text-center px-1">
              51
            </div>
          </div>
          <div className="cursor-pointer flex justify-center items-center relative ">
            <Link href={"/cart"}>
              <BsCart className="" size={18} />
            </Link>
          {cartItems.length > 0 && <div className="absolute text-xs bottom-[12px] left-[10px] bg-red-600 w-5  rounded-full text-center">
            {cartItems.length}
          </div>}  
          </div>

          {/* MOBILE ICONS SECTIONS */}
          <div className="cursop flex justify-center items-center mx-1 md:hidden">
            {mobileMenu ? (
              <VscChromeClose
                className=""
                onClick={() => {
                  setMobileMenu(false);}}size={20}/>) : (<BiMenuAltRight
                className=""
                onClick={() => {
                  setMobileMenu(true);
                }}
                size={20}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
