import { Box, Container, Flex, Heading, Image, } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { GrFacebook, GrTwitter, GrInstagram, GrPinterest } from "react-icons/gr"

const Footer = () => {

    return (
        <Container width="90%" margin="auto" fontFamily="font-family: Roboto,Arial,sans-serif" color="#020202">
            <Flex margin="15px" marginLeft="13%" justifyContent="space-between" width="80%" >
                <Box textAlign="left" paddingLeft="20px">
                    <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" >Gifts by Price</Heading>
                    <Box lineHeight="40px" >
                        <Link to="">Customer Service</Link>
                        <br />
                        <Link to="">Contact Us</Link>
                        <br />
                        <Link to="">Find my order</Link>
                        <br />
                        <Link to="">Returns and Refunds</Link>
                        <br />
                        <Link to="">Find a Store</Link>
                        <br />
                        <Link to="">Find a Registry</Link>
                        <br />
                        <Link to="">Find a Whish List</Link>
                        <br />
                        <Link to="">Shipping Information</Link>
                        <br />
                        <Link to="">Pickup and Delivery Optios</Link>
                        <br />
                        <Link to="">Policies and Guidelines</Link>
                        <br />
                        <Link to="">FAQs</Link>
                    </Box>
                </Box>
                <Box width="1px" backgroundColor="#7F8C8D" ></Box>
                <Box textAlign="left" >
                    <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" >FashinWear Rewards+ Credit Card</Heading>
                    <Box lineHeight="40px" >
                        <Link to="">Pay My Bill</Link>
                        <br />
                        <Link to="">Manage My Account</Link>
                        <br />
                        <Link to="">Find my order</Link>
                        <br />
                        <Link to="">FashinWear Rewards+ Credit Card Benefits</Link>

                    </Box>
                </Box>
                <Box width="1px" backgroundColor="#7F8C8D" ></Box>
                <Box textAlign="left">
                    <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px" >About FashionWear</Heading>
                    <Box lineHeight="40px" >
                        <Link to="">Careers</Link>
                        <br />
                        <Link to="">Catalog & Ads</Link>
                        <br />
                        <Link to="">Brands We Carry</Link>
                        <br />
                        <Link to="">Newsroom</Link>
                        <br />
                        <Link to="">Behind The Brand</Link>
                        <br />
                        <Link to="">Vendor Resourses</Link>
                        <br />
                        <Link to="">Store Events</Link>
                        <br />

                    </Box>
                </Box>
                <Box width="1px" backgroundColor="#7F8C8D" ></Box>
                <Box textAlign="left">
                    <Heading fontWeight="bolder" fontSize="20px" marginBottom="15px">Get The FashionWear App</Heading>
                    <Link >
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png" width="70%" ></Image>

                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/footer-app-ios-badge-2x?&$DWP_ARTWORK$" width="70%"></Image>
                    </Link>
                    <br />
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/footer-app-android-badge-2x?&$DWP_ARTWORK$" width="70%"></Image>
                    </Link>
                </Box>
            </Flex>
            <Flex justifyContent="center">
                <Box width="10%" margin="25px"><Link><Heading fontSize="20px" >Stay Connected</Heading></Link></Box>
                <Flex justifyContent="space-between" width="15%" margin="20px">
                    <Link color='red'><GrFacebook size="40px" /></Link>
                    <Link><GrTwitter size="40px" /></Link>
                    <Link><GrPinterest size="40px" /></Link>
                    <Link><GrInstagram size="40px" /></Link>

                </Flex>
            </Flex>
        </Container>


    )
}
export default Footer;