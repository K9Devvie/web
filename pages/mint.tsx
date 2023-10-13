import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../const/addresses";
import styles from "../styles/Home.module.css";
import { Container, Heading, Text, Box } from "@chakra-ui/react"; // Import Box component


const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <Container
      maxW={"1200px"} // Optional: Set a maximum width for the container
      textAlign="center" // Center-align text within the container
      className={styles.container}
    >
      <Heading style={{ color: "Cyan", fontFamily: 'Concert One'  }} mt={14} className={styles.h1}>
        Mint A Scrollpass!
      </Heading>

      <Text style={{ color: "Cyan", fontFamily: 'Concert One'  }} mt={14} className={styles.explain}>
        Mint here to get a Test Scrollpass
      </Text>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      {/* Add a Box component with margin-top (mt) to lower the button */}
      <Box mt={14}>
        <Web3Button
          theme="dark"
          contractAddress={nftDropContractAddress}
          action={(contract) => contract.erc721.claim(1)}
          onSuccess={() => {
            alert("Scrollpass Claimed!");
            router.push("/sell");
          }}
          onError={(error) => {
            alert(error);
          }}
          style={{
            background: "linear-gradient(to right, lightblue, pink, orange)", // Set your gradient here
            color: "white", // Text color
            borderRadius: "8px", // Optional: Add border radius
            padding: "10px 20px", // Optional: Add padding
            fontFamily: 'Concert One' 
          }}
        >
          Mint NFT
        </Web3Button>
        
      </Box>
    </Container>
  );
};

export default Mint;
