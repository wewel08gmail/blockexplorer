import { Flex, Link } from "@chakra-ui/react";
import { SectionTitle } from "./SectionTitle";

export const TransactionList = ({ transactions, onSelectTransaction }) => (
  <Flex p={4} direction="column" gap={2}>
    <SectionTitle>Block transactions</SectionTitle>
    {transactions
      ? transactions.map((tx) => (
          <Link
            px={2}
            py={1}
            fontSize="sm"
            borderRadius={5}
            border="1px"
            borderColor="gray.200"
            _hover={{
              color: "white",
              backgroundColor: "teal",
            }}
            key={tx}
            onClick={() => onSelectTransaction(tx)}>{`${tx}`}</Link>
        ))
      : "No Transaction"}
  </Flex>
);
