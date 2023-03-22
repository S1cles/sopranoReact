import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const SizeBar = () => {
  return (
    <Box marginTop={100}>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="center"
                fontSize={"24px"}
                fontFamily={"Roboto"}
              >
                Size Chart
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer overflow={"hidden"}>
              <Table variant="striped" m={0} p={0} textAlign={"center"}>
                <TableCaption>Sizes Victoria Soprano</TableCaption>
                <Thead overflow={"hidden"}>
                  <Tr>
                    <Th>Chest Girth</Th>
                    <Th>international</Th>
                    <Th>Rus</Th>
                  </Tr>
                </Thead>
                <Tbody overflow={"hidden"}>
                  <Tr>
                    <Td>77-81</Td>
                    <Td>XS</Td>
                    <Td>38-40</Td>
                  </Tr>
                  <Tr>
                    <Td>82-89</Td>
                    <Td>S</Td>
                    <Td>42-44</Td>
                  </Tr>
                  <Tr>
                    <Td>90-96</Td>
                    <Td>M</Td>
                    <Td>44-46</Td>
                  </Tr>
                  <Tr>
                    <Td>98-104</Td>
                    <Td>L</Td>
                    <Td>48-50</Td>
                  </Tr>
                  <Tr>
                    <Td>104-112</Td>
                    <Td>XL</Td>
                    <Td>50-52</Td>
                  </Tr>
                  <Tr>
                    <Td>112-122</Td>
                    <Td>XXL</Td>
                    <Td>54-56</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default SizeBar;
