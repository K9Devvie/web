import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  darkTheme,
  useAddress, 
} from "@thirdweb-dev/react";
import NextLink from "next/link";


export function Navbar() {
  const address = useAddress();

  return (
    <Box
      maxW={"1200px"}
      m={"auto"}
      py={"10px"}
      px={"40px"}
      bg="black" // Set the background color to black
      borderRadius="0 0 10px 10px"
      bgGradient="linear(to-r, blue.200, purple.500, orange.500)"


    >
      <Flex justifyContent={"space-between"} alignItems={"center"}  color="orange">
      <Link as={NextLink} href="/">
  <Heading style={{ fontStyle: 'italic', color: 'Cyan', fontFamily: 'Concert One' }}>Memable</Heading>
</Link>

        <Flex direction={"row"}>
        <Link as={NextLink} href="/mint" mx={5} style={{ fontStyle: 'normal', color: 'Cyan', fontFamily: 'Concert One' }} >
            <Text fontWeight="lighter" color="Cyan">Mint</Text> {/* Make text orange */}
          </Link>
          <Link as={NextLink} href="/buy" mx={5} style={{ fontStyle: 'normal', color: 'Cyan', fontFamily: 'Concert One' }} >
            <Text fontWeight="lighter" color="Cyan">Marketplace</Text> {/* Make text orange */}
          </Link>
          <Link as={NextLink} href="/sell" mx={5} style={{ fontStyle: 'normal', color: 'Cyan', fontFamily: 'Concert One' }} >
            <Text fontWeight="lighter" color="Cyan">Inventory</Text> {/* Make text orange */}
          </Link>
          <Link as={NextLink} href="/Social" mx={5} style={{ fontStyle: 'normal', color: 'Cyan', fontFamily: 'Concert One' }} >
            <Text fontWeight="lighter" color="Cyan">Social</Text> {/* Make text orange */}
          </Link>


        </Flex>
        <Flex dir={"row"} alignItems={"center"}  color="Cyan">
          <ThirdwebProvider
              activeChain="goerli"
              clientId="8de0e6f8b3ef5ba8bd2454007cd8277e"
              supportedWallets={[
              metamaskWallet({ recommended: true }),
              ]}
              
            >
            <ConnectWallet
        theme={darkTheme({
          colors: {
            accentText: "#00d5ff",
            accentButtonBg: "#00d5ff",
            modalBg: "#b853ee",
            dropdownBg: "#e38126",
            borderColor: "cyan",
            primaryText: "#0dd5fd",
            secondaryText: "#0dd5fd",
            primaryButtonBg: "#e38126",
            primaryButtonText: "Cyan",
            connectedButtonBg: "linear(to-r, blue.200, purple.500, orange.500)",
            
          },
        })}
        btnTitle={"Yo, connect "}
        modalTitle={"Memable connected..."}
        switchToActiveChain={true}
        modalSize={"compact"}
        welcomeScreen={{
          title: "Experience the meme power",
          img: {
            src: "https://files.cults3d.com/uploaders/26871291/illustration-file/ae9a70f5-fd2a-401c-97b9-88ddd5718558/project_20230613_1455241-01.png",
            width: 150,
            height: 150,
          },
        }}
        modalTitleIconUrl={
          "https://files.cults3d.com/uploaders/26871291/illustration-file/ae9a70f5-fd2a-401c-97b9-88ddd5718558/project_20230613_1455241-01.png"
        }
      />
    </ThirdwebProvider>
        </Flex>
      </Flex>
    </Box>
  );

  
}
