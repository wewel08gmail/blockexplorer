import { Alchemy, Network, Utils } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function BlockDetails(props) {
  const { blockNumber } = props;
  const [blockDetails, setBlockDetails] = useState([]);

  useEffect(() => {
    async function getBlock() {
      try {
        const block = await alchemy.core.getBlock(blockNumber);
        setBlockDetails([block]);
        console.log(block);
      } catch (error) {
        console.error('Error fetching block details:', error);
        setBlockDetails([]);
      }
    }
    getBlock();
  }, [blockNumber]);

  // Function to convert _hex value to Gwei
  const convertToGwei = (_hex) => {
    const weiValue = parseInt(_hex, 16);
    const gweiValue = weiValue / 1000000000;
    return gweiValue;
  };
  
  const convertToEther = (_hex) => {
    const weiValue = parseInt(_hex, 16);
    const formattedWei = Utils.formatUnits(weiValue, "ether"); 
    return formattedWei;
  };


  return (
    <div>
      {blockDetails.length > 0 ? (
        blockDetails.map((blockDetail) => (          
          <div key={blockDetail.hash}>
            <p>Hash: {blockDetail.hash}</p>
            <p>Base Fee per Gas:{convertToEther(blockDetail.baseFeePerGas._hex)} eth ( {convertToGwei(blockDetail.baseFeePerGas._hex)} Gwei )</p>
            <p>Extra Data: {blockDetail.extraData} hex</p>
          </div>
        ))
      ) : (
        <div>Loading block details...</div>
      )}
    </div>
  );
}

export default BlockDetails;
