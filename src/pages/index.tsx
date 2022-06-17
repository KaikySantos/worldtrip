import { Flex } from "@chakra-ui/react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Features from "../components/Features";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Features />
    </Flex>
  )
}
