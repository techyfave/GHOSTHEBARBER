import React from 'react'
import "./Pricing.css"

function PriceList({img,price,title,text}) {
  return (
    <div className='pricelist d-flex align-items-center gap-4 mb-5 '>
        <img src={img} alt={title} />
        <div>
            <h4 className='text-black fw-bold fs-6'>{title} <span className='pricing-line'></span> #{price}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default PriceList