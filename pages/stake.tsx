import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";

import styles from "../styles/Home.module.css";

export default function Buy() {
  return (
    <Container maxW={"1200px"} p={5} textAlign="center" mt={14} > {/* Center align text */}
      <Heading style={{ color: "Cyan" }}>Stake Scrollpasses and earn tokens!</Heading>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      <Text mt={14} style={{ color: "Cyan" }} >Coming soon</Text>
    </Container>
  );
}
