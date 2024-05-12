import { Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import StarRating from '../homepage/StarRating';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineTag } from "react-icons/ai";


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import medalImg from '../../images/logos/medal.svg'

import ThumbnailsExample from './ThumbnailsExample';

const SingleProductDetailsPage = () => {
    const params = useParams();
    const {productUrl} = params;

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

    
 
    const allSlides =[
        { id: 1,
          imgUrl:'https://www.reliancedigital.in/medias/Reliance-Audio-Summer-Sale-1365x260-B.jpg?context=bWFzdGVyfGltYWdlc3wxODYwNTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDhlL2gyOC8xMDEzOTk3ODgyNTc1OC5qcGd8Y2JlMzgxZWFkOWE4NGYyOWU2YTYzZWM3MWRjZTQxYjA3YTM0ODcwMzFhZmE1MWFjYTFmMmIyMzAxZGFkMGU1Mw'
        },
        { id: 2,
          imgUrl:'https://www.reliancedigital.in/medias/Great-deals-on-the-Newest-ACs-banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjU3MTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDFmL2hhZC8xMDEyOTU4MjUyMjM5OC5qcGd8MjQyZDdjZjdjOWQ4ZjgwODNiOTVkYjU5ODZlZjE0YTE5MWJkYWViMjdkMzhiZDcyY2E3MjIwY2ExYzIwNjJkZA'
        },
        { id: 4,
          imgUrl:'https://www.reliancedigital.in/medias/Reliance-Audio-Summer-Sale-1365x260-B.jpg?context=bWFzdGVyfGltYWdlc3wxODYwNTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDhlL2gyOC8xMDEzOTk3ODgyNTc1OC5qcGd8Y2JlMzgxZWFkOWE4NGYyOWU2YTYzZWM3MWRjZTQxYjA3YTM0ODcwMzFhZmE1MWFjYTFmMmIyMzAxZGFkMGU1Mw'
        },
        { id: 5,
          imgUrl:'https://www.reliancedigital.in/medias/Great-deals-on-the-Newest-ACs-banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjU3MTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDFmL2hhZC8xMDEyOTU4MjUyMjM5OC5qcGd8MjQyZDdjZjdjOWQ4ZjgwODNiOTVkYjU5ODZlZjE0YTE5MWJkYWViMjdkMzhiZDcyY2E3MjIwY2ExYzIwNjJkZA'
        }
      ]

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

        <Flex w={'80%'} direction={['column','column','column','row']}>
            <Flex w={'60%'} bg={'green'}>
                <ThumbnailsExample />
            </Flex>

            <Flex w={'40%'} bg={'red'}>a</Flex>
        </Flex>



      <Flex w={'80%'} gap={'10px'} direction={'column'}>
            <Flex>{productTitle}</Flex>
            <Flex>{productStreet}, {productCity}</Flex>
            <Flex>{gallery_title}</Flex>
            <Flex>
                <Text>{rating}</Text>
                <StarRating  ratingPoints={rating}/>
                <Text>{rating_count}</Text>
                <Text>Groupon Ratings</Text>
            </Flex>
            <Flex gap={'10px'}>
            <Text>{productTitle}</Text>
            <Text>${price}</Text>
            <Text>${value}</Text>
            <Text>{discount}%</Text>
            <Text>{purchases_total_displayed}+ bought</Text>
        </Flex>

            
            <Flex gap={'10px'}>
                <Text>{subProduct_title}</Text>
                <Text>${subProduct_price}</Text>
                <Text>${subProduct_value}</Text>
                <Text>{subProduct_discount}%</Text>
                <Text>{purchases_total_displayed}+ bought</Text>

            </Flex>


      </Flex>
    </Flex>
  )
}

export default SingleProductDetailsPage
