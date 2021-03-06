import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  cityImage: string;
  city: string;
  country: string;
  countryImage: string;
}

export default function City({ cityImage, city, country, countryImage }: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={cityImage} h="170px" w="100%" alt={city} />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">{city}</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{country}</Text>
        </Flex>
        <Image src={countryImage} w="30px" h="30px" alt={country} />
      </Flex>
    </Box>
  );
}