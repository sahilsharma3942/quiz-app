import React from 'react'
import "./Button.scss";

const Button = ({label}) => {
  return (
    <button className='btn'>{label}</button>
  )
}

export default Button