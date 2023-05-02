import { FunctionComponent, useState } from "react";
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
} from "@chakra-ui/react";
import { PRIMARY_COLOR, TRIM_COLOR } from "@/styles/GlobalStyles";

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
      as={"section"}
      id={"availability"}
      variant={"section"}
      paddingInline={"7rem"}
    >
      <Heading
        as={"h2"}
        marginBottom={"5rem"}
        variant={"title"}
        color={"brand.trim"}
      >
        Availability
      </Heading>
      <TableContainer>
        <Table variant={"unstyled"}>
          <Thead borderBottom={"1px solid #cecece"}>
            <Tr>
              {Object.keys(data[0]).map((title, idx) => (
                <Th
                  key={idx}
                  onClick={() => sortData(title, idx)}
                  fontFamily={"PortraitText"}
                  fontSize={"0.75rem"}
                  lineHeight={"1.6"}
                  letterSpacing={"2px"}
                  textAlign={"center"}
                  cursor={"pointer"}
                  paddingBottom={"21px"}
                >
                  {title}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody
            borderBottom={"1px solid #cecece"}
            paddingBlock={"5rem"}
            _before={{
              content: `""`,
              display: "block",
              height: "2rem",
            }}
            _after={{
              content: `""`,
              display: "block",
              height: "2rem",
            }}
          >
            {data.map((row, idx) => (
              <Tr
                key={idx}
                _hover={{ bgColor: "brand.tableHover" }}
                transition={"background-color 0.4s ease-in-out"}
              >
                {Object.values(row).map((value, index) => (
                  <Td
                    key={index}
                    textAlign={"center"}
                    padding={"8px 10px 8px"}
                    fontWeight={"light"}
                    fontSize={"1.0625rem"}
                    lineHeight={"1.7"}
                  >
                    {typeof value === "object" ? (
                      <Button
                        as={"a"}
                        width={"80%"}
                        href={value.src}
                        target={"_blank"}
                      >
                        FLOORPLAN
                      </Button>
                    ) : (
                      value
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
