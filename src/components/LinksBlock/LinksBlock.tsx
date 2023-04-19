import { StyledLinksBlock } from "./LinksBlock.style";
import { Link } from "@chakra-ui/next-js";
import { Divider, textDecoration } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { ACCENT_COLOR } from "@/styles/GlobalStyles";

export type LinksBlockProps = {
  links: string[];
};

export const LinksBlock: FunctionComponent<LinksBlockProps> = (
  props: LinksBlockProps
) => {
  return (
    <StyledLinksBlock
      align="flex-start"
      divider={<Divider color={ACCENT_COLOR} />}
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
    </StyledLinksBlock>
  );
};
