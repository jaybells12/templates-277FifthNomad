import { FunctionComponent, useState } from "react";
import {
  Input,
  FormControl,
  Select,
  RadioGroup,
  Radio,
  FormErrorMessage,
  FormLabel,
  HStack,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import { DownArrowIcon } from "../DownArrowIcon";

// Need to replicate telephone input field behavior
// Need to implement Form Error Messages
export type InquireFormProps = {
  priceRanges: string[];
  fromRanges: string[];
};

export const InquireForm: FunctionComponent<InquireFormProps> = (
  props: InquireFormProps
) => {
  const { priceRanges, fromRanges } = props;
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [broker, setBroker] = useState(null);
  const [bedrooms, setBedrooms] = useState("");
  const [range, setRange] = useState("");
  const [heard, setHeard] = useState("");

  return (
    <FormControl
      display={"flex"}
      flexDir={"column"}
      gap={"1.75rem"}
      flexGrow={"0"}
      width={"unset"}
    >
      <Heading
        as={"h2"}
        fontSize={"7.25rem"}
        lineHeight={"0.9"}
        fontWeight={"normal"}
        textAlign={"left"}
      >
        Inquire
      </Heading>
      <HStack gap={"2rem"}>
        <Input
          id="firstName"
          type={"text"}
          placeholder={"FIRST NAME *"}
          _placeholder={{ color: "brand.placeholder" }}
          aria-label={"First name"}
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          isRequired
        />
        <Input
          id="lastName"
          type={"text"}
          placeholder={"LAST NAME *"}
          _placeholder={{ color: "brand.placeholder" }}
          aria-label={"Last name"}
          value={last}
          onChange={(e) => setLast(e.target.value)}
          isRequired
        />
      </HStack>
      <Input
        id="email"
        type={"email"}
        placeholder={"EMAIL ADDRESS *"}
        _placeholder={{ color: "brand.placeholder" }}
        aria-label={"Email address"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isRequired
      />
      <Input
        id="telephone"
        type={"tel"}
        placeholder={"TELEPHONE"}
        _placeholder={{ color: "brand.placeholder" }}
        aria-label={"Telephone"}
        value={tel}
        maxLength={10}
        onChange={(e) => setTel(e.target.value)}
      />
      <Box>
        <FormLabel
          htmlFor="residence"
          fontSize={"0.875rem"}
          letterSpacing={"2px"}
          marginBottom={"1.25rem"}
        >
          DESIRED RESIDENCE TYPE
        </FormLabel>
        <RadioGroup
          id="residence"
          aria-label={"Desired residence type"}
          display={"flex"}
          justifyContent={"space-between"}
          onChange={(value) => setBedrooms(value)}
        >
          <Radio value={"1bed"} checked={bedrooms === "1bed"}>
            1 BEDROOM
          </Radio>
          <Radio value={"2bed"} checked={bedrooms === "2bed"}>
            2 BEDROOM
          </Radio>
          <Radio value={"3bed"} checked={bedrooms === "3bed"}>
            3 BEDROOM
          </Radio>
        </RadioGroup>
      </Box>
      <Select
        id="price"
        value={range}
        onChange={(e) => setRange(e.target.value)}
        aria-label={"Price range"}
        icon={<DownArrowIcon />}
      >
        <option value={""} disabled>
          PRICE RANGE
        </option>
        {priceRanges.map((price, idx) => (
          <option key={idx} value={price}>
            {price}
          </option>
        ))}
      </Select>
      <Select
        id="from"
        value={heard}
        onChange={(e) => setHeard(e.target.value)}
        aria-label={"How did you hear about us?"}
        icon={<DownArrowIcon />}
      >
        <option value={""} disabled>
          HOW DID YOU HEAR ABOUT US?
        </option>
        {fromRanges.map((from, idx) => (
          <option key={idx} value={from}>
            {from}
          </option>
        ))}
      </Select>
      <Box>
        <FormLabel
          htmlFor="broker"
          fontSize={"0.875rem"}
          letterSpacing={"2px"}
          marginBottom={"1.25rem"}
        >
          ARE YOU A BROKER?
        </FormLabel>
        <RadioGroup
          id="broker"
          aria-label={"Are you a broker?"}
          textAlign={"left"}
          onChange={(value) => setBroker(value)}
        >
          <Radio value={"yes"} checked={broker === "yes"} paddingRight={"2rem"}>
            YES
          </Radio>
          <Radio value={"no"} checked={broker === "no"}>
            NO
          </Radio>
        </RadioGroup>
      </Box>
      {broker === "yes" && (
        <Input
          id="brokerage"
          type={"text"}
          placeholder={"BROKERAGE"}
          _placeholder={{ color: "brand.placeholder" }}
          aria-label={"Brokerage"}
        />
      )}
      <Button width={"138px"} height={"34px"} lineHeight={"1"}>
        SUBMIT
      </Button>
    </FormControl>
  );
};
