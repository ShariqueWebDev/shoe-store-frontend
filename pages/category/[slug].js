import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
const maxResult = 3;

const Category = ({ category, products, slug }) => {
  const { query } = useRouter();
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    setPageIndex(1);
  }, [query]);
  const { data, error } = useSWR(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    {
      // DATA DISPLAYED UNTIL FETCHING ANOTHER DATA
      fallbackData: products,
    }
  );
  return (
    // MAIN CATEGORY PAGE (4 CATEGORIES)
    <div className="w-full max-w-[1280px] mx-auto ">
      <Wrapper>
        <div className="text-center heading text-[35px] font-semibold mt-20 leading-tight max-sm:text-[28px] ">
          <h1 className="">{category?.data[0]?.attributes?.name}</h1>
        </div>
        <div className="product_container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10">
          {data?.data?.map((pdt) => {
            return <ProductCard key={pdt.id} data={pdt} />;
          })}
        </div>

        {data?.meta?.pagination?.total > maxResult && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0 pb-10">
            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold">{`${pageIndex} of ${
              data && data.meta.pagination.pageCount
            }`}</span>

            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === (data && data.meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Category;

// NEXT JS STATIC SITE GENERATION METHODS (SSG FUNCTIONS) TO GET SLUG PATHS
export async function getStaticPaths() {
  const category = await fetchDataFromApi(`/api/categories?populate=*`);
  const paths = category?.data?.map((catg) => {
    return {
      params: {
        slug: catg.attributes.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

// NEXT JS STATIC SITE GENERATION METHODS (SSG FUNCTIONS) TO GET SPECIFIC COTEGORY DATA
export async function getStaticProps({ params: { slug } }) {
  const category = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );

  return {
    props: {
      category,
      products,
      slug,
    },
  };
}
