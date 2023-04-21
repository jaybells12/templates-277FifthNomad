import styled from "styled-components";
import { Container } from "@chakra-ui/react";
import { ACCENT_COLOR } from "@/styles/GlobalStyles";

export const StyledTextBar = styled(Container)`
  background-color: ${ACCENT_COLOR};
  color: #fff;
  line-height: 1.5;
  letter-spacing: 2.5px;
  font-size: 1.25rem;
  padding: 3rem 11rem;
  width: 100%;
  max-width: unset;
`;
