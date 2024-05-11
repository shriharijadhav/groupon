import { Grid } from '@chakra-ui/react'
import React from 'react'
import SingleGridItem from './SingleGridItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HomepageGrid = () => {
    const homepage_all_data = useSelector((store)=>store.homepage_all_data);

    const modifiedUrl = (url)=>{
        const parts = url.split("/");
        const lastPart = parts[parts.length - 1];
        return (lastPart.trim());
    }
  return (
    <Grid w={'80%'} templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(4,1fr)']} gap={'20px'} p={'20px 0px'}>
        {
            homepage_all_data.map((item)=>(
                    <Link key={item.itemId} to={`/deals/${modifiedUrl(item.attributes.url)}`}>
                    <SingleGridItem key={item.itemId} product={item}/>
                </Link>
            ))
        }
       
    </Grid>
  )
}

export default HomepageGrid
