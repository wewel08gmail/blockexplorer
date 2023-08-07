import { Flex, Link } from "@chakra-ui/react";
import { SectionTitle } from "./SectionTitle";

export const LatestBlocks = ({
  latestBlockNumber,
  numOfBlock,
  onSelectBlock,
}) => (
  <Flex p={4} direction="column" gap={2}>
    <SectionTitle>Latest Blocks</SectionTitle>
    {latestBlockNumber
      ? Array.from({ length: numOfBlock }, (_, i) => latestBlockNumber - i).map(
          (blockNumber) => (
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
              key={blockNumber}
              onClick={() =>
                onSelectBlock(blockNumber)
              }>{`Block #${blockNumber}`}</Link>
          )
        )
      : "No latest block"}
  </Flex>
);
