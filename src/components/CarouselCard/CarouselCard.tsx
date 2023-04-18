import {
  Stack,
  Card,
  CardBody,
  CardFooter,
  useBoolean,
  Popover,
  PopoverTrigger,
  Text,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import {
  StyledCardHeading,
  StyledCardDescription,
  StyledCardFeatureItem,
} from "./CarouselCard.style";
import { MotionImage } from "@/lib/Image";
import { FunctionComponent } from "react";
import { PRIMARY_COLOR } from "@/styles/GlobalStyles";

export type CarouselCardProps = {
  src: string;
  title: string;
  description: string;
  features: string[];
};

// Need to play with popover. Opening it seems to cause scroll jump to top of page,
// however, artifically extending height of body fixes this behavior
// Check out Collapse component

export const CarouselCard: FunctionComponent<CarouselCardProps> = (
  props: CarouselCardProps
) => {
  const [show, setShow] = useBoolean(false);

  return (
    <Card w="600px" bgColor={PRIMARY_COLOR} variant="unstyled">
      <Stack spacing="1.5rem">
        <CardBody p="0">
          <Stack spacing="1.5rem">
            <MotionImage
              width={600}
              height={346}
              src={props.src}
              alt={props.title}
            />
            {/*@ts-ignore*/}
            <StyledCardHeading as="h5" size="md">
              {props.title.toUpperCase()}
            </StyledCardHeading>
            <StyledCardDescription size="md">
              {props.description}
            </StyledCardDescription>
          </Stack>
        </CardBody>
        <CardFooter p="0">
          <Popover
            flip={false}
            closeOnBlur={false}
            eventListeners={false}
            autoFocus={false}
            preventOverflow={false}
            placement="bottom-start"
          >
            <PopoverTrigger>
              <Text
                size="md"
                onClick={setShow.toggle}
                textAlign="left"
                letterSpacing="1.5px"
                cursor="pointer"
              >
                FEATURES & FINISHES {show ? "-" : "+"}
              </Text>
            </PopoverTrigger>
            <PopoverContent
              w="600px"
              bgColor={PRIMARY_COLOR}
              border="0"
              borderRadius="0"
              mt="-0.5rem"
            >
              <PopoverBody>
                {props.features.map((feature, idx) => (
                  <StyledCardFeatureItem key={idx} fontSize="md">
                    - {feature}
                  </StyledCardFeatureItem>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </CardFooter>
      </Stack>
    </Card>
  );
};

/*
<StyledCardFeatures>
            <MenuButton
              onClick={setShow.toggle}
              w="100%"
              textAlign="left"
              letterSpacing="1.5px"
            >
              FEATURES & FINISHES {show ? "-" : "+"}
            </MenuButton>
            <MenuList>
              {props.features.map((feature, idx) => (
                <StyledCardFeatureItem key={idx}>
                  - {feature}
                </StyledCardFeatureItem>
              ))}
            </MenuList>
          </StyledCardFeatures>
*/
