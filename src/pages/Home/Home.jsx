import React from 'react'
import "./Home.scss"
import Button from '../Button/Button'


export const Home = () => {
  return (
    <div className='home'>
        <div className='header'>
            <img src='/assets/logo.png' alt='' className='logo'></img>
            upraised
        </div>

        <div className='quiz-logo'>
            Quiz
        </div>

        <Button label={"Start"}/>
    </div>
  )
}
