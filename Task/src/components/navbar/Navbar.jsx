import React from "react";
import {useState} from 'react' ;
import './Navbar.css';

import Search from '@mui/icons-material/Search';
import Notification from '@mui/icons-material/Notifications';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

import img1 from '../images/logo.png'
import profile from '../images/3690673.jpg'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={img1} alt="" />
                    <span>HomePage</span>
                    <span>Series</span>
                    <span>Movie</span>
                    <span>New_and_Popular</span>
                    <span>Mylist</span>
                </div>

                <div className="right">
                    <Search className="icon"/>
                    <span>Rio</span>
                    <Notification className="icon"/>
                    <img src={profile} alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Setting</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar