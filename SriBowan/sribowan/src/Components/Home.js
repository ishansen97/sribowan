import React, {Component} from "react";
import { Slide } from 'react-slideshow-image';

import Img1 from '../images/1.jpg';
import Img2 from '../images/02.jpg';
import Img3 from '../images/3.jpg';


const slideImages = [
    Img1,
    Img2,
    Img3
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <Slide {...properties}>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`, height: '500px'}}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`, height: '500px'}}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`, height: '500px'}}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    )
}

export default Slideshow;