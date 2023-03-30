import { useState } from "react";
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
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=7100802_74323HOH5004CA_A_001&$DWP_PRODUCT_REC_DESKTOP$",
    price: 130.00,
  },
  {
    id: 2,
    name: "Crown & Ivy™ Women's Balloon Sleeve Printed Shirtdress",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=1804597_1559CI_A_183&$DWP_PRODUCT_REC_DESKTOP$",
    price: 12.99,
  },
  {
    id: 3,
    name: "Crown & Ivy™ Women's Puff Sleeve Ruffled V-Neck Midi Dress",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=1804532_72623SPD000069_A_579&$DWP_PRODUCT_REC_DESKTOP$",
    price: 39.99,
  },
  {
    id: 4,
    name: "Belk & Co 1/2 Ct. T.w. Round Cut Diamond Stud Earrings In 14K White Gold",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=5400453_BX75783W_A_100&$DWP_PRODUCT_REC_DESKTOP$",
    price: 767.99,
  },
  {
    id: 5,
    name: "Crown & Ivy™ Women's Puff Sleeve Ruffled V-Neck Midi Dress",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=1804535_72624SPD000003_A_674&$DWP_PRODUCT_REC_DESKTOP$",
    price: 55.99,
  },
  {
    id: 6,
   name: "Biltmore® Hotel Collection Sheet Set",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=9200490_74523YR0000302_A_074&$DWP_PRODUCT_REC_DESKTOP$",
    price: 100.00,
  },
  {
    id: 7,
    name: "Modern. Southern. Home.™ Heated Mircroplush Throw Blanket",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=7100802_74323HOH5004CA_A_001&$DWP_PRODUCT_REC_DESKTOP$",
    price: 130.00,
  },
  {
    id: 8,
    name: "Crown & Ivy™ Women's Balloon Sleeve Printed Shirtdress",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=1804597_1559CI_A_183&$DWP_PRODUCT_REC_DESKTOP$",
    price: 12.99,
  },
  {
    id: 9,
    name: "Crown & Ivy™ Women's Puff Sleeve Ruffled V-Neck Midi Dress",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=1804532_72623SPD000069_A_579&$DWP_PRODUCT_REC_DESKTOP$",
    price: 39.99,
  },
  {
    id: 10,
    name: "Belk & Co 1/2 Ct. T.w. Round Cut Diamond Stud Earrings In 14K White Gold",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=5400453_BX75783W_A_100&$DWP_PRODUCT_REC_DESKTOP$",
    price: 767.99,
  },
  {
    id: 11,
    name: "Crown & Ivy™ Women's Puff Sleeve Ruffled V-Neck Midi Dress",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=1804535_72624SPD000003_A_674&$DWP_PRODUCT_REC_DESKTOP$",
    price: 55.99,
  },
  {
    id: 12,
   name: "Biltmore® Hotel Collection Sheet Set",
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=9200490_74523YR0000302_A_074&$DWP_PRODUCT_REC_DESKTOP$",
    price: 100.00,
  }
];

const ProductCard = ({ product }) => {
  return (
    <Box w="full" maxW="200px" overflow="hidden" margin="10px">
      <Box border="1px solid lightgrey">
        <Image width="100%" height="300px"  src={`${product.image}`}></Image>
      </Box>
      <Box p="4">
        <Text fontSize="15px" mb="2" textAlign="left">{product.name}</Text>
        <Text textAlign="left" fontWeight="bold" color="red">${product.price.toFixed(2)}</Text>
      </Box>
    </Box>
  );
};

const ProductSlider = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % products.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
       currentSlide - 1
    );
  };

  const firstIndex = currentSlide;
  const lastIndex = currentSlide + 5 >= products.length ? products.length - 1 : currentSlide + 5;

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
          icon={<ChevronLeftIcon boxSize="40px" backgroundColor="white" border=" thin solid #ddd"/>}
          position="absolute"
          top="35%"
          left="13px"
          transform="translateY(-50%)"
          onClick={handlePrevSlide}
        />}
        {currentSlide===products.length-6 ? null :<IconButton
          aria-label="Next Slide"
          icon={<ChevronRightIcon boxSize="40px" border=" thin solid #ddd"/>}
          position="absolute"
          top="35%"
          right="13px"
          transform="translateY(-50%)"
          onClick={handleNextSlide}
        />}
        
      </Flex>
      </Box>
      )
   }

   export default ProductSlider