import { data } from "autoprefixer";
import Image from "next/image";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { removeItemFromCart, updateCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
const CartItems = ({ product, slug }) => {
  const dispatch = useDispatch()

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: product.id
    }
    dispatch(updateCart(payload))
  }
  return (
    <div>
      <div className="flex w-full px-3 items-center mb-2 shadow-xl max-md:flex-col max-md:pb-2">
        <div className="img aspect-square mr-2 max-w-[105px] max-md:max-w-[300px] overflow-hidden">
       <Link href={`/product/${product.attributes.slug}`}>
          <Image
            src={product.attributes.thumbnail.data.attributes.url}
            width={105}
            height={105}
            className="w-full"
          />
        </Link>
        </div>
        <div className="text w-full max-md:flex-col relative">
          <div className="absolute right-0 top-1 hidden max-md:block">
            <VscChromeClose  onClick={()=>{dispatch(removeItemFromCart({id:product.id}))}} size={18} />
          </div>
          <div className="flex justify-between max-md:flex-col">

            <div className="">
            <Link href={`/product/${product.attributes.slug}`}>
              <h1 className="text-[20px] font-semibold">
                {product.attributes.name}
              </h1>
            </Link>
              <p className="text-[14px] text-black/[0.7]">
                {product.attributes.subtitle}
              </p>
            </div>
            <div className="font-semibold text-[14px] text-black/[0.7] ">
              MRP &#8377; {product.attributes.price}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <div className="">
                <span className="text-[13px] font-semibold">Size:</span>
                <select
                  className="text-[13px] font-semibold ml-[4px] rounded-md bg-black/[0.15] px-[2px] max-md:text-[11px]b"
                  onChange={(e)=>updateCartItem(e, "selectionSize")}
                >
                  {product.attributes.size.data.map((item, index) => {
                    return (
                      <option
                        key={index}
                        value={item.size}
                        disabled={!item.enabled?true:false}
                        selected={product.selectionSize === item.size}
                      >
                        {item.size}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="">
                <span className="text-[13px] font-semibold">Quantity: </span>
                <select
                  className="text-[13px] font-semibold ml-[4px] rounded-md bg-black/[0.15] px-[2px] max-md:text-[11px]  "
                  onChange={(e)=>updateCartItem(e, "quantity")}
                >
                  {Array.from({length:10}, (_, i)=> i + 1).map((q, i)=>{
                    return(
                      <option 
                      key={i}
                      value={q}
                      selected={product.quantity === q}
                      >{q}</option>
                    )
                  })}
                </select>
              </div>
            </div>
            <div className="delete">
              <AiFillDelete
                onClick={()=>{dispatch(removeItemFromCart({id:product.id}))}}
                size={18}
                className="text-black/[0.7] max-md:hidden cursor-pointer"
              />
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
     
    </div>
  );
};

export default CartItems;



