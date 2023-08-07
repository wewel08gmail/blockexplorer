import { useEffect, useState } from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";

import { Alchemy, Network } from "alchemy-sdk";

import {
  LatestBlocks,
  BlockDetail,
  TransactionList,
  TransactionDetail,
} from "./components";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

const NUM_OF_LATEST_BLOCKS = 10;

function App() {
  const [latestBlockNumber, setLatestBlockNumber] = useState();
  const [blockDetail, setBlockDetail] = useState();
  const [txDetail, setTxDetail] = useState();

  const refreshLatestBlockNumber = async () => {
    const res = await alchemy.core.getBlockNumber();
    setLatestBlockNumber(res);
  };

  useEffect(() => {
    refreshLatestBlockNumber();
  }, []);

  const onSelectBlock = async (blockNumber) => {
    const res = await alchemy.core.getBlock(blockNumber);
    setBlockDetail(res);
  };

  const onSelectTransaction = async (tx) => {
    const res = await alchemy.core.getTransactionReceipt(tx);
    setTxDetail(res);
  };

  return (
    <ChakraProvider>
      <Flex direction="column">
        <Flex direction="row">
          <Box w="35%">
            <LatestBlocks
              latestBlockNumber={latestBlockNumber}
              numOfBlock={NUM_OF_LATEST_BLOCKS}
              onSelectBlock={onSelectBlock}
            />
          </Box>
          <Box w="50%">
            <BlockDetail data={blockDetail} />
          </Box>
        </Flex>
        <Flex direction="row">
          <Box w="35%">
            <TransactionList
              transactions={blockDetail?.transactions}
              onSelectTransaction={onSelectTransaction}
            />
          </Box>
          <Box w="50%">
            <TransactionDetail transaction={txDetail} />
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
