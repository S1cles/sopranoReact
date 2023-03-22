import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import errorImg from '../img/error.png'
const NF = () => {
  return (
    <Box
      mt={"10vw"}
      textAlign={"center"}
      fontFamily={"Bolkit"}
      fontSize={"xxx-large"}
      p={10}
      justifyContent={'center'}
    >
      <Img src={errorImg} margin={'0 auto'} />
      <Text> Sorry, page not found</Text>
    </Box>
  );
};

export default NF;
