import React from "react";
import { Container, Heading, Text, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Buy() {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxW={"1200px"} p={15}>
           <Container maxW={"1200px"} p={15}>
      <Flex alignItems="center">
        <Link
          as={NextLink}
          href="/buy"
          mx={5}
          style={{ fontSize: "25px", fontStyle: "italic", color: "Cyan", fontFamily: "Concert One" }}
        >
          <Text fontWeight="lighter" color="Cyan">
            Buy
          </Text>
        </Link>
        <Link
          as={NextLink}
          href="/sell"
          style={{ fontSize: "25px", fontStyle: "italic", color: "Cyan", fontFamily: "Concert One" }}
        >
          <Text fontWeight="lighter" color="Cyan">
            Sell
          </Text>
        </Link>
      </Flex>
      <Text style={{ color: "Cyan", fontFamily: "Concert One" }}>
        Buy  Scrollpasses from this collection.
      </Text>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      <NFTGrid isLoading={isLoading} data={data} emptyText={"No Scrollpasses found"} />
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      </Container>
    </Container>
  );
}
