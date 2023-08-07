import { Flex, Text } from "@chakra-ui/react";
import { SectionTitle } from "./SectionTitle";

const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

const truncateEthAddress = (address) => {
  const match = address.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

const KEYS = [
  ["hash", (value) => truncateEthAddress(value)],
  ["parentHash", (value) => truncateEthAddress(value)],
  ["number", (value) => value],
  ["timestamp", (value) => value],
  ["nonce", (value) => value],
  ["difficulty", (value) => value],
  ["miner", (value) => truncateEthAddress(value)],
  ["extraData", (value) => value],
  ["transactions", (value) => `${value.length} transactions`],
];

export const BlockDetail = ({ data }) => (
  <Flex p={4} direction="column">
    <SectionTitle>Block Detail</SectionTitle>
    {data
      ? KEYS.map(([k, f]) => (
          <Flex key={k} justifyContent="space-between">
            <Text as="b">{k}</Text>
            <Text>{f(data[k])}</Text>
          </Flex>
        ))
      : "No selected block"}
  </Flex>
);
