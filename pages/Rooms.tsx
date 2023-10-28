import { Box, Button, Card, Container, Flex, Heading, SimpleGrid, Link, Text, Image } from "@chakra-ui/react";
import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import NFTroom from "../components/NFTroom";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";

export default function Sell() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const address = useAddress();
    const { data, isLoading } = useOwnedNFTs(contract, address);

    const [selectedNFT, setSelectedNFT] = useState<NFTType>();

    // Check if the user has the required NFT
    const hasRequiredNFT = data && data.some((nft)  => NFT_COLLECTION_ADDRESS === NFT_COLLECTION_ADDRESS);

    return (
        <Container maxW={"1200px"} p={5} >
            <Heading style={{ color: "Cyan", fontFamily: 'Concert One' }} >Enter A Chat Room</Heading>
            <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
            {hasRequiredNFT ? (
                // Render the "AnonsRoom" link if the user has the required NFT
                <Link as={NextLink} href="AnonsRoom" mx={5} style={{ fontStyle: 'normal', color: 'Cyan', fontFamily: 'Concert One' }} >
                    <Flex alignItems="center">
                        <Image src="https://media.licdn.com/dms/image/D4E0BAQF6gMSNL5xYCA/company-logo_200_200/0/1692892036736/scroll_io_logo?e=2147483647&v=beta&t=lN1d9ETN4PIIvDN4cWIaKzhzIp8DJMt3WxkOru6OBMA" alt="Room Image" boxSize={10} ml={3} borderRadius="full" />
                        <Text fontWeight="lighter" color="Cyan" ml={2}>Anon&apos;s Room 1</Text>
                        {!selectedNFT ? (
                            <NFTroom
                                data={data}
                                isLoading={isLoading}
                                emptyText={"You don't own any Scrollpasses yet from this collection."}
                            />
                        ) : (
                            <Flex justifyContent={"center"} my={2}>
                                <SimpleGrid columns={1} spacing={2} p={1}>
                                    <ThirdwebNftMedia
                                        metadata={selectedNFT.metadata}
                                        width="25%"
                                        height="25%"
                                    />
                                </SimpleGrid>
                            </Flex>
                        )}
                    </Flex>
                </Link>
            ) : (
                // Render a message indicating that the user doesn't have the required NFT
                <Text style={{ color: "Red", fontFamily: 'Concert One' }} >You currently don't have any NFT passes to enter a room.</Text>
            )}
            <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
        </Container>
    )
}
