import { type Ad } from "types/Ad";
import { Flex, Text, Card } from "@chakra-ui/react";

interface IAdCardProps {
  selectedAd: Ad;
}

const AdDetailCard = ({ selectedAd }: IAdCardProps) => {
  return (
    <Card p={4}>
      <Text fontSize="lg">
        <Flex gap={4}>
          <Text fontSize="lg">
            <b>Surface :</b>
            {` ${selectedAd.surface}`} m²
          </Text>
          <Text fontSize="lg">
            <b>Prix :</b>
            {` ${selectedAd.price}`} €
          </Text>
        </Flex>
        <Text
          mr={30}
          my={5}
          textAlign={"justify"}
        >{` ${selectedAd.description}`}</Text>
      </Text>
      <Flex direction="row" gap={5}>
        <Text fontSize="lg">
          <b>Type :</b>
          {selectedAd.type === "rent" ? " location" : " vente"}
        </Text>
        <Text fontSize="lg">
          <b>Nombre de pièces :</b>
          {` ${selectedAd.rooms}`}
        </Text>
        <Text fontSize="lg">
          <b> Nombre de chambres :</b>
          {` ${selectedAd.bedrooms}`}
        </Text>
        <Text fontSize="lg">
          <b>Localisation</b>:{` ${selectedAd.location.city}`}
        </Text>
      </Flex>
    </Card>
  );
};

export default AdDetailCard;
