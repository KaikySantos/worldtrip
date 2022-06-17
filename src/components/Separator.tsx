import { Box } from "@chakra-ui/react";

export default function Separator() {
  return (
    <Box
      w={["60px", "90px"]}
      mx="auto"
      height="2px"
      bg="gray.700"
      my={["9", "20"]}
    ></Box>
  );
}