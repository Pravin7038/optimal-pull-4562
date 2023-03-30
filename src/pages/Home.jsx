import { Box, Image, SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ProductSlider from "../components/ProductSlider"
import BannerSlider from "../components/BannerSlider"
const Home = () => {

    return (
        <Box width="100%" margin="auto" marginLeft="1%">
            <Box margin="auto" width="80%" marginTop="20px">
                <Link>
                    <Image width="100%" src="https://belk.scene7.com/is/image/Belk/wk09_2023_brplus_loyaltyweek_fh1?$DWP_PHOTO$"></Image></Link>
                <Link>
                    <Image width="100%" src="https://belk.scene7.com/is/image/Belk/wk09_2023_spec_loyalty_nad_fh1?$DWP_PHOTO$"></Image>
                </Link>

            </Box>
            {/* <Box margin="auto" width="80%" marginTop="20px">
                <Image width="100%" src="https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh4_carl?$DWP_PHOTO$"></Image>
            </Box> */}
            {<BannerSlider/>}
            <Box margin="auto" width="80%" marginTop="20px">
                <Link>
                    <Image width="100%" src="https://belk.scene7.com/is/image/Belk/wk09_032723_hp_fh1?$DWP_PHOTO$"></Image>
                </Link>
                <SimpleGrid columns="2">
                    <Link>
                        <Image width="100%" src="https://belk.scene7.com/is/image/Belk/wk09_032723_hp_2c1?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image width="100%" src="https://belk.scene7.com/is/image/Belk/wk09_032723_hp_2c2?$DWP_PHOTO$"></Image>
                    </Link>
                </SimpleGrid>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <Image src="https://belk.scene7.com/is/content/Belk/wk09_2023_lauder_gwp_hp"></Image>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <SimpleGrid columns="3">
                    <Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_weekday_deals_3c1?$DWP_PHOTO$"></Image>
                    <Image src="https://belk.scene7.com/is/content/Belk/wk09_2023_weekday_deals_3c2"></Image>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_weekday_deals_3c3?$DWP_PHOTO$"></Image>
                </SimpleGrid>
                <SimpleGrid columns="3">
                    <Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_weekday_deals_3c4?$DWP_PHOTO$"></Image>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_weekday_deals_3c5?$DWP_PHOTO$"></Image>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_weekday_deals_3c6?$DWP_PHOTO$"></Image>
                </SimpleGrid>
                <Image src="https://belk.scene7.com/is/image/Belk/disclaimer_fall2021_generic?$DWP_PHOTO$"></Image>

            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_fh?$DWP_PHOTO$"></Image>
                <SimpleGrid columns="6">
                    <Link><Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl1?$DWP_PHOTO$"></Image></Link>
                    <Link><Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl2?$DWP_PHOTO$"></Image></Link>
                    <Link><Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl3?$DWP_PHOTO$"></Image></Link>
                    <Link><Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl4?$DWP_PHOTO$"></Image></Link>
                    <Link><Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl5?$DWP_PHOTO$"></Image></Link>
                    <Link><Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl6?$DWP_PHOTO$"></Image></Link>
                </SimpleGrid>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <Link>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk09_spec_golf_shop_hp_fh1?$DWP_PHOTO$"></Image>
                </Link>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <Link>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk02_2023_spec_levi_nse_all_hp?$DWP_PHOTO$"></Image>
                </Link>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <Link>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk09_2023_women_fashion_moment_hp_fh_1?$DWP_PHOTO$"></Image>
                </Link>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <Link>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk09_032623_hp_hey_dude_fh?$DWP_PHOTO$"></Image>
                </Link>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <Link>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk08_2023_online_exclusive_hp_fh_1?$DWP_PHOTO$"></Image>
                </Link>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <SimpleGrid columns="2">
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk08_2023_promshop_hp_2c1?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_2023_trendedit_2c2_right?$DWP_PHOTO$"></Image>
                    </Link>
                </SimpleGrid>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <Link>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk07_031323_hp_fh1?$DWP_PHOTO$"></Image>
                </Link>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <SimpleGrid columns="4">
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c1?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c2?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c3?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c4?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c5?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c10?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c11?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c12?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c13?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c14?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c15?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c16?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c5?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c6?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c7?$DWP_PHOTO$"></Image>
                    </Link>
                    <Link>
                        <Image src="https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c8?$DWP_PHOTO$"></Image>
                    </Link>
                </SimpleGrid>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <Link>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk04_2023_brplus_loyalty_clearance_hp?$DWP_PHOTO$"></Image>
                </Link>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <Link>
                    <Image width="100%" src="https://belk.scene7.com/is/image/Belk/wk36_2022_spec_clearance_bopis_ch_fh1?$DWP_PHOTO$"></Image>
                </Link>
            </Box>
            <Box margin="auto" width="80%" marginTop="20px">
                <SimpleGrid columns="4" width="100%">
                    <Link><Image  src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_1?$DWP_PHOTO$"></Image></Link>
                    <Link><Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_2?$DWP_PHOTO$"></Image></Link>
                    <Link><Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_3?$DWP_PHOTO$"></Image></Link>
                    <Link><Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_4?$DWP_PHOTO$"></Image></Link>

                </SimpleGrid>
            </Box>
            <Box>
                {/* //Just for you */}
                {<ProductSlider/>}
            </Box>
        </Box>

    )
}

export default Home