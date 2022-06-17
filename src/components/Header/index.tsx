import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      bg="white"
      w="100vw"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Image
        w={["81px", "184px"]}
        src="/logo.svg"
        alt="Worldtrip logo"
      />
    </Flex>
  )
}