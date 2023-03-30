import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { useState } from "react"
import Footer from "../components/Footer"
const Home = () => {
    const [giftState, setGiftState] = useState(false)
    const [womenState, setWomenState] = useState(false)
    const [MenState, setMenState] = useState(false)
    const [kidsState, setKidsState] = useState(false)
    const [shoesState, setShoesState] = useState(false)
    const [handbagsState, setHandbagsState] = useState(false)
    const [jewelryState, setJewelryState] = useState(false)
    const [beutyState, setBeutyState] = useState(false)
    const [homeState, setHomeState] = useState(false)
    const [bedState, setBedState] = useState(false)
    const [connsState, setConnsState] = useState(false)
    const [brandsState, setBrandsState] = useState(false)
    const [clearenceState, setClearenceState] = useState(false)

    return (
        <Box boxSizing="border-box" width="100%" margin="auto" >
            <Navbar setGiftState={setGiftState}
                giftState={giftState}
                womenState={womenState}
                setWomenState={setWomenState} MenState={MenState} setMenState={setMenState} kidsState={kidsState}
                setKidsState={setKidsState} shoesState={shoesState} setShoesState={setShoesState} handbagsState={handbagsState}
                setHandbagsState={setHandbagsState} jewelryState={jewelryState} setJewelryState={setJewelryState} beutyState={beutyState}
                setBeutyState={setBeutyState} homeState={homeState} setHomeState={setHomeState} bedState={bedState}
                setBedState={setBedState} connsState={connsState} setConnsState={setConnsState} brandsState={brandsState}
                setBrandsState={setBrandsState} clearenceState={clearenceState} setClearenceState={setClearenceState}
            />
            {giftState || womenState || MenState || kidsState || shoesState || handbagsState || jewelryState || beutyState || homeState || bedState || connsState || brandsState || clearenceState ? null : <Box>
                <Box></Box>
                <Footer />
            </Box>}
        </Box>
    )
}

export default Home