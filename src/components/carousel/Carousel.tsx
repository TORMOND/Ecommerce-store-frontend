// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


import React, {useState} from 'react';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { generateSlides } from './GenerateSlides';
interface Slide {
  name: string;
}


export  const AutoplayExample: React.VoidFunctionComponent = () => {
  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    height       : '15rem',
  };
const numbers = ['slide 1', 'slide 2', 'slide 3', 'slide 4', 'slide 5']
const [slides, setSlides]= useState<Slide[]>([
  {name: 'slide 1'},
  {name: 'slide 2'},
  {name: 'slide 3'},
  {name: 'slide 4'},
  {name: 'slide 5'}

])

  return (
    <div className="wrapper">
      <h2 id="autoplay-example-heading">Autoplay</h2>
      <Splide
        options={ options }
        aria-labelledby="autoplay-example-heading"
        hasTrack={ false }
      >
        <div style={ { position: 'relative' } }>
          <SplideTrack>
            { generateSlides().map((slide, index) => (
              <SplideSlide key={index}>
                <img src={ slide.src } alt={ slide.alt }/>
                {/* <h2>{slide.name}</h2> */}
              </SplideSlide>
            ) ) }
          </SplideTrack>
        </div>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button>
      </Splide>
    </div>
  );
};