import React from 'react'
import { MovieCategory } from '../category/MovieCategory'
import { ImageSlider } from '../latestPicture/ImageSlider'
import { Navbar } from '../navbar/Navbar'
import './home.scss'

export const Home = () => {
  return (
    <div className='home'>
        <Navbar></Navbar>
        <ImageSlider></ImageSlider>
        <MovieCategory/>
    </div>
  )
}
