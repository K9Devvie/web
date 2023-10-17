import type {NFT as NFTType } from "@thirdweb-dev/sdk";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import NFT from "./NFT";
import Link from "next/link";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";

type Props = {
    isLoading: boolean;
    data: NFTType[] | undefined;
    overrideOnclickBehavior?: (nft: NFTType) => void;
    emptyText?: string;
};

export default function NFTGrid({
    isLoading,
    data,
    overrideOnclickBehavior,
    emptyText = "No NFTs found",
}: Props) {
    return (
        <SimpleGrid  columns={6} spacing={75} w={"100%"} padding={2.5} my={5}   >
            {isLoading ? (
                [...Array(5)].map((_, index) => (
                    <Skeleton key={index} height={"75px"} width={"75px"} />
                ))
            ) : data && data.length > 0 ? (
                data.map((nft) => 
                     (
                        <div
                            key={nft.metadata.id}
    
                        >
                            <NFT nft={nft} />
                        </div>
                    ))
            ) : (
                <Text>{emptyText}</Text>
            )}
        </SimpleGrid>
        
    )
};