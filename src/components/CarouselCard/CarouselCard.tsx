import {
  Card,
  CardFooter,
  useBoolean,
  Popover,
  PopoverTrigger,
  Text,
  Heading,
  PopoverContent,
  PopoverBody,
  CardProps,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { FunctionComponent, forwardRef } from "react";

export type CarouselCardProps = {
  imgSrc: string;
  imgHgt: number;
  imgWth: number;
  cardWth: number | string;
  title: string;
  text: string;
  features?: string[];
} & CardProps;

// Need to play with popover. Opening it seems to cause scroll jump to top of page,
// Check out Collapse component

export const CarouselCard: FunctionComponent<CarouselCardProps> = forwardRef(
  (props: CarouselCardProps, ref) => {
    const [show, setShow] = useBoolean(false);

    const { imgSrc, title, text, features, imgHgt, imgWth, cardWth, ...rest } =
      props;

    return (
      <Card
        w={cardWth}
        bgColor={"inherit"}
        variant="unstyled"
        {...rest}
        ref={ref}
      >
        <Image
          width={imgWth}
          height={imgHgt}
          src={imgSrc}
          alt={title}
          mb={"1.5rem"}
        />
        <Heading
          as={"h5"}
          size={"sm"}
          letterSpacing={"2px"}
          fontWeight={"normal"}
          mb={"1.5rem"}
        >
          {title.toUpperCase()}
        </Heading>
        <Text size={"md"} lineHeight={1.8} mb={"1.5rem"}>
          {text}
        </Text>
        {features && (
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
                  letterSpacing="1.5px"
                  cursor="pointer"
                >
                  FEATURES & FINISHES {show ? "-" : "+"}
                </Text>
              </PopoverTrigger>
              <PopoverContent
                width={cardWth}
                bgColor={"inherit"}
                border={"none"}
                boxShadow={"none"}
                mt={"1rem"}
              >
                <PopoverBody p={"0"}>
                  {features.map((feature, idx) => (
                    <Text key={idx} fontSize={"md"} lineHeight={1.8}>
                      - {feature}
                    </Text>
                  ))}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </CardFooter>
        )}
      </Card>
    );
  }
);
