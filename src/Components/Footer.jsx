import React from "react";
import { Box, Container, Img, Text } from "@chakra-ui/react";
import Logo from "../img/logoPng.png";
import SizeBar from './SizeBar';
const Footer = () => {
  return (
    <Box textAlign={"center"}>
      <SizeBar />
      <Container maxWidth={"80vw"} color="black">
        <Box
          display={{ base: "block", lg: "flex" }}
          mt={100}
          mb={20}
          justifyContent={"space-between"}
          gap={10}
        >
          <hr style={{ border: "1px solid lightgray" }} />
          <Box flex={5}>
            <Img
              margin={"0 auto"}
              maxHeight={250}
              maxWidth={450}
              width={"100%"}
              height={"100%"}
              src={Logo}
            />
          </Box>

          <Box flex={6} fontSize={20} mt={10}>
            <Text fontWeight={"bold"}> Our main office:</Text>
            <Text> PARIS, FRANCE E-Mail: info@victoriasoprano.com</Text>
            <Text fontWeight={"bold"}>
              Customer service department in Poland l.:
            </Text>
            <Text>+38 099 304 40 45 E-Mail: europa@victoriasoprano.com</Text>

            <Text fontWeight={"bold"}>
              {" "}
              Customer service department in Ukraine,Russia el.:
            </Text>
            <Text>
              {" "}
              +38 067 383 50 77 l.: +38 093 630 14 14 EMail:
              victoria.soprano@mail.ru
            </Text>
            <Text fontWeight={"bold"}>
              {" "}
              Customer service department in Canada, USA
            </Text>
            <Text> EMail: canada@victoriasoprano.com victoriasoprano.com</Text>
          </Box>
        </Box>
      </Container>
      
    </Box>
  );
};

export default Footer;
