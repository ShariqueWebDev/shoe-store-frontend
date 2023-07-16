import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect } from "react";
// import { useEffect, useState } from "react";
import { SiNike } from "react-icons/si";

export default function Home({ products }) {
  // const [data, setData] = useState(null);

  // const fetchProducts = async ()=>{
  //   const {data} = await fetchDataFromApi('/api/products')
  //   setData(data)
  //   console.log(data)
  // }

  // useEffect(()=>{
  //   fetchProducts();
  // }, [])

  const innerHeading = true;
  const headingText = "Trending Products";
  return (
    <main className=" ">
      <HeroBanner />
      <Wrapper className="">
        {/* HEADING AND PARAGRAPH SECTION */}
        <div className="flex flex-col items-center justify-center w-full max-w-[1360px] max-h-[600px] p-2 ">
          <div className="heading w-full text-black py-6 text-center  leading-[1.5] font-bold ">
            <h1 className="text-[32px] max-md:text-[25px] uppercase -tracking-[0.5px]">
              The Air is back - and here to stay
            </h1>
          </div>
          <div className="paragraph w-full text-black/[0.8] p-2 pb-10 text-justify font-semibold text-[17px] max-md:text-[16px] ">
            This shoe is a classic with a runway inspired look. It brings back
            the shape that defined the era and was created by the most famous
            designers of Nike
            <span className="px-1 inline-flex text-black">
              <SiNike size={20} className="" />
            </span>
            . The large Air element ensures a casual look and provides
            long-lasting comfort.
          </div>
        </div>

        {/* PRODUCTS AND PRODUCTS CARD SECTION */}
        {/* {innerHeading && <h1>{headingText}</h1>} */}
        <div className="product_container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10">
          {products?.data?.map((product) => {
            return <ProductCard key={product?.id} data={product} />;
          })}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  return {
    props: { products },
  };
}
