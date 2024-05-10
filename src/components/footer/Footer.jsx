import { Box, Button, Flex, IconButton, Image, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { footerLinks } from '../../data/footerlinks'
import f_logo_one from '../../images/logos/f_logo_one.png'
import qe_code from '../../images/logos/qr_code.png'
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { BiRightArrow } from 'react-icons/bi'
import { ChevronRightIcon } from '@chakra-ui/icons'


const Footer = () => {

  const footerLinks_column_one = footerLinks.filter(footerLinks=>footerLinks.category === 'Customer support');
  const footerLinks_column_two = footerLinks.filter(footerLinks=>footerLinks.category === 'Sell On Groupon');
  const footerLinks_column_three = footerLinks.filter(footerLinks=>footerLinks.category === 'Company');
  const footerLinks_column_four = footerLinks.filter(footerLinks=>footerLinks.category === 'Quick Links');

  return (
    <Flex w={'100%'}  p={'20px 0px'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
      <Flex bg={'#230F33'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Flex w={'90%'} justifyContent={'center'} alignItems={'start'} p={'30px 0px'}>
            <Flex w={'30%'}   direction={'column'} alignItems={'start'}   justifyContent={'start'} pl={'30px'} gap={'25px'} >
                <Button variant={'link'} p={'10px 15px '} color={'white'} _hover={{textDecoration:'underline',textUnderlineOffset:'5px'}} border={'1px solid white'}>Help Center</Button>
                {
                  footerLinks_column_one.map((item)=>(
                    <Text color={'white'} cursor={'pointer'} _hover={{textDecoration:'underline',textUnderlineOffset:'5px'}}>{item.linkName}</Text>
                  ))
                }
            </Flex>
            <Flex w={'70%'}  >
                <Flex w={'30%'}   direction={'column'} alignItems={'start'} pl={'30px'} gap={'25px'} borderLeft={'1px solid lightgray'}>
                    <Text variant={'link'} p={'10px 0px '} fontWeight={'700'} color={'white'} _hover={{textDecoration:'underline',textUnderlineOffset:'5px'}} >Sell on Groupon</Text>
                    {
                      footerLinks_column_two.map((item)=>(
                        <Text color={'white'} cursor={'pointer'} _hover={{textDecoration:'underline',textUnderlineOffset:'5px'}}>{item.linkName}</Text>
                      ))
                    }
                </Flex>
                <Flex w={'30%'}   direction={'column'} alignItems={'start'} pl={'30px'} gap={'25px'}>
                <Text variant={'link'} p={'10px 0px '} fontWeight={'700'} color={'white'} _hover={{textDecoration:'underline',textUnderlineOffset:'5px'}} >Company</Text>
                {
                      footerLinks_column_three.map((item)=>(
                        <Text color={'white'} cursor={'pointer'} _hover={{textDecoration:'underline',textUnderlineOffset:'5px'}}>{item.linkName}</Text>
                      ))
                    }
                </Flex>
                <Flex w={'30%'}   direction={'column'} alignItems={'start'} pl={'30px'} gap={'25px'}>
                <Text variant={'link'} p={'10px 0px '} fontWeight={'700'} color={'white'} _hover={{textDecoration:'underline',textUnderlineOffset:'5px'}} >Quick Links</Text>
                {
                    footerLinks_column_four.map((item)=>(
                      <Text color={'white'} cursor={'pointer'} _hover={{textDecoration:'underline',textUnderlineOffset:'5px'}}>{item.linkName} +</Text>
                    ))
                  }
              </Flex>
            </Flex>
            </Flex>
      </Flex>
      <Flex w={'100%'} bg={'#F8F7FA'} justifyContent={'center'} alignItems={'center'} p={'30px 0px'}>
      <Flex  w={'80%'}  justifyContent={'center'} alignItems={'start'}>
      <Flex w={'100%'} justifyContent={'center'} alignItems={'start'} direction={'column'} padding={'20px '} gap={'20px'}>
                <Text fontSize={'lg'} fontWeight={'700'}>Follow Us</Text>
                <Flex justifyContent={'center'} alignItems={'baseline'} gap={'10px'}>
                  <Image src={f_logo_one}/>
                  <FaFacebook size={'22px'} />
                  <GrInstagram size={'22px'} />
                  <FaTwitter size={'22px'} />
                </Flex>
      </Flex>
      <Flex w={'100%'} justifyContent={'center'} alignItems={'start'} direction={'column'} padding={'20px '} gap={'20px'}>
              <Text fontSize={'lg'} fontWeight={'700'}>Groupon Sites                </Text>
              <Flex justifyContent={'center'} alignItems={'baseline'} gap={'10px'}>
                  <Select placeholder='USA'>
                  <option value='option1'>USA</option>
                  <option value='option2'>United Kingdom </option>
                  <option value='option2'>France </option>
                  <option value='option2'>Deutchland</option>
                  <option value='option2'>Italia </option>
                  <option value='option3'>Espana</option>
                  <option value='option3'>Polska</option>
                  <option value='option3'>Nederland</option>
                  <option value='option3'>Ireland</option>
                  <option value='option3'>UAE</option>
                  <option value='option3'>Canada</option>
                  <option value='option2'>Australia</option>

                </Select>
              </Flex>
      </Flex> 
      <Flex w={'100%'} justifyContent={'start'} alignItems={'start'} direction={'column'} padding={'20px '} gap={'20px'}>
              <Text fontSize={'lg'} fontWeight={'700'}>Scan for the Groupon App</Text>
              <Flex justifyContent={'center'} alignItems={'start'} gap={'10px'}>
                <Image src={qe_code}/>
                <Button variant={'link'} p={'10px 15px '} color={'black'} _hover={{textDecoration:'underline',textUnderlineOffset:'5px'}} border={'1px solid gray'}>Learn More</Button>

              </Flex>
      </Flex>
      <Flex w={'100%'} justifyContent={'center'} alignItems={'start'} direction={'column'} padding={'20px '} gap={'20px'}>
            <Text fontSize={'lg'} fontWeight={'700'}>Sign up for the latest deals              </Text>
            <Flex justifyContent={'center'} alignItems={'start'} gap={'0px'} direction={'column'}>
                <Flex justifyContent={'center'} alignItems={'start'} gap={'10px'}  >
                <Input placeholder='Email Address' border={'1px solid gray'}/>
                <Box>
                  <IconButton
                  variant={'ghost'}
                  bg={'transparent'}
                  _hover={{bg:'transparent !important'}} 
                  border={'1px solid gray'}
                  icon={<ChevronRightIcon/>}
                  />
                </Box>
                </Flex>
                <Text pt={'10px'} fontSize={'small'}>By subscribing, I agree to the Terms of Use</Text>
                <Text fontSize={'small'}> and have read the Privacy Statement.
                </Text>
            </Flex>
    </Flex>
    </Flex>
      </Flex>

      <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} p={'30px 0px'} pb={'10px'}>
                <Flex w={'80%'}>
                    <Text>© 2024 Groupon, Inc. All Rights Reserved.</Text>
                    <Flex gap={'5px'} cursor={'pointer'} >
                      <Text _hover={{textDecoration:'underline'}}>Terms of Use |</Text>
                      <Text _hover={{textDecoration:'underline'}}>Privacy Policy |</Text>
                      <Text _hover={{textDecoration:'underline'}}>Interest-Based Ads |</Text>
                      <Text _hover={{textDecoration:'underline'}}>Licenses |</Text>
                      <Text _hover={{textDecoration:'underline'}}>Accessibility |</Text>
                      <Text _hover={{textDecoration:'underline'}}>Do Not Sell or Share My Personal Information |</Text>
                      <Text _hover={{textDecoration:'underline'}}>Sitemap</Text>
                    </Flex>
                </Flex>
      </Flex>

    </Flex>
  )
}

export default Footer
