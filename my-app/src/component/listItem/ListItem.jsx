import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import './listItem.scss'
import { useState } from 'react';

export const ListItem = ({index}) => {

  const [hover, sethover]= useState(false);
  return (
    <div className="list" 
    style={{left: hover && index * 225 - 50}}
    onMouseEnter={()=>sethover(true)} 
    onMouseLeave={()=> sethover(false)}>
        <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TWFyIDIwMjI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00321747-llluuayzkd-portrait.jpg' alt='poster'></img>
        <div className="imginfo">
          <div className="icon">
            <PlayArrow className='addedicon'></PlayArrow>
            <Add className='addedicon'></Add>
            <ThumbUpAltOutlined className='addedicon'></ThumbUpAltOutlined>
            <ThumbDownAltOutlined className='addedicon'></ThumbDownAltOutlined>
          </div>
          <div className="videoInfo">
            <span>2 hour 15 min</span>
            <span className='limit'>15+</span>
            <span>2016</span>
          </div>
          <div className="genre">
            Action/Adventure/Biography/Sci-fi
          </div>
        </div>
    </div>
    
  )
}
