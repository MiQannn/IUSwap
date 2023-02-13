import { ethers } from "ethers";
import { tokenABI, tokenAddress } from "../../contract";

const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_API);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contract = new ethers.Contract(tokenAddress, tokenABI, wallet);

export default async function (req, res) {
  if (req.method != "POST")
    return res.status(400).json({ message: "Please use POST request" });
  const txn = await contract.functions.mint(
    req.body.address,
    ethers.utils.parseEther("5")
  );

  await txn.wait();

  res.json({
    message: `Transaction completed, contract address ${tokenAddress}`,
  });
}
