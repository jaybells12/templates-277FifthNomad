import styled from "styled-components";
import { Link } from "@chakra-ui/next-js";

export const StyledNavMenuItem = styled(Link)`
  font-size: 1.5rem;
  letter-spacing: 2px;
  &:hover {
    text-decoration: underline;
  }
  &:first-child {
    margin-top: 7rem;
  }
`;
