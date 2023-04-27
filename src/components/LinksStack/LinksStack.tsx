import { Link } from "@chakra-ui/next-js";
import { Divider, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
/*
Need to rename this, *Block convention is reserved for fullpage sections
*/
export type LinksStackProps = {
  links: string[];
};

export const LinksStack: FunctionComponent<LinksStackProps> = (
  props: LinksStackProps
) => {
  return (
    <VStack
      align="flex-start"
      divider={<Divider color={"brand.accent"} />}
      gap={"0.5rem"}
    >
      {props.links.map((link, idx) => (
        <motion.div
          key={idx}
          whileHover={{ x: 15 }}
          transition={{
            duration: 0.5,
            type: "tween",
          }}
        >
          <Link
            href={`#${link}`}
            fontSize="0.75rem"
            letterSpacing="2px"
            lineHeight="1.8"
            style={{ textDecoration: "none" }}
          >
            {link.toUpperCase()}
          </Link>
        </motion.div>
      ))}
    </VStack>
  );
};
