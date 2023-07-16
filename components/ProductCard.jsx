import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getDiscountPricePercentage } from "@/utils/formulas";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <div className="p-3 m-2  ">
      <Link href={`/product/${p.slug}`}>
        <div className="product_img">
          <Image width={500} height={500} src={`${p?.thumbnail?.data?.attributes?.url}`} alt={p.name} />
        </div>
        <div className="product_details p-2">
          <p className="my-1 font-semibold">{p.name}</p>
          <p className="text-[12px] text-black/[0.7]">{p.subtitle}</p>
          <div className="price_details flex justify-between">
            <div className="price flex gap-5 text-black/[0.6] font-semibold ">
              <p>&#8377;{p.price}</p>
              {p.original_price && (
                <p className="line-through">&#8377;{p.original_price}</p>
              )}
            </div>
            {p.original_price && <p className="text-[#45df82]">{getDiscountPricePercentage(p.price, p.original_price)}%</p>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
