import { CarouselCard } from "../CarouselCard";
import { FunctionComponent } from "react";
import sampleData from "@/data/sampleData";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useCarouselIndex } from "@/lib/useCarouselIndex";

const carouselStyles = {
  active: {
    visibility: "visible",
    transform: "translateX(30%)",
    opacity: "1",
    transition:
      "transform 1s ease-in-out, opacity 1s ease-in-out, visibility 0s",
  },
  inactive: {
    visibility: "hidden",
    opacity: "0",
    transform: "translateX(290%)",
    transition: "transform 1s ease-in-out, opacity 0s 1s, visibility 0s 1s",
  },
  left: {
    visibility: "hidden",
    opacity: "0",
    transform: "translateX(-100%)",
    transition:
      "transform 1s ease-in-out, opacity 1s ease-in-out, visibility 0s 1s",
  },
  right: {
    visibility: "visible",
    opacity: "1",
    transform: "translateX(160%)",
    transition:
      "transform 1s ease-in-out, opacity 0s ease-in-out, visibility 0s",
  },
};

// Lots of issues with carousel.
// Need to throttle controls
// Overflow behavior needs tweaking, hiding scroll bars while allowing card popovers to still be displayed

export const Carousel: FunctionComponent<any> = (props: any) => {
  const [index, carouselLength, next, prev] = useCarouselIndex(
    sampleData.cardsData.length
  );
  return (
    <>
      <Button onClick={next}>PLUS</Button>
      <Text>Next:{index.next}</Text>
      <Text>Current:{index.current}</Text>
      <Text>Prev:{index.prev}</Text>
      <Button sx={carouselStyles.active} onClick={prev}>
        MINUS
      </Button>
      <HStack overflowX="hidden" minW="100vw" maxW="1200px">
        {sampleData.cardsData.map((card, idx) => (
          <Box
            position="relative"
            left={`${idx * -50}%`}
            sx={
              idx === index.current
                ? carouselStyles.active
                : idx === index.prev
                ? carouselStyles.left
                : idx === index.next
                ? carouselStyles.right
                : carouselStyles.inactive
            }
          >
            <CarouselCard
              src={card.image.src}
              title={card.title}
              description={card.description}
              features={card.features}
            />
          </Box>
        ))}
      </HStack>
    </>
  );
};
