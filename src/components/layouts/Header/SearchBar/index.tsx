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
import { useGeocoding } from "./logics";
import { useState } from "react";
import { Coordinates } from "../../../../types/Coordinates";

interface ISearchBarProps {
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>;
}

const SearchBar = ({ setAds }: ISearchBarProps) => {
  const { searchAdBody, setSearchAdBody } = useSearchBar(setAds);
  const [addressInput, setAddressInput] = useState<string>("");
  const { addressCoordinates } = useGeocoding(addressInput);
  console.log("addressCoordinates:", addressCoordinates);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setAddressInput(event.target.value);
    if (addressCoordinates) {
      setSearchAdBody({
        ...searchAdBody,
        latitude: addressCoordinates.latitude,
        longitude: addressCoordinates.longitude,
      });
    }
  };
  console.log("SearchAdBody test:", searchAdBody);

  return (
    <Stack flexDirection="row">
      <Input
        placeholder="Address"
        value={addressInput}
        onChange={handleChange}
      />
      <RangeSlider
        // eslint-disable-next-line jsx-a11y/aria-proptypes
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
