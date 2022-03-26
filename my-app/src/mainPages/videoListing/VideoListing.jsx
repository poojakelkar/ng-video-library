import { ArrowBackOutlined } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { ListItem } from "../../component/listItem/ListItem";
import "./videolisting.scss";

export const VideoListing = () => {

    const listref= useRef();

    return (
        <div className='container'>
            <div className='back'>
                <ArrowBackOutlined />
                home
            </div>
             <span className="listTitle">History</span>
            <div className="wrapper">
                <div className='listContainer' ref={listref}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                </div>
            </div>
        </div>
    )
}

