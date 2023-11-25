import { type Ad } from "types/Ad";
import { type IAdAPIBody } from "types/AdAPIBody";
import React from "react";
import {
  Input,
  Stack,
  Radio,
  RadioGroup,
  Button,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Flex,
} from "@chakra-ui/react";
import { useSearchBar } from "./logics";

interface ISearchBarProps {
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>;
}

const SearchBar = ({ setAds }: ISearchBarProps) => {
  const {
    addressInput,
    setAddressInput,
    searchAdBody,
    setSearchAdBody,
    handleSubmit,
    isLoading,
  } = useSearchBar(setAds);

  return (
    <Flex
      gap={2}
      width="100%"
      justifyContent="space-around"
      alignItems="center"
    >
      <Input
        placeholder="Address"
        width="30%"
        value={addressInput}
        onChange={(e) => {
          setAddressInput(e.target.value);
        }}
      />
      <Slider
        width="30%"
        aria-label="slider-ex-2"
        colorScheme="red"
        defaultValue={30}
        min={0}
        max={300}
        onChange={(value: number) =>
          setSearchAdBody({ ...searchAdBody, radius: value })
        }
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <RadioGroup
        defaultValue="sale"
        onChange={(value: IAdAPIBody["type"]) =>
          setSearchAdBody({
            ...searchAdBody,
            type: value,
          })
        }
        value={searchAdBody.type}
      >
        <Stack spacing={3} direction="row">
          <Radio colorScheme="red" value="rent">
            Rent
          </Radio>
          <Radio colorScheme="red" value="sale">
            Sale
          </Radio>
        </Stack>
      </RadioGroup>
      <Button
        margin-x={"10px"}
        colorScheme="red"
        isLoading={isLoading}
        isDisabled={!searchAdBody.latitude || !searchAdBody.longitude}
        onClick={() => handleSubmit()}
      >
        Rechercher
      </Button>
    </Flex>
  );
};

export default SearchBar;
