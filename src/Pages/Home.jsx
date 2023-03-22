import "../App.css";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import Menu from "../Components/Menu";

function Home() {
  const [smLogo] = useMediaQuery("(max-width: 756px)");

  return (
    <Box className="App">
      <Box className="bg_container">
        <Text style={smLogo ? { fontSize: "4.5rem" } : { fontSize: "7rem" }}>
          Victoria Soprano
        </Text>
        <Menu />
      </Box>
    </Box>
  );
}

export default Home;
