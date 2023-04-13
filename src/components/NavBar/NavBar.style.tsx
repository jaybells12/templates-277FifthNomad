import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { PRIMARY_COLOR } from "@/styles/GlobalStyles";

export const StyledNavBar = styled(Flex)`
  background-color: ${PRIMARY_COLOR};
  height: 64px;
  flex-direction: row;
  align-items: center;
`;
