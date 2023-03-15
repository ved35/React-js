import React from "react";
import './Feature.css';

import profile from '../images/3690673.jpg'
import dragon from '../images/dragon-ball.png'

import PlayArrow from '@mui/icons-material/PlayArrow';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

const Feature = ({ type }) => {
    return (
        <div className="Feature">
            <div className="category">
                <span>Series :</span>
                <select name="genre" id="genre">
                    <option>-----------</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
            <img src={profile} alt="" />
            <div className="info">
                <img src={dragon} alt="" />
                <span className="desc">
                    After 18 years, With Majin Buu defeated, Goku has taken a completely new role as...a radish farmer?! Far away, the powerful God of Destruction, Beerus, awakens to a prophecy revealing his demise at the hands of an even more formidable being. When his search for the Saiyan God brings him to Earth, can Goku and his friends take on their strongest foe yet?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>info</span>
                    </button>
                </div>
            </div>

            {/* <div className="info">
                <img src={dragon} alt="" />
                
                
            </div>  */}
        </div>
    )
}
export default Feature;