import React from "react";
import {
  Input,
  Stack,
  Radio,
  RadioGroup,
  FormControl,
  FormErrorMessage,
  Button,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useSearchBar } from "./logics";
import { Ad } from "../../../../types/Ad";

interface ISearchBarProps {
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>;
}

const SearchBar: React.FC<ISearchBarProps> = ({ setAds }) => {
  const {
    addressInput,
    setAddressInput,
    searchAdBody,
    setSearchAdBody,
    handleSubmit,
    isLoading,
  } = useSearchBar(setAds);

  return (
    <Formik initialValues={{ address: "" }} onSubmit={handleSubmit}>
      {(props) => (
        <Form className="header-content">
          <Flex flexDirection={"column"}>
            <Field name="address">
              {({ field, form }: { field: any; form: any }) => (
                <FormControl
                  isInvalid={form.errors.address && form.touched.address}
                >
                  <Input
                    {...field}
                    placeholder="Address"
                    value={addressInput}
                    onChange={(e) => {
                      field.onChange(e);
                      setAddressInput(e.target.value);
                    }}
                  />
                  <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Slider
              aria-label="slider-ex-1"
              defaultValue={5}
              min={0}
              max={10000}
              onChangeEnd={(val) =>
                setSearchAdBody({ ...searchAdBody, radius: val })
              }
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <RadioGroup
              defaultValue="sale"
              onChange={(value) =>
                setSearchAdBody({
                  ...searchAdBody,
                  type: value as "rent" | "sale",
                })
              }
              value={searchAdBody.type}
            >
              <Stack spacing={5} direction="row">
                <Radio colorScheme="green" value="rent">
                  Rent
                </Radio>
                <Radio colorScheme="green" value="sale">
                  Sale
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
          <Button
            margin-x={"10px"}
            width={"30%"}
            colorScheme="red"
            isLoading={isLoading}
            type="submit"
          >
            Rechercher
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
