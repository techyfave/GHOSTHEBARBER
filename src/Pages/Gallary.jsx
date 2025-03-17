import React from 'react'
import OtherHero from '../components/Hero/OtherHero'

import bg from "../assets/bg-2.jpg"
import HairGallery from '../components/gallary/HairGallary'

function Gallary() {
  return (
    <div>
        <OtherHero heading='Gallary' heroBg={bg} />
        <HairGallery/>
    </div>
  )
}

export default Gallary