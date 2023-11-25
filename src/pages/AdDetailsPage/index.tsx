import { Heading } from "@chakra-ui/react";
import { type Ad } from "types/Ad";

interface IAdDetailPageProps {
  selectedAd: Ad | undefined;
}

const AdDetailsPage = ({ selectedAd }: IAdDetailPageProps) => {
  return (
    <div>
      <Heading>{selectedAd?.title}</Heading>

      <div>{selectedAd?.surface}</div>
      <div>{selectedAd?.type}</div>
    </div>
  );
};

export default AdDetailsPage;
