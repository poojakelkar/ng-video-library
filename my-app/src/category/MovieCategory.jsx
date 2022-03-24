import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import './category.scss'
import {ListItem} from "../listItem/ListItem";

export const MovieCategory = () => {
  return (
    <div className='category'>
      <span className="listTitle">History</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='arrow left'></ArrowBackIosOutlined>
        <div className='listContainer'>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <ArrowForwardIosOutlined className='arrow right'></ArrowForwardIosOutlined>
      </div>

      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='arrow'></ArrowBackIosOutlined>
        <div className='listContainer'>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <ArrowForwardIosOutlined className='arrow'></ArrowForwardIosOutlined>
      </div>
    </div>
  )
}
