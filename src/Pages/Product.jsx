import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./../Hook/useFetch";
import {
  Box,
  Flex,
  Image,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import Footer from "./../Components/Footer";
import InfoBlock from "./../Components/InfoBlock";

const Product = () => {
  const [dressesData, setDressesData] = useState(null);
  const { id } = useParams();
  const { isLoading, data, error } = useFetch(`dresses/${id}?populate=*`);
  const [activeImg, setActiveImg] = useState(0);
  useEffect(() => {
    if (data) {
      setDressesData(data.data);
    }
  }, [data]);
  if (isLoading)
    return (
      <Spinner position={"absolute"} left={"50vw"} top={"50vh"} size="xl" />
    );
  if (error)
    return (
      <Box position={"absolute"} left={"50vw"} top={"50vh"} fontSize={"5xl"}>
        Error: {error.message}
      </Box>
    );
  return (
    <div>
      <Stack
        fontFamily={"Roboto"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 5 }}
        direction={{ base: "column", lg: "row" }}
        padding={10}
      >
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
          direction={{ base: "column", lg: "row" }}
        >
          <Box
            display={"flex"}
            flexDirection={{ base: "row", lg: "column" }}
            alignItems={"center"}
            spacing={4}
            order={{ base: "2", lg: "1" }}
            maxWidth={"100vw"}
            overflowX={{ base: "scroll", lg: "hidden" }}
          >
            {dressesData?.attributes?.img_dresses?.data.map((data, index) => {
              return (
                <Box key={data.id}>
                  <Box
                    key={data?.id}
                    width={{ base: "100px", md: "120px" }}
                    height={{ base: "100px", md: "120px" }}
                    borderRadius={"50%"}
                    overflow={"hidden"}
                    border={`2px #dfd4ba solid`}
                    m={5}
                    mt={2}
                    onClick={() => setActiveImg(index)}
                  >
                    <Image
                      className="mini_img"
                      key={data?.attributes?.url}
                      padding={3}
                      borderRadius={"50%"}
                      width={"100%"}
                      height={"100%"}
                      objectFit={"cover"}
                      src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes.url}`}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            position={"relative"}
            order={{ base: "1", lg: "2" }}
            height={"80vh"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"100%"}
            maxWidth={600}
            overflow={"hidden"}
          >
            <Image
              border={`2px #E8DBBD solid`}
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              width={"100%"}
              maxWidth={600}
              height={"100%"}
              src={`${process.env.REACT_APP_UPLOAD_URL}${dressesData?.attributes?.img_dresses?.data[activeImg]?.attributes?.url}`}
            />
          </Box>
        </Flex>
        <InfoBlock props={dressesData} />
      </Stack>
      <Footer />
    </div>
  );
};

export default Product;
