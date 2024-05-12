import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import '../../App.css';
import StarRating from '../homepage/StarRating';
import { Link } from 'react-router-dom';

 const MySlider = ({sliderData}) => {

    

    const getProductName = (myArray) => {
        let nameArray = JSON.parse(myArray);
        return nameArray[0].length > 40 ? nameArray[0].slice(0, 40) + '...' : nameArray
    }
    const getStreet = (myArray) => {
        let nameArray = JSON.parse(myArray);
        let myObj = nameArray[0];
        let streetName = myObj.streetAddress1
        return streetName
        
    }
    const getCity = (myArray) => {
        let nameArray = JSON.parse(myArray);
        let myObj = nameArray[0];
        let city = myObj.city
        return city
        
    }
    const getDiscount = (myArray) => {
        let discountArray = JSON.parse(myArray);
        return discountArray[0]
    }
    const getValue = (myArray) =>{
        let valueArray = JSON.parse(myArray)
        return valueArray[0]/100
    }
    const getPrice = (myArray) =>{
        let priceArray = JSON.parse(myArray)
        return priceArray[0]/100
    }
    const modifiedUrl = (url)=>{
        const parts = url.split("/");
        const lastPart = parts[parts.length - 1];
        return (lastPart.trim());
    }
    
  return (
    <>
      <Swiper  modules={[ Pagination, Navigation]} className="mySwiper" 

       breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      slidesPerGroup={5}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      style={{padding:'0px 50px'}}
      >
      {
        sliderData.map((item,index) =>(
            <SwiperSlide key={index}  >
                <Link key={item.itemId} to={`/deals/${modifiedUrl(item.attributes.url)}`}>
                        <Box display={'flex'}  flexDirection={'column'} h={'450px'}  gap={'5px'} p={'10px 5px'} cursor={'pointer'} overflow={'hidden'}>
                        <Flex w={'100%'} rounded={'lg'} h={'200px'} backgroundImage={`url(${item.attributes.med_image})`} backgroundSize={'cover'}></Flex>
                        <Text fontWeight={'700'} >{`${getProductName(item.attributes.title_array)}`}</Text>
                        <Text>
                            <Text as={'span'}>{`${getStreet(item.attributes.redemption_locations_short)}`},</Text>
                            <Text as={'span'}> {`${getCity(item.attributes.redemption_locations_short)}`}</Text>
                        </Text>
                        <Flex gap={'5px'}  alignItems={'baseline'} w={'100%'} >
                            <Text>{item.attributes.rating_value}</Text>
                            <StarRating  ratingPoints={item.attributes.rating_value}/>
                            <Text>{item.attributes.rating_count} Ratings</Text>
                
                        </Flex>
                        <Text >{item.attributes.merchant_name}</Text>
                        <Flex alignItems={'center'} gap={'5px'}>
                            <Text as={'span'} fontSize={'xl'} textDecoration={'line-through'} color={'gray.600'}>${`${getValue(item.attributes.value_array)}`}</Text>
                            <Text as={'span'} color={'gray.600'}>From</Text>
                            <Text as={'span'} fontSize={'2xl'} fontWeight={'600'} color={'#318301'}>${`${getPrice(item.attributes.price_array)}`}</Text>
                            <Box  bg={'#EBFDDE'} fontSize={'small'} p={'5px'} fontWeight={'700'} rounded={'md'} color={'#318301'} >{`${getDiscount(item.attributes.discount_percent_array)}`}% OFF</Box>
                        </Flex>
                    {
                        item.attributes.purchases_total_displayed && ( 
                                    <Text>{item.attributes.purchases_total_displayed}+ bought</Text>
                        )
                        }
                
                    </Box>
                </Link>
            </SwiperSlide>
        ))
      }
      </Swiper>
    </>
  );
}

export default MySlider


