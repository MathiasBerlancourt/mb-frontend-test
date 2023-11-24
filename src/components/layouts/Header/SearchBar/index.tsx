import React, { useState } from "react";
import { useEffect } from "react";
import {
  Input,
  Stack,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useSearchBar } from "./logics";
import { Ad } from "../../../../types/Ad";
import { Coordinates } from "../../../../types/Coordinates";
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
    validateAddress,
    handleSubmit,
    isLoading,
  } = useSearchBar(setAds);

  return (
    <Formik initialValues={{ address: "" }} onSubmit={() => handleSubmit()}>
      {(props) => (
        <Form className="header-content">
          <Field name="address" validate={validateAddress}>
            {({ field, form }: { field: any; form: any }) => (
              <FormControl
                isInvalid={form.errors.address && form.touched.address}
              >
                <FormLabel>Address</FormLabel>
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
          <Button mt={4} colorScheme="teal" isLoading={isLoading} type="submit">
            Rechercher
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
