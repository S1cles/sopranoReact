import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useFetch } from "../Hook/useFetch";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [dresses, setDresses] = useState([]);
  const { isLoading, data, error } = useFetch("dresses");

  useEffect(() => {
    if (data) {
      const sortedData = data.data.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
      setDresses(sortedData);
    }

  }, [data]);

  return (
    <Box>
      <Button
        onClick={() => onOpen()}
        style={isOpen ? { display: "none" } : { display: "initial" }}
        key={"full"}
        mt={19}
        color={"black"}
        fontSize={20}
        fontFamily={"Roboto"}
        size="md"
        height="58px"
        width="200px"
        border="2px"
        borderColor="white"
        background={"#D6C5B7"}
      >
        Catalog
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />

        <DrawerContent background={""}>
          <DrawerHeader
            background={"#D6C5B7"}
            color={"black"}
            textAlign={"center"}
            fontFamily={"monospace"}
            mb={10}
          >
            <DrawerCloseButton mt={"5px"} color={"black"} />
            VICTORIA SOPRANO DRESSES
          </DrawerHeader>
          <DrawerBody className="content_bg" p={0}>
            <SimpleGrid columns={3} spacing={10} textAlign={"center"}>
              {dresses.map((item) => (
                <Button
                  onClick={() => {
                    navigate(`/products/${item.id}`);
                  }}
                  bg={"blackAlpha.800"}
                  border={"2px solid white"}
                  borderRadius={"20px"}
                  p={12}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  key={item?.attributes?.name}
                  cursor={"pointer"}
                >
                  <Text
                    key={item?.attributes?.name}
                    color={"	#bd8e67"}
                    textAlign={"center"}
                    m={2}
                    fontSize={"xl"}
                  >
                    {item.attributes.name}
                  </Text>
                  <Text key={item.id} color={"	#808080"}>
                    {item?.attributes?.article}
                  </Text>
                </Button>
              ))}
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Menu;
