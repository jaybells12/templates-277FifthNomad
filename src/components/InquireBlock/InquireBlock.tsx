import { FunctionComponent } from "react";
import { InquireContact } from "../InquireContact";
import { InquireForm } from "../InquireForm";
import { Container } from "@chakra-ui/react";

export const InquireBlock: FunctionComponent<any> = (props: any) => {
  return (
    <Container as={"section"} variant={"section"}>
      <InquireContact logo={} address={} contactInfo={} teamsInfo={} />
      <InquireForm fromRanges={} priceRanges={} />
    </Container>
  );
};
