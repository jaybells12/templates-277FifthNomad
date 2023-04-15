import { StyledTextBar } from "./TextBar.style";
import { FunctionComponent } from "react";

export type TextBarProps = {
  text: string;
};

export const TextBar: FunctionComponent<TextBarProps> = (
  props: TextBarProps
) => {
  return (
    <StyledTextBar centerContent={true}>
      {props.text.toUpperCase()}
    </StyledTextBar>
  );
};
