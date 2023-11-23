import {
  Input,
  Stack,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useSearchBar } from "./logics";
import { Ad } from "../../../../types/Ad";

interface ISearchBarProps {
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>;
}

const SearchBar = ({ setAds }: ISearchBarProps) => {
  const { searchAdBody, setSearchAdBody } = useSearchBar(setAds);

  return (
    <Stack flexDirection="row">
      <Input placeholder="Adress" />
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[0, 30]}
        onChangeEnd={(val) =>
          setSearchAdBody({ ...searchAdBody, radius: val[1] })
        }
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <RadioGroup defaultValue="2">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="red" value="1">
            Rent
          </Radio>
          <Radio colorScheme="green" value="2">
            Sale
          </Radio>
        </Stack>
      </RadioGroup>
    </Stack>
  );
};

export default SearchBar;
