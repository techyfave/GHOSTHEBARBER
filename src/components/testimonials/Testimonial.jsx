import React from 'react'
import { Container } from 'react-bootstrap'

import testImg from "../../../public/images/barbing.png"
function Testimonial() {
  return (
    <div className='white-bg text-center p-5'>
        <Container className='d-flex flex-column align-items-center gap-4'>
        <h2 className='text-center fw-bold mb-4 text-black'>Testimonials</h2>
        <p className='text-black w-75'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsa architecto explicabo laboriosam natus quae perferendis eveniet soluta quia esse cumque quos illo culpa minima, nemo delectus provident voluptates quis!
        </p>
        <div>
            <img src={testImg} alt="" className='small-img'/>
            <h3 className='text-black fw-bold fs-6  mt-3'>Desmond, Commisioner</h3>
        </div>
        </Container>
    </div>
  )
}

export default Testimonial