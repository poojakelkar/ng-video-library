import React from 'react'
import { MovieCategory } from '../component/category/MovieCategory'
import { ImageSlider } from '../component/latestPicture/ImageSlider'
import { Navbar } from '../component/navbar/Navbar'
import './home.scss'

export const Home = () => {
  return (
    <div className='home'>
        <Navbar></Navbar>
        <ImageSlider></ImageSlider>
        <MovieCategory/>
        <MovieCategory/>        
    </div>
  )
}
