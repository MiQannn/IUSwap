import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x384a589CB9De97cd946df0B3C3A05Ce17E4462FB";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Z1crOe4M8apJ47z8xPRzAAzsm7zD4GwD",
  },
};
