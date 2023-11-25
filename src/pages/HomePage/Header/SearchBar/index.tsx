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
  SliderMark,
} from "@chakra-ui/react";
import { useSearchBar } from "./logics";

interface ISearchBarProps {
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>;
}

const labelStyles = {
  mt: "2",
  ml: "-2.5",
  fontSize: "sm",
};

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
        placeholder="Addresse"
        width="30%"
        value={addressInput}
        onChange={(e) => {
          setAddressInput(e.target.value);
        }}
      />
      <p>0 km</p>
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
        <SliderMark value={50} {...labelStyles}>
          50
        </SliderMark>
        <SliderMark value={100} {...labelStyles}>
          100
        </SliderMark>
        <SliderMark value={200} {...labelStyles}>
          200
        </SliderMark>
        <SliderMark value={300} {...labelStyles}>
          300
        </SliderMark>
        <SliderMark
          value={searchAdBody.radius}
          textAlign="center"
          color="black"
          mt="-10"
          ml="-5"
          w="12"
        >
          {searchAdBody.radius}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <p>300 km</p>
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
