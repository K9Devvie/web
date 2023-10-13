import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    return (
        <Container  maxW={"1200px"} p={5} >
            <Heading style={{ color: "Cyan", fontFamily: 'Concert One'  }} >Buy Scrollpasses</Heading>
            <Text style={{ color: "Cyan", fontFamily: 'Concert One',    }} >Browse and buy Scrollpasses from this collection.</Text>
            <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
            <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No Scrollpasses found"}
            />
                  <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
        </Container>

        
        
    )

};


