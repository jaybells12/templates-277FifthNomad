import { FunctionComponent } from "react";
import { InquireContact, InquireContactProps } from "../InquireContact";
import { InquireForm, InquireFormProps } from "../InquireForm";
import { Container, Flex } from "@chakra-ui/react";

export type InquireBlockProps = {
  contact: InquireContactProps;
  form: InquireFormProps;
};

export const InquireBlock: FunctionComponent<InquireBlockProps> = (
  props: InquireBlockProps
) => {
  const { contact, form } = props;
  return (
    <Container
      as={"section"}
      id={"inquire"}
      variant={"section"}
      // marginBottom={"10rem"}
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
