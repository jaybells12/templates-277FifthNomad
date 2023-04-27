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
import { AnimatePresence, motion } from "framer-motion";

const wholeVariant = {
  enter: ({ width, dir, pos }) =>
    dir > 0
      ? pos > 0
        ? {
            x: 0,
            opacity: 1,
            transition: {
              x: { from: width, duration: 1 },
              opacity: { from: 0, duration: 1 },
            },
          }
        : {
            x: 0,
            opacity: 1,
            transition: {
              x: { from: width, duration: 1 },
            },
          }
      : pos < 0
      ? {
          x: 0,
          opacity: 1,
          transition: {
            x: { from: -width, duration: 1 },
            opacity: { from: 0, duration: 1 },
          },
        }
      : {
          x: 0,
          opacity: 1,
          transition: {
            x: { from: -width, duration: 1 },
          },
        },
  exit: ({ width, dir, pos }) =>
    dir > 0 && pos < 0
      ? {
          x: -width,
          opacity: 0,
          transition: {
            x: { duration: 1 },
            opacity: { duration: 1 },
          },
        }
      : dir < 0 && pos > 0
      ? {
          x: width,
          opacity: 0,
          transition: {
            x: { duration: 1 },
            opacity: { duration: 1 },
          },
        }
      : null,
  hidden: ({ width, dir, pos }) =>
    dir < 0 && pos < 0
      ? {
          opacity: 0,
          transition: { duration: 0 },
        }
      : dir > 0 && pos > 0
      ? {
          opacity: 0,
          transition: { duration: 0 },
        }
      : pos === 0
      ? {
          opacity: 0,
          transition: { duration: 0 },
        }
      : null,
};

const splitVariant = {
  exit: ({ width, dir, pos }) => ({
    opacity: 0,
    transition: {
      opacity: { from: 1, duration: 0.75 },
    },
  }),
  enter: ({ width, dir, pos }) => ({
    opacity: 1,
    transition: {
      opacity: { from: 0, duration: 1.5, delay: 0.75 },
    },
  }),
};

export type CarouselCardProps = {
  imgSrc: string;
  imgHgt: number;
  imgWth: number;
  cardWth: number;
  cardGap: number;
  cardDirection: 1 | -1;
  cardPosition: -1 | 0 | 1;
  title: string;
  text: string;
  split: boolean;
  features?: string[];
} & CardProps;

// Popover is not pushing down content below it, because its absolutely positioned.
// Need to change this in order to emulate template behavior.
// Check out Collapse component

export const CarouselCard: FunctionComponent<CarouselCardProps> = (
  props: CarouselCardProps
) => {
  const [show, setShow] = useBoolean(false);

  const {
    imgSrc,
    title,
    text,
    features,
    imgHgt,
    imgWth,
    cardWth,
    cardGap,
    cardDirection,
    cardPosition,
    split,
    ...rest
  } = props;

  return (
    <AnimatePresence
      custom={{
        width: cardWth + cardGap * 16,
        dir: cardDirection,
        pos: cardPosition,
      }}
      mode={"popLayout"}
    >
      <Card
        as={motion.div}
        display={"flex"}
        flexShrink={0}
        style={{ margin: 0 }}
        w={cardWth}
        bgColor={"inherit"}
        color={split && "white"}
        variant="unstyled"
        key={imgSrc}
        custom={{
          width: cardWth + cardGap * 16,
          dir: cardDirection,
          pos: cardPosition,
        }}
        variants={!split && wholeVariant}
        animate={!split && "enter"}
        exit={!split && "exit"}
        {...rest}
      >
        <motion.div
          key={`${imgSrc}${title}`}
          custom={{
            width: cardWth + cardGap * 16,
            dir: cardDirection,
            pos: cardPosition,
          }}
          variants={split && wholeVariant}
          animate={split && "enter"}
          exit={split && ["exit", "hidden"]}
        >
          <Image
            width={imgWth}
            height={imgHgt}
            src={imgSrc}
            alt={title}
            mb={"1.5rem"}
          />
        </motion.div>
        <motion.div
          key={title}
          custom={{
            width: cardWth + cardGap * 16,
            dir: cardDirection,
            pos: cardPosition,
          }}
          variants={split && splitVariant}
          animate={split && "enter"}
          exit={split && "exit"}
        >
          <Heading
            as={"h5"}
            size={"sm"}
            letterSpacing={"2px"}
            fontWeight={"normal"}
            mb={"1.5rem"}
          >
            {title.toUpperCase()}
          </Heading>
          {/* May need to come up with a better way to handle sizing of text box */}
          <Text
            size={"md"}
            lineHeight={1.8}
            mb={"1.5rem"}
            width={split && "310px"}
            height={split && "90px"}
          >
            {text}
          </Text>
          {features && (
            <CardFooter p="0">
              <Popover
                flip={false}
                closeOnBlur={false}
                eventListeners={false}
                autoFocus={false}
                placement={"bottom-start"}
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
        </motion.div>
      </Card>
    </AnimatePresence>
  );
};
