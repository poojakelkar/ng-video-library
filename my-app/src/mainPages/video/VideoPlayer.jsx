import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './video.scss'

const VideoPlayer = () => {
  return (
    <div className='video'>
        <div className="back">
            <ArrowBackOutlined />
            home
        </div>
        <video className='playedVideo' autoPlay progress controls src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
    </div>
  )
}

export default VideoPlayer

