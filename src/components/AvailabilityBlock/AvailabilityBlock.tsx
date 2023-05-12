import { FunctionComponent, useState, useRef, useEffect } from "react";
import {
  Container,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { useInView, animate } from "framer-motion";

export type AvailabilityBlockProps = {
  data: {
    [key: string]: string | { src: string };
  }[];
};

/* This component has one condition.
 * If a value of a table cell is an object, a button is rendered as an anchor, linked to the string value of the src property
 */

export const AvailabilityBlock: FunctionComponent<AvailabilityBlockProps> = (
  props: AvailabilityBlockProps
) => {
  const { data } = props;
  const isMediumWidth = useBreakpointValue({ base: false, md: true });
  const containerRef = useRef();
  const isInView = useInView(containerRef, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      animate(
        containerRef.current,
        { y: [400, 0] },
        { duration: 0.4, ease: "easeOut" }
      );
    }
  }, [isInView]);

  //Do i need to useState here or can I use useRef?
  const [dir, setDir] = useState(Object.keys(data).map(() => ""));

  const sortData = (key: string, index: number) => {
    const direction = dir[index] || "asc";
    const multiplier = direction === "asc" ? 1 : -1;

    data.sort((a, b) => {
      if (a[key] > b[key]) return 1 * multiplier;
      if (a[key] < b[key]) return -1 * multiplier;
      return 0;
    });

    const newArray = [...dir];
    newArray[index] = direction === "asc" ? "desc" : "asc";
    setDir(newArray);
  };

  return (
    <Container
      ref={containerRef}
      transform={"translateY(400px)"}
      as={"section"}
      id={"availability"}
      variant={"section"}
      paddingInline={[null, null, "2rem", "4rem", "8rem"]} //
    >
      <Heading
        as={"h2"}
        marginBottom={[null, null, "3rem"]}
        marginLeft={["1.75rem", null, "0"]}
        variant={"title"}
        color={"brand.trim"}
      >
        Availability
      </Heading>
      <TableContainer>
        <Table variant={["mobile", null, "responsive"]}>
          {isMediumWidth && (
            <Thead borderBottom={"1px solid #cecece"}>
              <Tr>
                {Object.keys(data[0]).map((title, idx) => (
                  <Th key={idx} onClick={() => sortData(title, idx)}>
                    {title}
                  </Th>
                ))}
              </Tr>
            </Thead>
          )}
          <Tbody>
            {data.map((row, idx) => (
              <Tr key={idx} _hover={{ bgColor: "brand.tableHover" }}>
                {Object.entries(row).map((pair, index) => (
                  <Td
                    key={index}
                    data-label={pair[0]}
                    _before={
                      typeof pair[1] === "object" && { content: "unset" }
                    }
                  >
                    {typeof pair[1] === "object" ? (
                      isMediumWidth ? (
                        <Button
                          as={"a"}
                          width={"100%"}
                          href={pair[1].src}
                          fontSize={"clamp(0.5rem, 1.5vw, 0.75rem)"}
                          target={"_blank"}
                        >
                          FLOORPLAN
                        </Button>
                      ) : (
                        <Link
                          href={pair[1].src}
                          target={"_blank"}
                          fontSize={"clamp(0.5625rem, 2.5vw, 0.6875rem)"}
                          letterSpacing={"1px"}
                          textDecoration={"underline"}
                          _hover={{ textDecoration: "none" }}
                        >
                          FLOOR PLAN
                        </Link>
                      )
                    ) : (
                      pair[1]
                    )}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};
