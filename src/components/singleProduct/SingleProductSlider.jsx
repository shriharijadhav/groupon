import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SingleProductSlider = () => {
  return (
    <Slide slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={false} responsive={[{
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]}>
              <div style={{
          textAlign: 'center',
          background: 'red',
          padding: '200px 0',
          fontSize: '30px'
        }}>First Slide</div>
              <div style={{
          textAlign: 'center',
          background: 'orange',
          padding: '200px 0',
          fontSize: '30px'
        }}>Second Slide</div>
              <div style={{
          textAlign: 'center',
          background: 'yellow',
          padding: '200px 0',
          fontSize: '30px'
        }}>Third Slide</div>
              <div style={{
          textAlign: 'center',
          background: 'green',
          padding: '200px 0',
          fontSize: '30px'
        }}>Fourth Slide</div>
              <div style={{
          textAlign: 'center',
          background: 'blue',
          padding: '200px 0',
          fontSize: '30px'
        }}>Sixth Slide</div>
              <div style={{
          textAlign: 'center',
          background: 'indigo',
          padding: '200px 0',
          fontSize: '30px'
        }}>Seventh Slide</div>
              <div style={{
          textAlign: 'center',
          background: 'violet',
          padding: '200px 0',
          fontSize: '30px'
        }}>Eight Slide</div>
          </Slide>
  )
}

export default SingleProductSlider
