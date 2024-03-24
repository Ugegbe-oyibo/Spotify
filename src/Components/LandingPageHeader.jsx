import "./LandingPageHeader.css"
import React from 'react'
import Logo  from "../Logo/Logo";

import SpotifyWhite from '../app/assets/images/spotify-white.png'
import SpotifyWhiteSVG from '../app/assets/images/spotify-white.svg'

import SpotifyBlack from '../app/assets/images/spotify-black.png';
import SpotifyBlackSVG from '../app/assets/images/spotify-black.svg';

import {ReactComponent as MenuIcon} from '../app/assets/icons/list.svg';



export const LandingPageHeader = () => {
    
    return(<header className="header">
        <div className="logo">
            <Logo useWhite = {true} /> 
        </div>
        <div className="menu">
            <MenuIcon fill = 'white' />
            
        </div>
        
        <div className="menu">
        <ul>
            <li>
                <a href="#/Premium">Premium</a>
                </li>
            <li><a href="#/Support">Support</a>
            </li>
            <li><a href="#/Download">Download</a>
            </li>
            <li>|</li>
            <li className="active"><a href="#/Sign Up">Sign Up</a>
            </li>
            <li className="active"><a href="#/Log In">Log In</a>
            </li>
            </ul>
            </div>
    </header>)
}

