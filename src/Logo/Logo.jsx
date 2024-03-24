import SpotifyWhite from '../app/assets/images/spotify-white.png'
/*import SpotifyWhiteSVG from '../app/assets/images/spotify-white.svg'*/
import Style from './style.module.css'

import SpotifyBlack from '../app/assets/images/spotify-black.png'
/*import SpotifyBlackSVG from '../app/assets/images/spotify-black.svg'*/

export default function Logo (props){
    const myImage = props.SpotifyBlack ? SpotifyBlack : SpotifyWhite
    return(
        <a href='a/dashboard' >
        <img src = {myImage} />
        </a>
    )
   } 
   function NavigationLogoText() {
    return(
        <h1>Spotify</h1>
    )
   }