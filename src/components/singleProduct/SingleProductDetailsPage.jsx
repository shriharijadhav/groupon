import { Box, Button, Flex, Grid, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import StarRating from '../homepage/StarRating';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineTag } from "react-icons/ai";
import greenCheckMark from '../../images/logos/greenCheckMark.svg';
import { IoStarOutline } from "react-icons/io5";


import { BiMessage } from "react-icons/bi";

import { IoMdThumbsUp } from "react-icons/io";


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
import medalImg from '../../images/logos/medal.svg'

import ThumbnailsExample from './ThumbnailsExample';
import MySlider from './MySlider';
import { recommendedDealsData, similarDealsData } from './sliderData';
import PriceAndAddToCartSection from './PriceAndAddToCartSection';

const SingleProductDetailsPage = () => {
    const params = useParams();
    const {productUrl} = params;
    console.log(productUrl,'prodct details')

    const homepage_all_data = useSelector((store)=>store.homepage_all_data);

    const modifiedUrl = (url)=>{
        const parts = url.split("/");
        const lastPart = parts[parts.length - 1];
        return (lastPart.trim());
    }
    const productFetched = homepage_all_data.filter((item)=> {
        
        const url = modifiedUrl(item.attributes.url);
        
        if(url === productUrl) return item

    } )

    const productTitle = JSON.parse( productFetched[0].attributes.title_array)[0];
    const gallery_title = productFetched[0].attributes.gallery_title;
    const productCity = JSON.parse(productFetched[0].attributes.redemption_locations_short )[0].city;
    const productStreet = JSON.parse(productFetched[0].attributes.redemption_locations_short )[0].streetAddress1;
    const rating = productFetched[0].attributes.rating_value;
    const rating_count = productFetched[0].attributes.rating_count;
    const purchases_total_displayed = productFetched[0].attributes.purchases_total_displayed;
    const merchantName = productFetched[0].attributes.merchant_name;
    const firstSlideImageUrl = productFetched[0].attributes.med_image;


    const value_array = JSON.parse(productFetched[0].attributes.value_array);
    const value = Number((value_array[0]))/100;

    const discount_percent_array = JSON.parse(productFetched[0].attributes.discount_percent_array);
    const discount = Number((discount_percent_array[0]));

    const price_array = JSON.parse(productFetched[0].attributes.price_array);
    const price = Number((price_array[0]))/100;

    const subProduct_title = JSON.parse( productFetched[0].attributes.title_array)[1]; 
    const subProduct_price = Number((price_array[1]))/100;
    const subProduct_value = Number((value_array[1]))/100;
    const subProduct_discount = Number((discount_percent_array[1]));


    const singleProduct = productFetched[0];
    // console.log(productFetched)
    // console.log('mm',rating)

    
 
   

      useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, [productFetched,productUrl,firstSlideImageUrl,params]);

    return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} direction={'column'} p={'10px 0px'}>
        <Flex w={'80%'} p={'20px 0px'}>
            <Breadcrumb spacing='0px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'fontSize={'small'} color={'#316BBB'} >Local</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'fontSize={'small'} color={'#316BBB'} >Beauty & Spa</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem >
                    <BreadcrumbLink href='#'fontSize={'small'} color={'#316BBB'} >Massage</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'fontSize={'small'} color={'#316BBB'} >Foot Massage</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
        <Flex w={'80%'} direction={'column'} gap={'10px'}> 
            <Flex justifyContent={'left' } alignItems={'center'} w={'100%'}  gap={'10px'}>
                <Image src={medalImg} />
                <Text fontSize={'3xl'} fontWeight={'700'}>{merchantName}</Text>
            </Flex>
            <Flex justifyContent={'left' } alignItems={'center'} w={'100%'}  gap={'10px'}>
                <SlLocationPin color='gray'/>
                <Text color={'#316BBB'} cursor={'pointer'}>{productStreet}, {productCity}</Text>
            </Flex>
            <Flex justifyContent={'left' } alignItems={'center'} w={'100%'}  gap={'10px'}>
                <AiOutlineTag color='gray'/>
                <Text cursor={'pointer'}>{gallery_title}</Text>
            </Flex>
            <Flex justifyContent={'left' } alignItems={'center'} w={'100%'}  gap={'10px'}>
                <Text>{rating}</Text>
                <StarRating  ratingPoints={rating}/>
                <Text>{rating_count}</Text>
                <Text>Groupon Ratings</Text>
            </Flex>
            
        </Flex>

        <Flex w={['100%','100%','80%','80%']} direction={['column','column','column','row']} justifyContent={['center','center','center','center']} alignItems={['center','center','start','start']} gap={['30px']}>
            <Flex w={['90%','90%','50%','60%']} direction={'column'} >
                <ThumbnailsExample firstSlideImageUrl={firstSlideImageUrl} />

                <Flex p={'30px 0px'} pb={'20px'} direction={'column'}>
                    <Text fontSize={'2xl'} fontWeight={'700'}>Highlights</Text>
                    <Text>Upscale bowling inside a luxury bowling alley with glow-in-the-dark lanes, a spacious sports bar, and entertaining arcades</Text>
                </Flex>

                <Flex p={'10px 0px'} direction={'column'}>
                    <Text fontSize={'2xl'} fontWeight={'700'}>About This Deal  </Text>
                    <Text fontSize={'lg'} fontWeight={'500'}>Two Hours of Bowling and Shoe Rentals                    </Text>
                    <Text>Upscale bowling inside a luxury bowling alley with glow-in-the-dark lanes, a spacious sports bar, and entertaining arcades</Text>
                    <UnorderedList>
                        <ListItem>
                        Choose between two-, four-, or six-person options
                        </ListItem>
                        <ListItem>
                        Each voucher good for one lane
                        </ListItem>
                        <ListItem>
                        Includes shoe rentals for each guest
                        </ListItem>
                        <ListItem>
                        Gather friends or take a date to this upscale bowling alley
                        </ListItem>
                    </UnorderedList>

                    <Text p={'20px 0px'} fontStyle={'italic'}>Retail values vary by location. Not valid until 24 hours after purchase.                    </Text>
                    <Text>
                        <Text as={'span'}>See all valid locations here.</Text>
                        <Text as={'span'}>Please check Bowlero.com prior to your visit to check each center's hours of operation.</Text>
                    </Text>
                </Flex>

                <Flex p={'10px 0px'} direction={'column'}>
                    <Text fontSize={'lg'} fontWeight={'500'}>About Bowlero                    </Text>
                    <Text>Bowlero provide visitors a striking spin on bowling, laser tag, and epic eats. Each location features bowling lanes decked out with black lights, plush lounge seats, and HD video walls that help take one's game to a whole new level. They also sport a state-of-the-art arcade along with multi-player laser tag challenges at select locations. The nationally-recognized menu, meanwhile, comes stuffed with everything from oversized shareables to classic burgers and sandwiches each with their own spin.</Text>
                    <Image w={'70%'}  p={'20px 0px'} src={'https://img.grouponcdn.com/editorial/2W5pzUdEsqEyBcpqjdV3tk18k6zF/2W-600x480'} alt={''}/>
                </Flex>

                <Flex p={'30px 0px'} pb={'20px'} direction={'column'}>
                    <Text fontSize={'2xl'} fontWeight={'700'}>Fine Print</Text>
                    <Text>Promotional value expires Jun 27, 2024. Amount paid never expires. Limit 4 per person. Valid only at listed locations. Not valid until 24 hours after purchase. Not valid Saturdays after 6 p.m. Valid at United States locations only. Paid value must be used in one visit and only towards bowling and shoe rental. Advanced reservations not available; subject to availability. Call in advance to confirm availability. Not valid for contracted group events, birthdays, leagues or tournaments. Cannot be combined with other offers. Limit 1 voucher per 2-, 4-, or 6-person group. Valid for one lane per voucher (2, 4, or 6-person group). See all valid locations here. Offer is not eligible for our promo codes or other discounts. All sales final. Merchant is solely responsible to purchasers for the care and quality of the advertised goods and services. Offer is not eligible for our promo codes or other discounts. Learn about Strike-Through Pricing and Savings</Text>
                </Flex>

                <Flex p={'10px 0px '} direction={'column'}>
                    <Text fontSize={'2xl'} fontWeight={'600'}>Groupon Customer Reviews</Text>
                    <Flex alignItems={'center'} p={'5px 0px'}  gap={'5px'}>
                       <Flex h={'100%'}> <Text fontSize={'3xl'} fontWeight={'600'} gap={'3px'} >4.7</Text></Flex>
                        <Flex h={'100%'} direction={'column'}>
                            <StarRating ratingPoints={4.7} />
                            <Text>56,428 Groupon Ratings</Text>

                        </Flex>
                    </Flex>
                </Flex>

                <Flex p={'10px 0px '} direction={'column'}  rounded={'lg'} bg={'#F8F7FA'}>
                    <Flex alignItems={'center'} p={'5px 0px'}   gap={'5px'}>
                       <Flex h={'100%'} p={'0px 10px'} pr={'5px'}> 
                        <Image src={greenCheckMark} w={'90%'} alt={''}/>
                       </Flex>
                        <Flex h={'100%'} direction={'column'}>
                            <Text fontWeight={'600'}>100% Verified Reviews                            </Text>
                            <Text>All Groupon reviews are from people who have redeemed deals with this merchant. Review requests are sent by email to customers who purchased the deal.</Text>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex p={'20px 0px '} gap={'5px'} cursor={'pointer'} w={'max-content'}>
                    <Flex width={'max-content'} padding={'0px 10px'} border={'1px solid gray'} rounded={'full'} variant={'outline'}>Food</Flex>
                    <Flex width={'max-content'} padding={'0px 10px'}  border={'1px solid gray'} rounded={'full'} variant={'outline'}>Bowling</Flex>
                    <Flex width={'max-content'} padding={'0px 10px'}  border={'1px solid gray'} rounded={'full'} variant={'outline'}>Staff</Flex>
                    <Flex width={'max-content'} padding={'0px 10px'}  border={'1px solid gray'} rounded={'full'} variant={'outline'}>Service</Flex>
                    <Flex width={'max-content'} padding={'0px 10px'}  border={'1px solid gray'} rounded={'full'} variant={'outline'}>Music</Flex>
                    <Flex width={'max-content'} padding={'0px 10px'}  border={'1px solid gray'} rounded={'full'} variant={'outline'}>Price</Flex>
                    <Flex width={'max-content'} padding={'0px 10px'}  border={'1px solid gray'} rounded={'full'} variant={'outline'}>Experience</Flex>
                </Flex>

                <Flex p={'10px 0px '} direction={'column'}  rounded={'lg'}  >
                    <Flex   p={'5px 0px'}   gap={'5px'}>
                       <Flex    pr={'5px'}> 
                        <Box w={'50px'} h={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontWeight={'500'} rounded={'full'} bg={'#E5E4E7'}>S</Box>
                       </Flex>
                        <Flex h={'100%'} direction={'column'}>
                            <Text fontWeight={'600'}>Sarah</Text>
                            <Flex gap={'5px'} alignItems={'center'}>
                                <IoStarOutline/>
                                <Text>4.2 ratings</Text>
                                <BiMessage/>
                                <Text>6 reviews</Text>
                        </Flex>
                            <Flex gap={'5px'} alignItems={'center'}>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <Text>5 hours ago</Text>
                            </Flex>
                            

                        </Flex>
                    </Flex>
                    <Text>I loved how easy it was to redeem my Groupon, our group had a wonderful time! Thank you Groupon!!
                            </Text>
                    <Flex m={'5px 0px'} w={'max-content'} p={'0px 5px'} border={'1px solid gray'} gap={'2px'} rounded={'md'} alignItems={'center'}>
                        <IoMdThumbsUp color='gray'/>
                        <Text fontSize={'small'}>Helpful</Text>
                    </Flex>
                </Flex>
                <Flex p={'10px 0px '} direction={'column'}  rounded={'lg'}  >
                    <Flex   p={'5px 0px'}   gap={'5px'}>
                       <Flex    pr={'5px'}> 
                        <Box w={'50px'} h={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontWeight={'500'} rounded={'full'} bg={'#E5E4E7'}>I</Box>
                       </Flex>
                        <Flex h={'100%'} direction={'column'}>
                            <Text fontWeight={'600'}>Irena</Text>
                            <Flex gap={'5px'} alignItems={'center'}>
                                <IoStarOutline/>
                                <Text>3 ratings</Text>
                                <BiMessage/>
                                <Text>3 reviews</Text>
                        </Flex>
                            <Flex gap={'5px'} alignItems={'center'}>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <Text>12 hours ago</Text>
                            </Flex>
                            

                        </Flex>
                    </Flex>
                    <Text>I had a great time.
                            </Text>
                    <Flex m={'5px 0px'} w={'max-content'} p={'0px 5px'} border={'1px solid gray'} gap={'2px'} rounded={'md'} alignItems={'center'}>
                        <IoMdThumbsUp  color='gray'/>
                        <Text fontSize={'small'}>Helpful</Text>
                    </Flex>
                </Flex>
                <Flex p={'10px 0px '} direction={'column'}  rounded={'lg'}  >
                    <Flex   p={'5px 0px'}   gap={'5px'}>
                       <Flex    pr={'5px'}> 
                        <Box w={'50px'} h={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontWeight={'500'} rounded={'full'} bg={'#E5E4E7'}>J</Box>
                       </Flex>
                        <Flex h={'100%'} direction={'column'}>
                            <Text fontWeight={'600'}>John</Text>
                            <Flex gap={'5px'} alignItems={'center'}>
                                <IoStarOutline/>
                                <Text>4 ratings</Text>
                                <BiMessage/>
                                <Text>12 reviews</Text>
                        </Flex>
                            <Flex gap={'5px'} alignItems={'center'}>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <StarIcon boxSize={3} color={'#FEC020'}/>
                                <Text>23 hours ago</Text>
                            </Flex>
                            

                        </Flex>
                    </Flex>
                    <Text>We always have a great time at Bowlero! And you can't beat the groupon deals! Best family nights
                            </Text>
                    <Flex m={'5px 0px'} w={'max-content'} p={'0px 5px'} border={'1px solid gray'} gap={'2px'} rounded={'md'} alignItems={'center'}>
                        <IoMdThumbsUp   color='gray'/>
                        <Text fontSize={'small'}>Helpful</Text>
                    </Flex>
                </Flex>

                <Text fontSize={'xl'} fontWeight={'600'} p={'10px 0px'}>Customer Photos</Text>
                <Flex gap={'10px'} p={'5px 0px'}>
                    <Flex backgroundImage={'url(https://img.grouponcdn.com/ugc/JXwZLWc9iiK54LW4RF6wKkWver6/JX-5712x4284/v1/sc175x175.webp)'} h={'100px'} w={'100px'} backgroundSize={'cover'} rounded={'md'}></Flex>
                    <Flex backgroundImage={'url(https://img.grouponcdn.com/ugc/3Lv1NRi6gTrF9PcKndfCdurkykN5/3L-4032x3024/v1/sc175x175.webp)'} h={'100px'} w={'100px'} backgroundSize={'cover'} rounded={'md'}></Flex>
                    <Flex backgroundImage={'url(https://img.grouponcdn.com/ugc/2SycSXatQHngEePS2tZ7bTPPAUcy/2S-4032x3024/v1/sc175x175.webp)'} h={'100px'} w={'100px'} backgroundSize={'cover'} rounded={'md'}></Flex>
                    <Flex backgroundImage={'url(https://img.grouponcdn.com/ugc/3MeRM8AModKvWsx1GrTcE7jZrUU5/3M-750x1334/v1/sc175x175.webp)'} h={'100px'} w={'100px'} backgroundSize={'cover'} rounded={'md'}></Flex>
                </Flex>


            </Flex>

            <Flex w={['90%','90%','50%','40%']}   h={'max-content'}>

            <PriceAndAddToCartSection productFetched={productFetched} />
            </Flex>
        </Flex>

        <Flex w={'80%'} mt={'40px'} p={'10px'} >
          <Text fontSize={'x-large'} fontWeight={'700'}>Similar deals</Text>
        </Flex>
        <Flex w={'85%'}   >
        <MySlider sliderData={similarDealsData}  />
        </Flex>

        <Flex w={'80%'} mt={'40px'} p={'10px'} >
          <Text fontSize={'x-large'} fontWeight={'700'}>Similar deals</Text>
        </Flex>
        <Flex w={'85%'}   >
        <MySlider sliderData={recommendedDealsData}/>
        </Flex>


      
    </Flex>
  )
}

export default SingleProductDetailsPage
