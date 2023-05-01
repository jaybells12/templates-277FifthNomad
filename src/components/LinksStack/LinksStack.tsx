import { Link } from "@chakra-ui/next-js";
import { Divider, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { useScrollEasing } from "@/lib/useScrollEasing";

export type LinksStackProps = {
  links: string[];
};

export const LinksStack: FunctionComponent<LinksStackProps> = (
  props: LinksStackProps
) => {
  const handleScroll = useScrollEasing();

  return (
    <VStack
      align="flex-start"
      divider={<Divider color={"#cecece"} />}
      gap={"0.75rem"}
      width={"100%"}
    >
      {props.links.map((link, idx) => (
        <motion.div
          key={idx}
          whileHover={{ x: 10 }}
          transition={{
            duration: 0.3,
            type: "tween",
          }}
        >
          <Link
            href={`#${link}`}
            fontSize="0.875rem"
            letterSpacing="2px"
            lineHeight="1.8"
            style={{ textDecoration: "none" }}
            onClick={handleScroll}
          >
            {link.toUpperCase()}
          </Link>
        </motion.div>
      ))}
    </VStack>
  );
};
