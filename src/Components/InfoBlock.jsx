import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const InfoBlock = (props) => {
  return (
    <Stack flex={1} alignContent={"center"} spacing={{ base: 5, md: 10 }}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        textAlign={{ base: "center", lg: "initial" }}
      >
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "#E8DBBD",
            zIndex: -1,
          }}
        >
          {props?.props?.attributes?.name}
        </Text>
      </Heading>
      <Box color={"gray.500"}>{props?.props?.attributes?.desc}</Box>

      <Box>
        <Grid mt={5} templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={2} h="10" fontWeight={600} fontSize={20}>
            Code:
          </GridItem>
          <GridItem
            color={"#cfb77f"}
            colStart={4}
            colEnd={6}
            h="10"
            fontWeight={600}
            fontSize={20}
          >
            {props?.props?.attributes?.article}
          </GridItem>
        </Grid>
        <Grid mt={5} templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={2} h="10" fontWeight={600} fontSize={20}>
            Original color:
          </GridItem>
          <GridItem
            colStart={4}
            colEnd={6}
            h="10"
            fontWeight={600}
            fontSize={{ base: 18, lg: 20 }}
          >
            {props?.props?.attributes?.original_color}
          </GridItem>
        </Grid>
        <Grid mt={{ base: 10, lg: 5 }} templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={2} h="10" fontWeight={600} fontSize={20}>
            Available color:
          </GridItem>
          <GridItem
            colStart={4}
            colEnd={6}
            h="10"
            fontWeight={600}
            fontSize={{ base: 18, lg: 20 }}
          >
            {props?.props?.attributes?.avilable_color}
          </GridItem>
        </Grid>
        <hr className="lightHr" />
        <Text
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
          textAlign={"center"}
        >
          {`Price: ${props?.props?.attributes?.price}€`}
        </Text>
      </Box>
    </Stack>
  );
};

export default InfoBlock;
