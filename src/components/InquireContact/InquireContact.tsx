import { FunctionComponent } from "react";
import { Logo } from "../Logo";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
    <VStack alignItems={"flex-start"} gap={"2rem"}>
      <Logo
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
      />
      <Box>
        <motion.div
          whileHover={{ x: 10 }}
          transition={{
            duration: 0.3,
            type: "tween",
          }}
        >
          <Heading as={"h6"} variant={"contact"}>
            CONTACT
          </Heading>
        </motion.div>
        {contactInfo.map((contact, idx) => (
          <Text key={idx} variant={"contact"}>
            {contact}
          </Text>
        ))}
      </Box>
      <Box>
        <motion.div
          whileHover={{ x: 10 }}
          transition={{
            duration: 0.3,
            type: "tween",
          }}
        >
          <Heading as={"h6"} variant={"contact"}>
            SALES OFFICE
          </Heading>
        </motion.div>
        <Text variant={"contact"}>{address}</Text>
      </Box>
      <Box>
        <motion.div
          whileHover={{ x: 10 }}
          transition={{
            duration: 0.3,
            type: "tween",
          }}
        >
          <Heading as={"h6"} variant={"contact"}>
            EXCLUSIVE SALES & MARKETING
          </Heading>
        </motion.div>
        {teamsInfo.map((team, idx) => (
          <Text key={idx} variant={"contact"} marginBottom={"1rem"}>
            {team}
          </Text>
        ))}
      </Box>
    </VStack>
  );
};
