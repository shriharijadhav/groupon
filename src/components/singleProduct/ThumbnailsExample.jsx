import React, { useRef, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Box } from '@chakra-ui/react';

 import '@splidejs/react-splide/css';


const ThumbnailsExample = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  const allSlides =[
   
    {
        id:7,
        imgUrl:'https://mms.businesswire.com/media/20210804005698/en/896195/5/2021-07-29.jpg'
    },
    { id: 1,
        imgUrl:'https://img.grouponcdn.com/bynder/WMjEMapAkR1m1NA4HksMWo3rFSp/WM-2048x1229/v1/t600x362.jpg'
      },
    { id: 2,
      imgUrl:'https://www.researchgate.net/publication/259189609/figure/fig1/AS:838493039239168@1576923727145/Example-of-Massage-Groupon-offer.jpg'
    },
    { id: 4,
      imgUrl:'https://img.grouponcdn.com/seocms/phmec2nD2nLpLx2mG1x4av668Wp/5-Easy-meals_1000-x-500px_GRN_jpg-1000x500/v1/c1000x500'
    },
    { id: 5,
      imgUrl:'https://img.grouponcdn.com/deal/4BNPVC7YFWhHTb24tsTpiwphJHrA/4B-800x480/v1/t600x362.jpg'
    },
     
    {
        id:6,
        imgUrl:'https://img.grouponcdn.com/deal/vkMpJ8DVN4wbGdW3xuuVqA/481553475-1000x600/v1/t600x362.jpg'
    }
  ]

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderSlides = () => {
    return allSlides.map((slide, index) => (
      <SplideSlide key={index}>
        <img src={slide.imgUrl} alt={'slide.alt'} />
      </SplideSlide>
    ));
  };

  const mainOptions = {
    type: 'loop',
    
    gap: '1rem',
    pagination: false,
    height:'400px',
    width:'700px',
    cover: true,
    drag:true,
    breakpoints: {

            540: {
                perPage: 1,
                perMove: 1,
                width:'550px',
                height:'400px',


            },
            800: {
                perPage: 1,
                perMove: 1,
                width:'350px',
                height:'400px',

            },
            900: {
                perPage: 1,
                perMove: 1,
                width:'350px',
                height:'400px',

            },
            1024: {
                perPage: 1,
                perMove: 1,
                width:'500px',
                height:'600px',
            },
      }
   };

  const thumbsOptions = {
    type: 'slide',
    rewind: true,
    gap: '0.5rem',
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: 'center',
    isNavigation: true,
    arrows    : false,
    breakpoints: {
        540: {
            fixedWidth: 70,
            fixedHeight: 50,
        },
        1024: {
            fixedWidth: 70,
            fixedHeight: 50,
        },
  }
    

  };

  return (
    <Box className="wrapper" w={'100%'} display={'flex'} flexDirection={'column'} gap={'10px'} >

      <Splide
        options={mainOptions}
        ref={mainRef}
        aria-labelledby="thumbnail-slider-example"
 
       >
        {renderSlides()}
      </Splide>

      <Box display={'flex'}>
      <Splide
      options={thumbsOptions}
      ref={thumbsRef}
      aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
    >
      {renderSlides()}
    </Splide>
      </Box>
    </Box>
  );
};

export default ThumbnailsExample;
