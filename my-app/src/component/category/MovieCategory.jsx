import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef } from 'react'
import './category.scss'
import {ListItem} from "../listItem/ListItem";
import { useState } from 'react';

export const MovieCategory = () => {
  const [slide, setSlide] = useState(0)

  const listref= useRef();
  const arrowHandle =(direction)=>{
      let distance = listref.current.getBoundingClientRect().x - 50;
      if(direction==='left' && slide > 0){
        setSlide(slide - 1);
        listref.current.style.transform = `translateX(${232 + distance}px)`
      }
      if(direction==='right'  && slide < 6){
        setSlide(slide + 1);
        listref.current.style.transform = `translateX(${-232 + distance}px)`
      }
  }
  return (
    <div className='category'>
      <span className="listTitle">History</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='arrow left' onClick={()=>arrowHandle("left")}></ArrowBackIosOutlined>
        <div className='listContainer' ref={listref}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
        </div>
        <ArrowForwardIosOutlined className='arrow right' onClick={()=>arrowHandle("right")}></ArrowForwardIosOutlined>
      </div>
    </div>

  )
}
