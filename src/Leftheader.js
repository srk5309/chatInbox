import React from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Leftheader.css'

function Leftheader() {
    return (
        <div className="leftHeader">
            <IconButton>
                <Avatar style={{color:"#BBDEFB"}}></Avatar>
            </IconButton>

            <div className="center_leftHeader">
                <h3>User name</h3>
                <p>Last seen at...</p>
            </div>
            

            <IconButton>
                <MoreVertIcon></MoreVertIcon>
            </IconButton>
                
        </div>
    );
}

export default Leftheader;
