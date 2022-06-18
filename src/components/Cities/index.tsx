import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +100</Heading>
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={["20px", "45px"]} alignItems="center" justifyContent="center" px={["30px", "0"]}>
        <City city="Londres" cityImage="/londres.png" country="Reino Unido" countryImage="/reino-unido.png" />
        <City city="Paris" cityImage="/paris.png" country="França" countryImage="/franca.png" />
        <City city="Roma" cityImage="/roma.png" country="Itália" countryImage="/italia.png" />
        <City city="Praga" cityImage="/praga.png" country="Replública Tcheca" countryImage="/replubica-tcheca.png" />
        <City city="Amsterdã" cityImage="/amsterda.png" country="Holanda" countryImage="/holanda.png" />
      </Grid>
    </>
  );
}