import { Box, Button, Card, Container, Flex, Heading, SimpleGrid, Stack, Text, Link } from "@chakra-ui/react";
import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import NFTGrid from "../components/NFTGrid";
import SaleInfo from "../components/SaleInfo";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";


export default function Sell() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const address = useAddress();
    const { data, isLoading } = useOwnedNFTs(contract, address);

    const [selectedNFT, setSelectedNFT] = useState<NFTType>();

    return (
        <Container maxW={"1200px"} p={5} >
        <Container  maxW={"1200px"} p={5}>
      <Flex alignItems="center">
        <Link
          as={NextLink}
          href="/buy"
          mx={5}
          style={{ fontSize: "25px", fontStyle: "italic", color: "Cyan", fontFamily: "Concert One", backgroundColor: "orange", padding: "10px 20px", borderRadius: "15px" }}
        >
          <Text fontWeight="lighter" color="Cyan">
            Buy
          </Text>
        </Link>
        <Link
          as={NextLink}
          href="/sell"
          style={{ fontSize: "25px", fontStyle: "italic", color: "Cyan", fontFamily: "Concert One", backgroundColor: "orange", padding: "10px 20px", borderRadius: "15px" }}
        >
          <Text fontWeight="lighter" color="Cyan">
            Sell
          </Text>
        </Link>
      </Flex>
      <Text style={{ color: "Cyan", fontFamily: "Concert One" }}>
        Sell Scrollpasses from this collection.
      </Text>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

    </Container>

            {!selectedNFT ? (
                <NFTGrid
                    data={data}
                    isLoading={isLoading}
                    overrideOnclickBehavior={(nft) => {
                        setSelectedNFT(nft);
                    }}
                    emptyText={"You don't own any Scrollpasses yet from this collection."}
                />
            ) : (
                <Flex justifyContent={"center"} my={10}>
                    <Card w={"75%"}>
                        <SimpleGrid columns={2} spacing={10} p={5}>
                            <ThirdwebNftMedia
                                metadata={selectedNFT.metadata}
                                width="100%"
                                height="100%"
                            />
                            <Stack>
                                <Flex justifyContent={"right"}>
                                    <Button
                                        onClick={() => {
                                            setSelectedNFT(undefined);
                                        }}
                                    >X</Button>
                                </Flex>
                                <Heading>{selectedNFT.metadata.name}</Heading>
                                <SaleInfo
                                    nft={selectedNFT}
                                />
                            </Stack>
                        </SimpleGrid>
                    </Card>
                </Flex>
            )}
        </Container>
    )
}