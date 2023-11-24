import React, { useState } from "react";
import { useEffect } from "react";
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
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useSearchBar } from "./logics";
import { Ad } from "../../../../types/Ad";

import "../../../../styles/components/header.scss";

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
    <Stack direction="row">
      <Formik initialValues={{ address: "" }} onSubmit={() => handleSubmit()}>
        {(props) => (
          <Form className="header-content">
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
            <Button
              margin-x={"10px"}
              width={"30%"}
              colorScheme="teal"
              isLoading={isLoading}
              type="submit"
            >
              Rechercher
            </Button>

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
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default SearchBar;
