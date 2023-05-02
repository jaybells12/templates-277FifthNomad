import {
  Card,
  CardFooter,
  useBoolean,
  useDisclosure,
  Text,
  Heading,
  CardProps,
  List,
  ListItem,
  Collapse,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { FunctionComponent } from "react";
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
  hidden: ({ dir, pos }) =>
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
  exit: () => ({
    opacity: 0,
    transition: {
      opacity: { from: 1, duration: 0.75 },
    },
  }),
  enter: () => ({
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

// There is a slight transition in / out animation. Should it be removed?

export const CarouselCard: FunctionComponent<CarouselCardProps> = (
  props: CarouselCardProps
) => {
  const [show, setShow] = useBoolean(false);
  const { isOpen, onToggle } = useDisclosure();

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
        textAlign={"left"}
        variant="unstyled"
        key={imgSrc} //imgSrc
        custom={{
          width: cardWth + cardGap * 16,
          dir: cardDirection,
          pos: cardPosition,
        }}
        variants={!split && wholeVariant}
        // This initial position fixed some image flashing happening at the beginning of the animation cycle
        initial={!split && { x: cardWth + cardGap * 16 }}
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
            fontFamily={"PortraitText"}
            fontSize={"0.875rem"}
            lineHeight={"1.5"}
            letterSpacing={"2px"}
            fontWeight={"normal"}
            mb={"1.5rem"}
          >
            {title.toUpperCase()}
          </Heading>
          {/* May need to come up with a better way to handle sizing of text box */}
          <Text
            fontSize={"1.0625rem"}
            lineHeight={"1.8"}
            mb={"1.5rem"}
            width={split && "310px"}
            height={split && "90px"}
          >
            {text}
          </Text>
          {features && (
            <CardFooter
              p="0"
              flexDirection={"column"}
              alignItems={"flex-start"}
            >
              <Text
                onClick={onToggle}
                variant={"features"}
                cursor={"pointer"}
                marginBottom={"1.5rem"}
              >
                FEATURES & FINISHES{" "}
                <span style={{ fontSize: "22px" }}>{isOpen ? "-" : "+"}</span>
              </Text>
              <Collapse in={isOpen}>
                <List
                  textAlign={"left"}
                  fontSize={"1.0625rem"}
                  lineHeight={"1.5"}
                >
                  {features.map((text, idx) => (
                    <ListItem key={idx}>- {text}</ListItem>
                  ))}
                </List>
              </Collapse>
            </CardFooter>
          )}
        </motion.div>
      </Card>
    </AnimatePresence>
  );
};
