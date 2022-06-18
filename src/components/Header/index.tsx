import Link from "next/link";
import { useRouter } from "next/router";

import { Flex, Image, Icon, Box } from "@chakra-ui/react";

import { RiArrowLeftSLine } from 'react-icons/ri';

export default function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex
      as="header"
      bg="white"
      w="100vw"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
    >
      <Box
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        {notHomePage && (
          <Box position="absolute" left="0">
            <Link href="/">
              <a>
                <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} />
              </a>
            </Link>
          </Box>
        )}

        <Image
          w={["81px", "184px"]}
          src="/logo.svg"
          alt="Worldtrip logo"
        />
      </Box>
    </Flex>
  )
}