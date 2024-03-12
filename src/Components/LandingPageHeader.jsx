import "./LandingPageHeader.css"
import {Components} from 'react'
import {Logo} from './Logo'

import SpotifyWhite from '../app/assets/images/spotify-white.png'
import SpotifyWhiteSVG from '../app/assets/images/spotify-white.svg'


export const LandingPageHeader = () => {
    return(<header className="header">
        <div className="logo">
            <Logo />
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

