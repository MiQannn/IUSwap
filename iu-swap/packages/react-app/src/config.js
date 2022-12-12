import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xf929B88060F7Cf94875E11d33D1b57439fc2694E"; //"0x384a589CB9De97cd946df0B3C3A05Ce17E4462FB" //0xAeEFB92eED2D66EF71c7d6fa713A4476ff1419D8 //0xAec6f0c025c72e6fBccD0a2f9592C9011D2d2434 //0xf929B88060F7Cf94875E11d33D1b57439fc2694E

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Z1crOe4M8apJ47z8xPRzAAzsm7zD4GwD",
  },
};
