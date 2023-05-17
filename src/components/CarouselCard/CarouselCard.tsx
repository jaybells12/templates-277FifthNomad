import {
  Card,
  CardFooter,
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
import { FunctionComponent, MutableRefObject } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

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
  img: {
    width: number;
    height: number;
    src: string;
  };
  card: {
    width: number;
    gap: number;
    position: -1 | 0 | 1;
    direction: 1 | -1;
  };

  title: string;
  text: string;
  split: boolean;
  aniRef: MutableRefObject<boolean>;
  dragFn?: (e: MouseEvent | TouchEvent | PointerEvent, i: PanInfo) => void;
  features?: string[];
} & CardProps;

export const CarouselCard: FunctionComponent<CarouselCardProps> = (
  props: CarouselCardProps
) => {
  const { isOpen, onToggle } = useDisclosure();
  const large = useBreakpointValue({ base: true, lg: false });
  const cardVariants = useBreakpointValue({
    base: "singleColumn",
    md: "multiColumn",
  });

  const { img, card, title, text, features, split, aniRef, dragFn, ...rest } =
    props;

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!aniRef.current) {
      dragFn(e, info);
    }
  };

  return (
    <AnimatePresence
      custom={{
        gap: card.gap * 16,
        dir: card.direction,
        pos: card.position,
      }}
      mode={"popLayout"}
    >
      <Card
        as={motion.div}
        color={split && "white"} // <----
        variant={cardVariants}
        key={img.src}
        custom={{
          gap: card.gap * 16,
          dir: card.direction,
          pos: card.position,
        }}
        variants={!split && wholeVariant}
        initial={!split && { opacity: 0 }}
        animate={!split && "enter"}
        exit={!split && "exit"}
        onAnimationComplete={
          !split &&
          ((def: string) => {
            if (def === "enter") {
              aniRef.current = false;
            }
          })
        }
        {...rest}
      >
        <CardHeader
          as={motion.div}
          key={`${img.src}${title}`}
          drag={split && large ? "x" : false}
          dragConstraints={{ left: -100, right: 100 }}
          //@ts-ignore -- onDragEnd is defaulting to React type instead of Framer Motion type
          onDragEnd={handleDragEnd}
          dragSnapToOrigin={true}
          dragElastic={0.2}
          style={{
            touchAction: "none",
          }}
          custom={{
            gap: card.gap * 16,
            dir: card.direction,
            pos: card.position,
          }}
          variants={split && wholeVariant}
          initial={split && { opacity: 0 }}
          animate={split && "enter"}
          exit={split && ["exit", "hidden"]}
        >
          <Image
            priority={true}
            loading={"eager"}
            width={img.width}
            height={img.height}
            src={img.src}
            alt={title}
            sx={{
              objectFit: "cover",
              height: "auto",
              width: "auto",
              minWidth: "312px",
              minHeight: "208px",
              pointerEvents: "none",
            }}
          />
        </CardHeader>
        <CardBody
          as={motion.div}
          key={title}
          custom={{
            gap: card.gap * 16,
            dir: card.direction,
            pos: card.position,
          }}
          initial={split && { opacity: 0 }}
          variants={split && splitVariant}
          animate={split && "enter"}
          exit={split && "exit"}
          onAnimationComplete={
            split &&
            ((def) => {
              if (def === "enter") {
                aniRef.current = false;
              }
            })
          }
        >
          <Heading as={"h5"} variant={"card"}>
            {title.toUpperCase()}
          </Heading>
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
              marginTop={"1.5rem"}
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
