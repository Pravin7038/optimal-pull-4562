import { Image, Input, Box, Container, HStack, Center, Flex, Divider,Heading, SimpleGrid,Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import { GiWantedReward } from "react-icons/gi"
import { CiBadgeDollar } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {useState} from "react"
import Footer from './Footer';
// import {
//     useDisclosure,
// } from "@chakra-ui/react"
const Navbar = () => {
    const [giftState,setGiftState] = useState(false)
    const [womenState,setWomenState] = useState(false)
    const [MenState,setMenState] = useState(false)
    const [kidsState,setKidsState] = useState(false)
    const [shoesState,setShoesState] = useState(false)
    const [handbagsState,setHandbagsState] = useState(false)
    const [jewelryState,setJewelryState] = useState(false)
    const [beutyState,setBeutyState] = useState(false)
    const [homeState,setHomeState] = useState(false)
    const [bedState,setBedState] = useState(false)
    const [connsState,setConnsState] = useState(false)
    const [brandsState,setBrandsState] = useState(false)
    const [clearenceState,setClearenceState] = useState(false)
    
    return (
        <Container >
            {<Box fontFamily="font-family: Roboto,Arial,sans-serif" fontSize="15px" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingBottom="3px" textColor="#020202">
                <Box backgroundColor="#f5f5f5">
                <HStack margin="10px" marginLeft="13%">
                    <Link to="/">
                        <Image boxSize='60px'
                            objectFit='cover' src='https://cdn.worldvectorlogo.com/logos/insite-vision.svg' alt="err" ></Image>
                    </Link>
                    <Input variant='outline' border="1px solid black" borderRadius={4} placeholder='What can we help you find?' paddingLeft="10px" height="50px" width="50%" position="relative"/>
                    <SearchIcon w="23px" h ="23px"position="absolute" left="58%" color="#37474F"/>
                    <Divider orientation='vertical' />
                    <Flex justifyContent="space-around" width="25%">
                        <Center flexDirection="column" > <GiWantedReward size="30px" />Rewards</Center>
                        <Center flexDirection="column" > <CiBadgeDollar size="30px" />Coupons</Center>
                        <Center flexDirection="column" > <VscAccount size="30px" />My Account</Center>
                        <Box width="2px" backgroundColor="grey" ></Box>
                         <Center flexDirection="column"  > <IoBagOutline size="30px" />Bag</Center>
                    </Flex>

                </HStack>
                </Box>
                
                <HStack margin="15px" marginLeft="13%" justifyContent="space-between" width="55%" position="relative" >
                    <Link to="/gifts"  onMouseEnter={()=>setGiftState(true)} onMouseLeave={()=>setGiftState(false)} transition="1s">
                        Gifts
                    </Link>
                    {
                        giftState ?  <Box onMouseEnter={()=>setGiftState(true)} onMouseLeave={()=>setGiftState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                   <Link to="/women"  onMouseEnter={()=>setWomenState(true)} onMouseLeave={()=>setWomenState(false)} transition="1s">
                   Women
                    </Link>
                    {
                        womenState ?  <Box onMouseEnter={()=>setWomenState(true)} onMouseLeave={()=>setWomenState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/men"  onMouseEnter={()=>setMenState(true)} onMouseLeave={()=>setMenState(false)} transition="1s">
                   Men
                    </Link>
                    {
                        MenState ?  <Box onMouseEnter={()=>setMenState(true)} onMouseLeave={()=>setMenState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/kids"  onMouseEnter={()=>setKidsState(true)} onMouseLeave={()=>setKidsState(false)} transition="1s">
                   Kids
                    </Link>
                    {
                        kidsState ?  <Box onMouseEnter={()=>setKidsState(true)} onMouseLeave={()=>setKidsState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/shoes"  onMouseEnter={()=>setShoesState(true)} onMouseLeave={()=>setShoesState(false)} transition="1s">
                   Shoes
                    </Link>
                    {
                        shoesState ?  <Box onMouseEnter={()=>setShoesState(true)} onMouseLeave={()=>setShoesState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/handbags"  onMouseEnter={()=>setHandbagsState(true)} onMouseLeave={()=>setHandbagsState(false)} transition="1s">
                   Handbags
                    </Link>
                    {
                        handbagsState ?  <Box onMouseEnter={()=>setHandbagsState(true)} onMouseLeave={()=>setHandbagsState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/jewelry"  onMouseEnter={()=>setJewelryState(true)} onMouseLeave={()=>setJewelryState(false)} transition="1s">
                   Jewelry
                    </Link>
                    {
                        jewelryState ?  <Box onMouseEnter={()=>setJewelryState(true)} onMouseLeave={()=>setJewelryState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/beuty"  onMouseEnter={()=>setBeutyState(true)} onMouseLeave={()=>setBeutyState(false)} transition="1s">
                   Beuty
                    </Link>
                    {
                        beutyState ?  <Box onMouseEnter={()=>setBeutyState(true)} onMouseLeave={()=>setBeutyState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                           <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/home"  onMouseEnter={()=>setHomeState(true)} onMouseLeave={()=>setHomeState(false)} transition="1s">
                   Home
                    </Link>
                    {
                        homeState ?  <Box onMouseEnter={()=>setHomeState(true)} onMouseLeave={()=>setHomeState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/bed&bath"  onMouseEnter={()=>setBedState(true)} onMouseLeave={()=>setBedState(false)} transition="1s">
                   Bed & Bath
                    </Link>
                    {
                        bedState ?  <Box onMouseEnter={()=>setBedState(true)} onMouseLeave={()=>setBedState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/Conn'sxBelk"  onMouseEnter={()=>setConnsState(true)} onMouseLeave={()=>setConnsState(false)} transition="1s">
                   Conn's x Belk
                    </Link>
                    {
                        connsState ?  <Box onMouseEnter={()=>setConnsState(true)} onMouseLeave={()=>setConnsState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/brands"  onMouseEnter={()=>setBrandsState(true)} onMouseLeave={()=>setBrandsState(false)} transition="1s">
                   Brands
                    </Link>
                    {
                         brandsState ?  <Box onMouseEnter={()=>setBrandsState(true)} onMouseLeave={()=>setBrandsState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    <Link to="/clearence"  onMouseEnter={()=>setClearenceState(true)} onMouseLeave={()=>setClearenceState(false)} transition="1s" >
                   <Text color = "red">Clearance</Text>
                    </Link>
                    {
                        clearenceState ?  <Box onMouseEnter={()=>setClearenceState(true)} onMouseLeave={()=>setClearenceState(false)}  position = "absolute" top="110%" width="160%"  left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                            <SimpleGrid columns="4"  gap="20px" >
                                <Box backgroundColor="#f5f5f5"  textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                    <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                    <Box lineHeight="30px" marginLeft="8px" >
                                    <Link to="">Beauty Gifts</Link>
                                    <br/>
                                    <Link to="">Cozy Shop</Link>
                                    <br/>
                                    <Link to="">Designer Handbags</Link>
                                    <br/>
                                    <Link to="">Eco Friendly</Link>
                                    <br/>
                                    <Link to="">Fine Jewelry</Link>
                                    <br/>
                                    <Link to="">For the Trend Setter</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Gifts with a Purpose</Link>
                                    <br/>
                                    <Link to="">Intimates</Link>
                                    </Box>
                                    
                                  
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">All Gifts</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box   lineHeight="30px">
                                    <Link to="" margin="none">Gifts for Her</Link>
                                    
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                <Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box  lineHeight="30px">
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                                <Box  textAlign="left"><Heading fontWeight="bolder" fontSize = "20px" marginBottom="15px">Gifts by Price</Heading>
                                <Box lineHeight="30px" >
                                <Link to="">Gifts for Her</Link>
                                    <br/>
                                    <Link to="">Gifts for Him</Link>
                                    <br/>
                                    <Link to="">Gifts for Kids</Link>
                                    <br/>
                                    <Link to="">Gifts for Pets</Link>
                                    <br/>
                                    <Link to="">Gifts for the Home</Link>
                                    <br/>
                                    <Link to="">Gift Cards</Link>
                                    <br/>
                                    <Link to="">Shop All...</Link>
                                    
                                </Box>
                                </Box>
                            </SimpleGrid>
                            </Box>
                        
                    </Box> :null
                    }
                    
                </HStack>

            </Box>}
            {giftState|| womenState || MenState || kidsState || shoesState || handbagsState || jewelryState || beutyState || homeState || bedState || connsState || brandsState || clearenceState? null : <Box>
                <Box></Box>
                <Footer/>
            </Box>}
            
        </Container>
    )
}

export default Navbar;