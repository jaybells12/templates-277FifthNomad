import { FunctionComponent, useRef, useEffect } from "react";
import { InquireContact, InquireContactProps } from "../InquireContact";
import { InquireForm, InquireFormProps } from "../InquireForm";
import { Container, Flex } from "@chakra-ui/react";
import { useInView, animate } from "framer-motion";

export type InquireBlockProps = {
  contact: InquireContactProps;
  form: InquireFormProps;
};

export const InquireBlock: FunctionComponent<InquireBlockProps> = (
  props: InquireBlockProps
) => {
  const { contact, form } = props;
  const containerRef = useRef();
  const isInView = useInView(containerRef, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      animate(
        containerRef.current,
        { y: [400, 0] },
        { duration: 0.4, ease: "easeOut" }
      );
    }
  }, [isInView]);

  return (
    <Container
      ref={containerRef}
      transform={"translateY(400px)"}
      as={"section"}
      id={"inquire"}
      variant={"section"}
    >
      <Flex
        justify={"center"}
        align={"center"}
        direction={["column-reverse", null, "row"]}
        gap={["6rem", null, "1.5rem", "3rem", "6rem"]}
      >
        <InquireContact
          logo={contact.logo}
          address={contact.address}
          contactInfo={contact.contactInfo}
          teamsInfo={contact.teamsInfo}
        />
        <InquireForm
          fromRanges={form.fromRanges}
          priceRanges={form.priceRanges}
        />
      </Flex>
    </Container>
  );
};
