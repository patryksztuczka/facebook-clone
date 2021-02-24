import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Sidebar() {
 return (
  <div className="sidebar">
    <SidebarRow src="https://avatars.githubusercontent.com/u/73931963?s=460&u=fc70f441ad77fd772f8b45648cc3c25631e46bf2&v=4" title="Patryk Sztuczka"/>
    <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
    <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
    <SidebarRow Icon={PeopleIcon} title="Friends"/>
    <SidebarRow Icon={ChatIcon} title="Messenger"/>
    <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
    <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
    <SidebarRow Icon={ExpandMoreOutlined} title="More"/>
  </div>
 )
}

export default Sidebar
