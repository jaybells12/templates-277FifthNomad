import { Link } from "@chakra-ui/next-js";
import { Divider, FlexboxProps, TextProps, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { useScrollEasing } from "@/lib/useScrollEasing";

export type LinksStackProps = {
  links: string[];
} & FlexboxProps &
  TextProps;

export const LinksStack: FunctionComponent<LinksStackProps> = (
  props: LinksStackProps
) => {
  const handleScroll = useScrollEasing();
  const { links, ...rest } = props;
  return (
    <VStack
      align={["center", null, "flex-start"]}
      order={["1", null, "0"]}
      divider={<Divider color={"#cecece"} />}
      gap={["0.5rem", null, "0.75rem"]}
      width={["50%", null, "100%"]}
      {...rest}
    >
      {links.map((link, idx) => (
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
            fontSize="clamp(0.75rem,2.5vw,0.875rem)"
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
