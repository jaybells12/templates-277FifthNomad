import styled from "styled-components";
import { Link } from "@chakra-ui/next-js";

export const StyledNavLink = styled(Link)`
  font-size: 0.7rem;
  letter-spacing: 2px;
  margin: 0 1.5rem;
  &:last-of-type {
    margin-right: 0;
  }
`;
