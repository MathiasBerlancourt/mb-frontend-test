import { type Ad } from "types/Ad";
import { useParams } from "react-router-dom";

interface IAdDetailPageProps {
  selectedAd: Ad | undefined;
}

const AdDetailsPage = ({ selectedAd }: IAdDetailPageProps) => {
  const { adId } = useParams();

  return (
    <div>
      <div>{selectedAd?.surface}</div>
      <div>{selectedAd?.type}</div>
    </div>
  );
};

export default AdDetailsPage;
