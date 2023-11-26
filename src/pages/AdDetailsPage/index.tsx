import { Flex, Heading } from "@chakra-ui/react";
import BreadCrumb from "components/AdDetailsPageComponents/BreadCrumb";
import AdsContext from "context";
import { useContext } from "react";

const AdDetailsPage = () => {
  const { selectedAd } = useContext(AdsContext);
  return (
    <Flex>
      <BreadCrumb />
      <Heading>{selectedAd?.title}</Heading>
      <div>{selectedAd?.surface}</div>
      <div>{selectedAd?.type}</div>
    </Flex>
  );
};

export default AdDetailsPage;
