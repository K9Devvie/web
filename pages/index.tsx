import { ConnectWallet } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { Button, Stack, Flex, Container, Heading } from "@chakra-ui/react";
import  NextLink from "next/link";


const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading style={{ fontStyle: 'italic', color: 'Cyan', fontFamily: 'Concert One'  }}>Memable</Heading>
          <p style={{ color: "Cyan", fontFamily: 'Concert One' }}  > Welcome to <i >Memable</i> Testnet
          </p >
          <p style={{ color: "Cyan", fontFamily: 'Concert One'  }} > Please head to the Mint page
            to mint a Test Scrollpass
          </p >
          <Button style={{ color: "white", fontFamily: 'Concert One'  }} bgGradient="linear(to right, lightblue, pink, orange)"
            as={NextLink} href='/mint'
            >Mint Page</Button>
        </Stack>
      </Flex>
    </Container>
    
  );
};

export default Home;
