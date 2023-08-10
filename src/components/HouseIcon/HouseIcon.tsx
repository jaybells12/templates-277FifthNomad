import { FunctionComponent } from "react";
import { Icon, IconProps } from "@chakra-ui/react";

export const HouseIcon: FunctionComponent<any> = (props: IconProps) => {
  return (
    <Icon width="25" height="19" viewBox="0 0 25 19" fill="none">
      <path
        d="M16.7298 11.9775H8.31445V14.1854H16.7298V11.9775Z"
        fill="#3B3D47"
      ></path>
      <path
        d="M16.7298 8.68953H8.3144V10.8974H16.7298V8.68953Z"
        fill="#3B3D47"
      ></path>
      <path
        d="M12.6411 0L0 7.19401V9.79384H1.93663V18.7326H23.0282V9.79384H25V7.26519L12.6411 0ZM20.5981 16.4557H4.50651V7.4809L12.6402 2.70877L20.5981 7.4809V16.4557Z"
        fill="#3B3D47"
      ></path>
    </Icon>
  );
};
