import React from 'react'
import UploadImage from '../components/image_upload/UploadImage'

import OtherHero from '../components/Hero/OtherHero'

import bg from "../assets/bg-2.jpg"

function Upload() {
  return (
    <div>
      <OtherHero heading='Upload your Images' heroBg={bg}/>
      <UploadImage/>
    </div>
  )
}

export default Upload