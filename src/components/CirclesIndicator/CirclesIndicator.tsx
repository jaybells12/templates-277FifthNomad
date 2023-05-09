import {
  useBreakpointValue,
  Flex,
  Circle,
  FlexProps,
  useStyleConfig,
} from "@chakra-ui/react";

function Circles(props: any) {
  const { variant, ...rest } = props;
  const styles = useStyleConfig("Circle", { variant });

  return <Circle __css={styles} {...rest} />;
}

export type CirclesIndicatorProps = {
  length: number;
  index: {
    current: number;
    next: number;
    prev: number;
  };
  variant?: "mobileLight" | "mobileDark";
} & FlexProps;

export const CirclesIndicator = (props: CirclesIndicatorProps) => {
  const { length, index, variant, ...rest } = props;
  const mobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex gap={"1.25rem"} zIndex={"5"} alignSelf={"center"} {...rest}>
      {[...Array(length)].map((x, idx: number) => (
        <Circles
          key={idx}
          variant={variant}
          backgroundColor={
            mobile ? null : index.current === idx ? "white" : null
          }
          opacity={
            mobile &&
            (variant === "mobileLight"
              ? index.current === idx
                ? "1"
                : "0.5"
              : index.current === idx
              ? "0.5"
              : "1")
          }
        />
      ))}
    </Flex>
  );
};
