import { Link } from "@chakra-ui/next-js";
import { VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import downArrow from "../../../public/Down-Arrow.svg";
import { FunctionComponent } from "react";

export type CallToActionProps = {
  tagline: string;
  [x: string]: any;
};

export const CallToAction: FunctionComponent<CallToActionProps> = (
  props: CallToActionProps
) => {
  return (
    <VStack width="100%" align="center" {...props}>
      <Text
        color="white"
        whiteSpace="pre"
        textAlign="center"
        lineHeight="1.4"
        fontWeight={"medium"}
        fontSize="1.75rem"
      >
        {props.tagline}
      </Text>
      <Link href="#second" padding="2rem">
        <motion.img
          src={downArrow.src}
          style={{ marginInline: "auto" }}
          animate={{ y: [0, 0, -7, 0, -5, 0, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
            type: "keyframes",
          }}
        ></motion.img>
      </Link>
    </VStack>
  );
};
