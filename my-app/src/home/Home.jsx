import React from 'react'
import { ImageSlider } from '../latestPicture/ImageSlider'
import { Navbar } from '../navbar/Navbar'
import './home.scss'

export const Home = () => {
  return (
    <div className='home'>
        <Navbar></Navbar>
        <ImageSlider></ImageSlider>
    </div>
  )
}
