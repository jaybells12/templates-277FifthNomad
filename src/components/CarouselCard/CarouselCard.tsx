import {
  Stack,
  Card,
  CardBody,
  CardFooter,
  MenuList,
  MenuButton,
  useBoolean,
} from "@chakra-ui/react";
import {
  StyledCardImage,
  StyledCardHeading,
  StyledCardDescription,
  StyledCardFeatures,
  StyledCardFeatureItem,
} from "./CarouselCard.style";
import { FunctionComponent } from "react";

export type CarouselCardProps = {
  src: string;
  title: string;
  description: string;
  features: string[];
};

// Instead of menu, Use Popover;

export const CarouselCard: FunctionComponent<CarouselCardProps> = (
  props: CarouselCardProps
) => {
  const [show, setShow] = useBoolean(false);

  return (
    <Card w="600px" ml="5rem">
      <Stack>
        <CardBody p="0">
          <Stack>
            <StyledCardImage src={props.src} />
            {/*@ts-ignore*/}
            <StyledCardHeading as="h5" size="sm">
              {props.title}
            </StyledCardHeading>
            <StyledCardDescription size="sm">
              {props.description}
            </StyledCardDescription>
          </Stack>
        </CardBody>
        <CardFooter p="0">
          {/*@ts-ignore*/}
          <StyledCardFeatures
            flip="false"
            matchWidth="true"
            preventOverflow="false"
          >
            <MenuButton onClick={setShow.toggle} w="100%" textAlign="left">
              Features & Finishes {show ? "-" : "+"}
            </MenuButton>
            <MenuList>
              {props.features.map((feature, idx) => (
                <StyledCardFeatureItem key={idx}>
                  - {feature}
                </StyledCardFeatureItem>
              ))}
            </MenuList>
          </StyledCardFeatures>
        </CardFooter>
      </Stack>
    </Card>
  );
};
