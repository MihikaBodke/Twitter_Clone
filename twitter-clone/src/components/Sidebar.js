import React, { Component } from 'react';
import '../css/Sidebar.css';
import SidebarOption from './SidebarOption.js';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Button} from '@material-ui/core';
function Sidebar() {
        return (
            <div className="sidebar">
                <TwitterIcon className="sidebar--twitterIcon"/>
                <SidebarOption Icon={HomeIcon} text="Home" active={true}/>
                <SidebarOption Icon={SearchIcon} text="Search"/>
                <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
                <SidebarOption Icon={ListAltIcon} text="Lists"/>
                <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
                <SidebarOption Icon={MoreHorizIcon} text="More"/>
                <Button variant="outlined" className="sidebar--tweet" fullWidth>Tweet</Button>

            </div>
        )
}

export default Sidebar;

