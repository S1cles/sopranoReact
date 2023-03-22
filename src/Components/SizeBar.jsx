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
                    <Th>Waist Girth</Th>
                    <Th>Hip Girth</Th>
                    <Th>EU</Th>
                  </Tr>
                </Thead>
                <Tbody overflow={"hidden"}>
                  <Tr>
                    <Td>77-79</Td>
                    <Td>58-60</Td>
                    <Td>83-85</Td>
                    <Td>32</Td>
                  </Tr>
                  <Tr>
                    <Td>80-83</Td>
                    <Td>61-64</Td>
                    <Td>85-87</Td>
                    <Td>34</Td>
                  </Tr>
                  <Tr>
                    <Td>83-86</Td>
                    <Td>63-66</Td>
                    <Td>87-90</Td>
                    <Td>36</Td>
                  </Tr>
                  <Tr>
                    <Td>86-89</Td>
                    <Td>66-70</Td>
                    <Td>90-94</Td>
                    <Td>38</Td>
                  </Tr>
                  <Tr>
                    <Td>89-92</Td>
                    <Td>70-74</Td>
                    <Td>94-98</Td>
                    <Td>40</Td>
                  </Tr>
                  <Tr>
                    <Td>92-96</Td>
                    <Td>74-78</Td>
                    <Td>98-102</Td>
                    <Td>42</Td>
                  </Tr>
                  <Tr>
                    <Td>96-100</Td>
                    <Td>78-82</Td>
                    <Td>102-106</Td>
                    <Td>44</Td>
                  </Tr>
                  <Tr>
                    <Td>100-104</Td>
                    <Td>82-86</Td>
                    <Td>106-110</Td>
                    <Td>46</Td>
                  </Tr>
                  <Tr>
                    <Td>104-108</Td>
                    <Td>86-92</Td>
                    <Td>110-116</Td>
                    <Td>48</Td>
                  </Tr>
                  <Tr>
                    <Td>108-112</Td>
                    <Td>92-98</Td>
                    <Td>116-122</Td>
                    <Td>50</Td>
                  </Tr>
                  <Tr>
                    <Td>112-120</Td>
                    <Td>98-104</Td>
                    <Td>122-128</Td>
                    <Td>52</Td>
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
