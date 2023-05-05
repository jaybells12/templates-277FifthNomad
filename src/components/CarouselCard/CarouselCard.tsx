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
  CardBody,
  CardHeader,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { FunctionComponent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

//What if i pass gap instead of width?
const wholeVariant = {
  enter: ({ gap, dir, pos }) =>
    dir > 0
      ? pos > 0
        ? {
            x: 0,
            opacity: 1,
            transition: {
              x: { from: `calc(100% + ${gap}px)`, duration: 1 },
              opacity: { from: 0, duration: 1 },
            },
          }
        : {
            x: 0,
            opacity: 1,
            transition: {
              x: { from: `calc(100% + ${gap}px)`, duration: 1 },
              opacity: { from: 1, duration: 1 },
            },
          }
      : pos < 0
      ? {
          x: 0,
          opacity: 1,
          transition: {
            x: {
              from: `calc((100% + ${gap}px) * -1)`,
              duration: 1,
              ease: "linear",
            },
            opacity: { from: 0, duration: 1 },
          },
        }
      : {
          x: 0,
          opacity: 1,
          transition: {
            x: {
              from: `calc((100% + ${gap}px) * -1)`,
              duration: 1,
              ease: "linear",
            },
            opacity: { from: 1, duration: 1 },
          },
        },
  exit: ({ gap, dir, pos }) =>
    dir > 0 && pos < 0
      ? {
          x: `calc((100% + ${gap}px) * -1)`,
          opacity: 0,
          transition: {
            x: { duration: 1 },
            opacity: { duration: 1 },
          },
        }
      : dir < 0 && pos > 0
      ? {
          x: `calc(100% + ${gap}px)`,
          opacity: 0,
          transition: {
            x: {
              from: 0,
              duration: 1,
              // Could be fine tuned, but I think it'll do. Something with Chakra + Framer-Motion
              // messes up easing consistency for mount and unmount animations
              ease: [0.15, 0.3, 0.5, 1],
            },
            opacity: { duration: 1 },
          },
        }
      : {
          transition: {
            x: { duration: 1 },
            opacity: { duration: 1 },
          },
        },
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

export const CarouselCard: FunctionComponent<CarouselCardProps> = (
  props: CarouselCardProps
) => {
  const { isOpen, onToggle } = useDisclosure();
  const breakpoint = useBreakpointValue({ base: false, md: true });
  const cardVariants = useBreakpointValue({
    base: "singleColumn",
    md: "multiColumn",
  });

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
        gap: cardGap * 16,
        dir: cardDirection,
        pos: cardPosition,
      }}
      mode={"popLayout"}
    >
      <Card
        as={motion.div}
        color={split && "white"} // <----
        variant={cardVariants}
        key={imgSrc}
        custom={{
          gap: cardGap * 16,
          dir: cardDirection,
          pos: cardPosition,
        }}
        variants={!split && wholeVariant}
        animate={!split && "enter"}
        exit={!split && "exit"}
        {...rest}
      >
        <CardHeader
          as={motion.div}
          key={`${imgSrc}${title}`}
          custom={{
            gap: cardGap * 16,
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
            sx={{
              objectFit: "cover",
              height: "auto",
              width: "auto",
            }}
          />
          {breakpoint && <h1>TEST</h1>}
        </CardHeader>
        <CardBody
          as={motion.div}
          key={title}
          custom={{
            gap: cardGap * 16,
            dir: cardDirection,
            pos: cardPosition,
          }}
          variants={split && splitVariant}
          animate={split && "enter"}
          exit={split && "exit"}
        >
          <Heading as={"h5"} variant={"card"} mb={["0.75rem", null, "1.5rem"]}>
            {title.toUpperCase()}
          </Heading>
          {/* May need to come up with a better way to handle sizing of text box */}
          <Text
            variant={"card"}
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
                <span style={{ fontSize: "clamp(18px, 2.5vw, 22px)" }}>
                  {isOpen ? "-" : "+"}
                </span>
              </Text>
              <Collapse in={isOpen}>
                <List
                  textAlign={"left"}
                  fontSize={"clamp(0.875rem, 3vw, 1.0625rem)"}
                  lineHeight={"1.5"}
                >
                  {features.map((text, idx) => (
                    <ListItem key={idx}>- {text}</ListItem>
                  ))}
                </List>
              </Collapse>
            </CardFooter>
          )}
        </CardBody>
      </Card>
    </AnimatePresence>
  );
};
