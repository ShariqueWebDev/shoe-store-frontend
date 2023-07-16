import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  categories,
}) => {
  return (
    <ul className="bg-white absolute top-[55px] md:hidden w-full left-0 flex flex-col gap-6 font-semibold pl-5 pb-4 ">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className=""
                onClick={() => {
                  setShowCatMenu(!showCatMenu);
                }}
              >
                <div className="flex items-center gap-2">
                  {item.name}
                  <BsChevronDown />
                </div>

                {showCatMenu && (
                  <ul className="flex flex-col gap-4 pt-4 pl-3">
                    {/* DATA FETCHING FROM API */}
                    {categories?.map(({ attributes: c, id }) => {
                      return (
                        <Link key={id} href={`/category/${c.slug}`}>
                          <li
                            className=""
                            onClick={() => {
                              setMobileMenu(false);
                            }}
                          >
                            {c.name}
                            <span className="">
                              {`(${c?.products?.data?.length})`}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li
                className="cursor-pointer"
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;


