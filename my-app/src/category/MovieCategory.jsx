import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import './category.scss'
import {ListItem} from "../listItem/ListItem";

export const MovieCategory = () => {
  return (
    <div className='category'>
      <span className="listTitle">History</span>
      <div className="wrapper">
        <ArrowBackIosOutlined></ArrowBackIosOutlined>
        <div className='listContainer'>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <ArrowForwardIosOutlined></ArrowForwardIosOutlined>
      </div>
    </div>
  )
}
