import { useState,useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const products = [
  {
    id: 1,
    name: "Modern. Southern. Home.™ Heated Mircroplush Throw Blanket",
    image: "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh1_carl?$DWP_PHOTO$",
    price: 130.00,
  },
  {
    id: 2,
    name: "Crown & Ivy™ Women's Balloon Sleeve Printed Shirtdress",
    image: "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh2_carl?$DWP_PHOTO$",
    price: 12.99,
  },
  {
    id: 3,
    name: "Crown & Ivy™ Women's Puff Sleeve Ruffled V-Neck Midi Dress",
    image: "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh3_carl?$DWP_PHOTO$",
    price: 39.99,
  },
  {
    id: 4,
    name: "Belk & Co 1/2 Ct. T.w. Round Cut Diamond Stud Earrings In 14K White Gold",
    image: "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh4_carl?$DWP_PHOTO$",
    price: 767.99,
  },
];

const ProductCard = ({ product }) => {
  return (
    <Box  width="100%" overflow="hidden" margin="10px">
      <Box border="1px solid lightgrey" width="100%">
        <Image width="100%"  src={`${product.image}`}></Image>
      </Box>
    </Box>
  );
};

const BannerSlider = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % products.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide]);
  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % products.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
       currentSlide - 1
    );
  };

  const firstIndex = currentSlide;
  const lastIndex = currentSlide + 1 >= products.length ? products.length - 1 : currentSlide;

  return (
    <Box position="relative" w="full" maxW="80%" mx="auto" marginTop="30px">
      <Flex w="full" overflow="hidden">
        {products.slice(firstIndex, lastIndex + 1).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Flex>
      
      <Flex justify="space-between" mt="4">
      {currentSlide===0 ? null :<IconButton
          aria-label="Previous Slide"
          icon={<ChevronLeftIcon boxSize="60px" border=" thin solid #ddd"/>}
          position="absolute"
          top="50%"
          left="13px"
          transform="translateY(-50%)"
          onClick={handlePrevSlide}
        />}
        {currentSlide===products.length-6 ? null :<IconButton
          aria-label="Next Slide"
          icon={<ChevronRightIcon boxSize="60px" border=" thin solid #ddd" />}
          position="absolute"
          top="50%"
          right="13px"
          transform="translateY(-50%)"
          onClick={handleNextSlide}
        />}
        
      </Flex>
      </Box>
      )
   }

   export default BannerSlider