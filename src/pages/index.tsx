import { Flex, Heading } from "@chakra-ui/react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Separator from "../components/Separator";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Features />

      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
    </Flex>
  )
}
