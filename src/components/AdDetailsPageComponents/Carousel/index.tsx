import { Flex } from "@chakra-ui/react";

interface ICarouselProps {
  pictures: string[];
}

const Carousel = ({ pictures }: ICarouselProps) => {
  return (
    <Flex alignContent="center" width="1200px">
      <div className="carrousel">
        {pictures.map((picture, index) => (
          <div key={index} className="col">
            <div>
              <img src={picture} alt={`pic-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </Flex>
  );
};

export default Carousel;
