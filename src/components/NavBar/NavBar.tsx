import { NavLogo } from "../NavLogo";
import { NavLink } from "../NavLink";
import { NavMenu } from "../NavMenu";
import { FunctionComponent, useRef } from "react";
import { StyledNavBar } from "./NavBar.style";
import sampleData from "@/data/sampleData";

const links = ["residences", "inquire"];

export const NavBar: FunctionComponent<any> = (props: any) => {
  return (
    <StyledNavBar position="relative" zIndex="2000">
      <NavLogo src={sampleData.NavLogo.src} />
      {links.map((link, idx) => (
        <NavLink key={idx} text={link} />
      ))}
      <NavMenu />
    </StyledNavBar>
  );
};
