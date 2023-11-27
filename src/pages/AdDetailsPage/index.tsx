import { Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import AdDetailCard from "components/AdDetailsPageComponents/AdDetailCard";
import BreadCrumb from "components/AdDetailsPageComponents/BreadCrumb";
import Carousel from "components/AdDetailsPageComponents/Carousel";
import AdsContext from "context";
import "react-multi-carousel/lib/styles.css";
import "../../styles/components/addetailspage.scss";

const AdDetailsPage = () => {
  const { selectedAd } = useContext(AdsContext);

  if (selectedAd) {
    return (
      <Flex className="adDetailsPage-main" direction="column">
        <BreadCrumb />
        <Flex direction="column" my={5} mx={100} gap={4}>
          <Heading mb={3}>{selectedAd.title}</Heading>
          {selectedAd.pictureUrls.length > 0 && (
            <Carousel pictures={selectedAd.pictureUrls} />
          )}
          <AdDetailCard selectedAd={selectedAd} />
        </Flex>
      </Flex>
    );
  } else {
    return <Flex>Oups une erreur ! </Flex>;
  }
};

export default AdDetailsPage;
