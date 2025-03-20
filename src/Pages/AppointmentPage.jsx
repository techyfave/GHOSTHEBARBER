import React from 'react'
import BookAppointment from '../components/Appointment/Appontment'

import bg from "../assets/bg-2.jpg"
import OtherHero from '../components/Hero/OtherHero'

function AppointmentPage() {
  return (
    <div>
        <OtherHero heading='Book an Appointment' heroBg={bg} />
        <BookAppointment/>
    </div>
  )
}

export default AppointmentPage