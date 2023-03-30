import { Image, Input, Box, Container, HStack, Center, Flex, Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import { GiWantedReward } from "react-icons/gi"
import { CiBadgeDollar } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = (setGiftState) => {
   
    return (
        <Container >
            {<Box fontFamily="font-family: Roboto,Arial,sans-serif" fontSize="15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingBottom="3px" textColor="#020202">
                <Box backgroundColor="#f5f5f5" >
                    <HStack margin="10px" marginLeft="10%" width="100%">
                        <Link to="/">
                            <Image boxSize='60px'
                                objectFit='cover' src='https://cdn.worldvectorlogo.com/logos/insite-vision.svg' alt="err" ></Image>
                        </Link>
                        <Input variant='outline' border="1px solid black" borderRadius={4} placeholder='What can we help you find?' paddingLeft="10px" height="50px" width="50%" position="relative" />
                        <SearchIcon w="23px" h="23px" position="absolute" left="61.5%" color="#37474F" />
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

                <HStack margin="15px" marginLeft="10%" justifyContent="space-between" width="55%" position="relative" >
                    <Link to="/gifts" onMouseEnter={() => setGiftState.setGiftState(true)} onMouseLeave={() => setGiftState.setGiftState(false)} transition="1s">
                        Gifts
                    </Link>
                    {
                        setGiftState.giftState ? <Box onMouseEnter={() => setGiftState.setGiftState(true)} onMouseLeave={() => setGiftState.setGiftState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/women" onMouseEnter={() => setGiftState.setWomenState(true)} onMouseLeave={() => setGiftState.setWomenState(false)} transition="1s">
                        Women
                    </Link>
                    {
                        setGiftState.womenState ? <Box onMouseEnter={() => setGiftState.setWomenState(true)} onMouseLeave={() => setGiftState.setWomenState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/men" onMouseEnter={() => setGiftState.setMenState(true)} onMouseLeave={() => setGiftState.setMenState(false)} transition="1s">
                        Men
                    </Link>
                    {
                        setGiftState.MenState ? <Box onMouseEnter={() => setGiftState.setMenState(true)} onMouseLeave={() => setGiftState.setMenState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/kids" onMouseEnter={() => setGiftState.setKidsState(true)} onMouseLeave={() => setGiftState.setKidsState(false)} transition="1s">
                        Kids
                    </Link>
                    {
                        setGiftState.kidsState ? <Box onMouseEnter={() => setGiftState.setKidsState(true)} onMouseLeave={() => setGiftState.setKidsState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/shoes" onMouseEnter={() => setGiftState.setShoesState(true)} onMouseLeave={() => setGiftState.setShoesState(false)} transition="1s">
                        Shoes
                    </Link>
                    {
                        setGiftState.shoesState ? <Box onMouseEnter={() => setGiftState.setShoesState(true)} onMouseLeave={() => setGiftState.setShoesState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/handbags" onMouseEnter={() => setGiftState.setHandbagsState(true)} onMouseLeave={() => setGiftState.setHandbagsState(false)} transition="1s">
                        Handbags
                    </Link>
                    {
                        setGiftState.handbagsState ? <Box onMouseEnter={() => setGiftState.setHandbagsState(true)} onMouseLeave={() => setGiftState.setHandbagsState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/jewelry" onMouseEnter={() => setGiftState.setJewelryState(true)} onMouseLeave={() => setGiftState.setJewelryState(false)} transition="1s">
                        Jewelry
                    </Link>
                    {
                        setGiftState.jewelryState ? <Box onMouseEnter={() => setGiftState.setJewelryState(true)} onMouseLeave={() => setGiftState.setJewelryState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/beuty" onMouseEnter={() => setGiftState.setBeutyState(true)} onMouseLeave={() => setGiftState.setBeutyState(false)} transition="1s">
                        Beuty
                    </Link>
                    {
                        setGiftState.beutyState ? <Box onMouseEnter={() => setGiftState.setBeutyState(true)} onMouseLeave={() => setGiftState.setBeutyState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/home" onMouseEnter={() => setGiftState.setHomeState(true)} onMouseLeave={() => setGiftState.setHomeState(false)} transition="1s">
                        Home
                    </Link>
                    {
                        setGiftState.homeState ? <Box onMouseEnter={() => setGiftState.setHomeState(true)} onMouseLeave={() => setGiftState.setHomeState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/bed&bath" onMouseEnter={() => setGiftState.setBedState(true)} onMouseLeave={() => setGiftState.setBedState(false)} transition="1s">
                        Bed & Bath
                    </Link>
                    {
                        setGiftState.bedState ? <Box onMouseEnter={() => setGiftState.setBedState(true)} onMouseLeave={() => setGiftState.setBedState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/Conn'sxBelk" onMouseEnter={() => setGiftState.setConnsState(true)} onMouseLeave={() => setGiftState.setConnsState(false)} transition="1s">
                        Conn's x Belk
                    </Link>
                    {
                        setGiftState.connsState ? <Box onMouseEnter={() => setGiftState.setConnsState(true)} onMouseLeave={() => setGiftState.setConnsState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/brands" onMouseEnter={() => setGiftState.setBrandsState(true)} onMouseLeave={() => setGiftState.setBrandsState(false)} transition="1s">
                        Brands
                    </Link>
                    {
                        setGiftState.brandsState ? <Box onMouseEnter={() => setGiftState.setBrandsState(true)} onMouseLeave={() => setGiftState.setBrandsState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }
                    <Link to="/clearence" onMouseEnter={() => setGiftState.setClearenceState(true)} onMouseLeave={() => setGiftState.setClearenceState(false)} transition="1s" >
                        <Text color="red">Clearance</Text>
                    </Link>
                    {
                        setGiftState.clearenceState ? <Box onMouseEnter={() => setGiftState.setClearenceState(true)} onMouseLeave={() => setGiftState.setClearenceState(false)} position="absolute" top="110%" width="160%" left="-5%" paddingTop="2%">
                            <Box width="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" paddingTop="30px">
                                <SimpleGrid columns="4" gap="20px" >
                                    <Box backgroundColor="#f5f5f5" textAlign="left" paddingLeft="15px" marginLeft="15px" >
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" marginLeft="8px">Gifts</Heading>
                                        <Box lineHeight="30px" marginLeft="8px" >
                                            <Link to="">Beauty Gifts</Link>
                                            <br />
                                            <Link to="">Cozy Shop</Link>
                                            <br />
                                            <Link to="">Designer Handbags</Link>
                                            <br />
                                            <Link to="">Eco Friendly</Link>
                                            <br />
                                            <Link to="">Fine Jewelry</Link>
                                            <br />
                                            <Link to="">For the Trend Setter</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Gifts with a Purpose</Link>
                                            <br />
                                            <Link to="">Intimates</Link>
                                        </Box>


                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">All Gifts</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="" margin="none">Gifts for Her</Link>

                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                        <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px">
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                    <Box textAlign="left"><Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Gifts by Price</Heading>
                                        <Box lineHeight="30px" >
                                            <Link to="">Gifts for Her</Link>
                                            <br />
                                            <Link to="">Gifts for Him</Link>
                                            <br />
                                            <Link to="">Gifts for Kids</Link>
                                            <br />
                                            <Link to="">Gifts for Pets</Link>
                                            <br />
                                            <Link to="">Gifts for the Home</Link>
                                            <br />
                                            <Link to="">Gift Cards</Link>
                                            <br />
                                            <Link to="">Shop All</Link>

                                        </Box>
                                    </Box>
                                </SimpleGrid>
                            </Box>

                        </Box> : null
                    }

                </HStack>

            </Box>}


        </Container>
    )
}

export default Navbar;