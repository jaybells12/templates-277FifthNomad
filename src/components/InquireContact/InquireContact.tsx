import { FunctionComponent } from "react";
import { Logo } from "../Logo";
import { Box, Heading, Text } from "@chakra-ui/react";

export type InquireContactProps = {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  contactInfo: string[];
  address: string;
  teamsInfo: string[];
};

export const InquireContact: FunctionComponent<InquireContactProps> = (
  props: InquireContactProps
) => {
  const { logo, contactInfo, address, teamsInfo } = props;
  return (
    <Box>
      <Logo
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
      />
      <Heading as={"h6"}>CONTACT</Heading>
      {contactInfo.map((contact, idx) => (
        <Text key={idx}>{contact}</Text>
      ))}
      <Heading as={"h6"}>SALES OFFICE</Heading>
      <Text>{address}</Text>
      <Heading as={"h6"}>EXCLUSIVE SALES & MARKETING</Heading>
      {teamsInfo.map((team, idx) => (
        <Text key={idx}>{team}</Text>
      ))}
    </Box>
  );
};
