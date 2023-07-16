import ProductCarousel from "@/components/ProductCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountPricePercentage } from "@/utils/formulas";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import React, { useContext, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import Alert from "@/components/Alert";
import { Context } from "@/utils/context";
import { BiCheckCircle } from "react-icons/bi";

const ProductDetails = ({product, products, slug}) => {

  const {showAlert} = useContext(Context)

  const dispatch = useDispatch();
  const [error, setError] = useState(false)
  const [selectionSize, setSelectionSize] = useState()

  const p = product?.data?.[0]?.attributes;
  
  const scrollView = (divId) => {
    if(typeof window !== "undefined"){
      document?.getElementById(divId)?.scrollIntoView({
          block:"center",
          behavior:"smooth"
        })
    }
  }

  return (
    <div>
      {/* SINGLE PRODUCT PAGE */}
      <Wrapper className="">
        <div className="flex w-full ml-6 max-md:ml-0  max-md:flex-wrap max-md:justify-center">
          <div className="right w-full max-w-[600px]">
            <ProductCarousel images={p.image.data} product = {p}/>
          </div>
          <div className="left w-full px-16 max-md:px-1 max-md:my-2 my-8 mx-auto  ">
            <div className="product_details">
              <div className="heading ">
                {/* PRODUCT HEADING AND CATEGORY */}
                <h1 className="text-[28px] font-semibold max-md:text-[25px]">
                  {p.name}
                </h1>
                <div className="flex items-center gap-6">
                <p className="font-semibold mt-2">{p.subtitle}</p>
                <button className="mt-3 text-[14px] border-black border rounded-lg px-1" onClick={()=>{scrollView("relativePro")}}>Relative product</button>

                </div>
              </div>
              {/* PRICE AND TEXES */}
              <div className="price mt-6  ">
                <div className="price_details flex justify-between">
                  <div className="price flex gap-5 text-black/[0.6] font-semibold ">
                    <p>&#8377;{p.price}</p>
                    {p.original_price && (
                      <p className="line-through">&#8377;{p.original_price}</p>
                    )} 
                  </div>
                    <p className="text-[#45df82]">
                        {p.original_price && getDiscountPricePercentage(p.price, p.original_price) + "%"}
                    </p>
                </div>
                <div className="texes text-[13px] text-black/[0.7] font-semibold">
                  <p>incl. of taxes</p>
                  <p>{`(Also includes all aplicable duties)`}</p>
                </div>
              </div>
            </div>
            <div className="selection flex justify-between mt-20 max-md:mt-10 font-semibold">
              <div className="">Select Size</div>
              <div className="text-black/[0.7]">Select Guide</div>
            </div>
            {/* DIFFERENT SIZES SHOES */}
            <div className="size flex justify-center items-center " id={"sizeGrid"}>
              <div className="grid grid-cols-3 gap-4 gap-x-6 py-6 max-md:w-full">
                {p?.size?.data?.map((sizeNum, index)=>{
                  return(
                    <button disabled={!sizeNum.enabled} onClick={()=>{setError(false); setSelectionSize(sizeNum.size)}}  key={index} className={`w-[95px] px-4 border-[1px] hover:border-black/[0.8]   rounded-md text-center max-md:w-full ${sizeNum?.enabled ? "hover:cursor-pointer":"hover:cursor-not-allowed bg-black/[0.2] "} ${selectionSize === sizeNum.size ?"border-black bg-black/[0.1]":""} `}>
                      {sizeNum.size}
                    </button>
                  )
                })}
              </div>
            </div>
            {error && <div className="requiredSize text-red-600 ">
              Size selection is required
            </div>}
            <div className="buttons">
              <div onClick={()=>{if
              (!selectionSize){
                setError(true);
                scrollView("sizeGrid");
              } else{
                dispatch(addToCart({
                  ...product?.data?.[0],
                  selectionSize,
                  oneQuantityPrice: p.price
                }));
                showAlert(<BiCheckCircle/>, "Success", "Product Added to Cart")
              }
              }} className="addBtn bg-black/[0.6] text-white text-center p-3 rounded-full mt-8 hover:bg-black/[0.8] cursor-pointer font-semibold transition-transform active:scale-95">
                Add to Cart
              </div>
              <div className="wishbotton ">
                <div className="wishBtn border-[1px] border-black/[0.4] hover:bg-black/[0.0.5] rounded-full p-3  mt-4 hover:border-black cursor-pointer flex gap-1 justify-center items-center font-semibold transition-transform active:scale-95 ">
                  Wishlist{" "}
                  <span>
                    <IoMdHeartEmpty color="red" size={20} />
                  </span>
                </div>
              </div>
              <div className="para mt-10">
                <div className="heading font-semibold text-[20px]">
                  Product Details
                </div>
                <div className="markdown text-[15px] my-3">
                  <ReactMarkdown>
                    {p.description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="relativePro">
          <RelatedProducts products={products} product={product} />
        </div>
      </Wrapper>
      <Alert/>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths(){
  const product = await fetchDataFromApi(`/api/products?populate=*`)
  const paths = product?.data?.map((p)=>{
    return {
      params: {
        slug: p.attributes.slug,
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params:{slug}}){
  // THIS FUNCTION FOR SINGLE PRODUCT PAGE
  const product = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$eq]=${slug}`)

  // THIS FUNCTION FOR RELATIVE PRODUCTS COMPONENT
  const products = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$ne]=${slug}`);

  return {
    props:{
      product,
      products,
      slug
    }
  }
}
