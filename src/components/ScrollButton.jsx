import { Flex, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {GrLinkTop} from "react-icons/gr"

function ScrollButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollButton && (
        <Button
          onClick={handleScrollTop}
          width="4%"
          right="50"
          bottom="60"
          height="7%"
          position="fixed"
          backgroundColor="#D4D4D4"
          borderRadius="100%"
        >
          <GrLinkTop size="30px" height="20px" />
        </Button>
      )}
    </>
  );
}

export default ScrollButton;
