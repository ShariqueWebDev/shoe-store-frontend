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

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  return (
    <ul className="hidden md:flex justify-center items-center gap-10 font-semibold ">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                className=""
                onMouseEnter={() => {
                  setShowCatMenu(true);
                }}
                onMouseLeave={() => {
                  setShowCatMenu(false);
                }}
              >
                <div className="flex justify-center items-center gap-2 relative">
                  <Link href={"/"} className="">
                    {item.name}
                  </Link>
                  <BsChevronDown />
                </div>
                {showCatMenu && (
                  <ul className="absolute top-10 pt-5 flex flex-col gap-2 w-[250px] bg-white">
                    {/* DATA FETCHING FROM API */}
                    {categories?.map(({attributes:c, id}) => {
                      return (
                        <li
                          className="hover:bg-black/[0.2] p-2 pl-4"
                          onClick={() => {
                            setShowCatMenu(false);
                          }}
                          key={id}
                        >
                          <Link href={`/category/${c.slug}`} className="flex justify-between">
                            {c.name}
                            <span>{`(${c?.products?.data?.length})`}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li>
                <Link href={item.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;

// <ul className=" hidden md:flex items-center gap-8 font-medium text-black">
//       {data.map((item) => {
//         return (
//           <React.Fragment key={item.id}>
//             {!!item?.subMenu ? (
//               <li
//                 className="cursor-pointer flex items-center gap-2 relative"
//                 onMouseEnter={() => setShowCatMenu(true)}
//                 onMouseLeave={() => setShowCatMenu(false)}
//               >postgres://shoestore_3kxb_user:JEQYgjmGqNKNaAx2IjKQnBwGCFXfFtlu@dpg-ci8u35mnqql0lded1nn0-a.singapore-postgres.render.com/shoestore_3kxb
//                 {item.name}
//                 <BsChevronDown />

//                 {showCatMenu && (
//                   <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg ">
//                     {subMenuData.map((submenu) => {
//                       return (
//                         <Link key={submenu.id} href={"/"}>
//                           <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.15] rounded-md" onClick={()=>{setShowCatMenu(false)}}>
//                             {submenu.name}
//                             <span className="opacity-50 text-sm">
//                               {submenu.doc_count}
//                             </span>
//                           </li>
//                         </Link>
//                       );
//                     })}
//                   </ul>
//                 )}
//               </li>
//             ) : (
//               <li className="cursor-pointer">
//                 <Link href={item.url}>{item.name}</Link>
//               </li>
//             )}
//           </React.Fragment>
//         );
//       })}
//     </ul>
