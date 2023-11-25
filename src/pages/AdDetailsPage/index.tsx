import { type Ad } from "types/Ad";

interface IAdDetailPageProps {
  selectedAd: Ad | undefined;
}

const AdDetailsPage = ({ selectedAd }: IAdDetailPageProps) => {
  return (
    <div>
      <div>{selectedAd?.surface}</div>
      <div>{selectedAd?.type}</div>
    </div>
  );
};

export default AdDetailsPage;
