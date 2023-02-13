import { Goerli } from "@usedapp/core";
require ('dotenv').config({path: './../../.env'});


export const ROUTER_ADDRESS = "0x623984d8b86ADEc39738966FBdd3025406f5d2D3";
export const DAPP_CONFIG = { 
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Z1crOe4M8apJ47z8xPRzAAzsm7zD4GwD",
  },
};
