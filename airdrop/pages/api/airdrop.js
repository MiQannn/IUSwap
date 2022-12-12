import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../contract";

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-goerli.g.alchemy.com/v2/Z1crOe4M8apJ47z8xPRzAAzsm7zD4GwD"
);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export default async function (req, res) {
  if (req.method != "POST")
    return res.status(400).json({ message: "Please use POST request" });
  const txn = await contract.functions.mint(
    req.body.address,
    ethers.utils.parseEther("5")
  );

  await txn.wait();

  res.json({
    message: `Transaction completed, contract address ${contractAddress}`,
  });
}