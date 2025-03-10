import React from 'react'
import { Link } from 'react-router-dom'

function Button({text, dest, className}) {
  return (
    <>
    <Link className={`btn text-white px-3 position-relative gold-bg ${className}`} to={dest}>{text}</Link>
    </>
  )
}

export default Button