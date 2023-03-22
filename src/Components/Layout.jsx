import { Box, Flex, Img } from "@chakra-ui/react";
import { ChevronRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import Logo from "../img/logoPng.png";
import { useLocation, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentProductId = location.pathname.split("/")[2];
  const nextProductId = parseInt(currentProductId) + 1;

  const handleNextProduct = () => {
    const url = `/products/${nextProductId}`;
    navigate(url);
  };

  return (
    <Box>
      <Box bg={"black"} color={"white"} px={4}>
        <Flex h={"80px"} alignItems={"center"} justifyContent={"space-between"}>
          <ArrowLeftIcon
            fontSize={24}
            color={"#D6C5B7"}
            cursor={"pointer"}
            onClick={() => navigate("/")}
          />
          <a href="https://victoriasoprano.com/">
            <Img src={Logo} width={150} />
          </a>
          <ChevronRightIcon
            fontSize={48}
            color={"#D6C5B7"}
            cursor={"pointer"}
            onClick={handleNextProduct}
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Layout;
