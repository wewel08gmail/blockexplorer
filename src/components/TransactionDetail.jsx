import { Flex, Text } from "@chakra-ui/react";
import { SectionTitle } from "./SectionTitle";

const KEYS = ["to", "from", "blockHash", "transactionHash", "blockNumber"];

export const TransactionDetail = ({ transaction }) => (
  <Flex p={4} direction="column">
    <SectionTitle>Transaction Detail</SectionTitle>
    {transaction
      ? KEYS.map((k) => (
          <Flex key={k} justifyContent="space-between">
            <Text as="b">{k}</Text>
            <Text>{transaction[k]}</Text>
          </Flex>
        ))
      : "No selected transaction"}
  </Flex>
);
