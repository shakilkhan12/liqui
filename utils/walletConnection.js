import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // MetaMask is installed
  window.ethereum.request({ method: "eth_requestAccounts" }); // prompt user to connect
  web3 = new Web3(window.ethereum);
} else {
  // MetaMask is not installed or user is not connected
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID" // or use any other Ethereum node
  );
  web3 = new Web3(provider);
}

export default web3;
