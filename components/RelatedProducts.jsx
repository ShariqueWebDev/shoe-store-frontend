import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import ProductCard from './ProductCard'


const RelatedProducts = ({products}) => {
    const responsive = {
        desktop:{
            breakpoint:{max:3000, min:1024},
            items:3,
        },
        tablet:{
            breakpoint:{max:1023, min:768},
            items:2,
        },
        mobile:{
            breakpoint:{max:767, min:0},
            items:1,
        }
    }
  return (
    <div className='mt-6' >
        <h2 className='text-[25px] m-3 font-semibold'>You might like similar</h2>
        <Carousel responsive={responsive} className='mb-10'>
            {products.data.map((product)=>{
                return(
                    <ProductCard key={product.id} data={product} />
                )
            })}
        </Carousel>
     
    </div>
  )
}

export default RelatedProducts
