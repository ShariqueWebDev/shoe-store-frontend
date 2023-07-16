import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';

const ProductCarousel = ({images, product}) => {
  const {query} = useRouter()
  
  const [selectedImg, setSelectedImg] = useState(product?.thumbnail?.data?.attributes?.url);

  useEffect(()=>{
    setSelectedImg(product?.thumbnail?.data?.attributes?.url)
  }, [query])
  // const [allImages, setAllImages] = useState(imgData);
  
  return (
    <div >
      <div className="main_container flex gap-1 my-8 mx-auto ">
        <div className="thumbnail gap-2">
          {images.map((img)=>{
              return<div key={img.id} className="imageDiv w-full max-w-[60px] gap-2 " style={img?.attributes?.url === selectedImg? {border:"1px solid black"}:{}}>
                <Image height={60} width={60} src={img?.attributes?.url} alt={product?.data?.attributes?.name}  onClick={()=>{setSelectedImg(img?.attributes?.url)}} />
              </div>
            }) 
          }
        </div>
        <div className="image" >
          <Image src={selectedImg} width={500} height={600} alt={product?.data?.attributes?.name} />
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel
