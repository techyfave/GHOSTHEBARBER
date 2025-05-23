import { useState } from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './Pages/Home'
import Upload from './Pages/Upload'
import Gallery from './Pages/Gallary'
import AppointmentPage from './Pages/AppointmentPage'



function App() {

  return (
    <Router>
      <Header/>
        <main>
      <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/upload' element={<Upload/>}/>
              <Route path='/gallary' element={<Gallery/>}/>
              <Route path='/appointment' element={<AppointmentPage/>}/>
        </Routes>
      </main>
          <Footer/>
    </Router>
  )
}

export default App
