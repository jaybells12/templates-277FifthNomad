import {
  ChangeEvent,
  FunctionComponent,
  useState,
  useRef,
  MutableRefObject,
} from "react";
import {
  Input,
  FormControl,
  Select,
  RadioGroup,
  Radio,
  FormErrorMessage,
} from "@chakra-ui/react";
import { DownArrowIcon } from "../DownArrowIcon";

// Need to replicate telephone input field behavior
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

  return (
    <FormControl width={"50%"} margin={"0 auto"}>
      <Input
        id="firstName"
        type={"text"}
        placeholder={"FIRST NAME"}
        aria-label={"First name"}
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <Input
        id="lastName"
        type={"text"}
        placeholder={"LAST NAME"}
        aria-label={"Last name"}
        value={last}
        onChange={(e) => setLast(e.target.value)}
      />
      <Input
        id="email"
        type={"email"}
        placeholder={"EMAIL ADDRESS"}
        aria-label={"Email address"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        id="telephone"
        type={"tel"}
        placeholder={"TELEPHONE"}
        aria-label={"Telephone"}
        value={tel}
        maxLength={10}
        onChange={(e) => setTel(e.target.value)}
      />
      <RadioGroup id="residence" aria-label={"Desired residence type"}>
        <Radio value={"1"}>1 BEDROOM</Radio>
        <Radio value={"2"}>2 BEDROOM</Radio>
        <Radio value={"3"}>3 BEDROOM</Radio>
      </RadioGroup>
      <Select id="price" aria-label={"Price range"} icon={<DownArrowIcon />}>
        <option value={""} selected disabled>
          PRICE RANGE
        </option>
        {priceRanges.map((price, idx) => (
          <option key={idx}>{price}</option>
        ))}
      </Select>
      <Select
        id="from"
        aria-label={"How did you hear about us?"}
        icon={<DownArrowIcon />}
      >
        <option value={""} selected disabled>
          HOW DID YOU HEAR ABOUT US?
        </option>
        {fromRanges.map((from, idx) => (
          <option key={idx}>{from}</option>
        ))}
      </Select>
      <RadioGroup id="broker" aria-label={"Are you a broker?"}>
        <Radio value={"yes"}>YES</Radio>
        <Radio value={"no"}>NO</Radio>
      </RadioGroup>
      {/*Conditional Here, IF broker is yes */}
      <Input
        id="brokerage"
        type={"text"}
        placeholder={"BROKERAGE"}
        aria-label={"Brokerage"}
      />
    </FormControl>
  );
};
