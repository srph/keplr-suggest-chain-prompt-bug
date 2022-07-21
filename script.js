import { SigningStargateClient } from "@cosmjs/stargate";
import { chainInfo } from "./script-chain-info";

(async function () {
  const $connect = document.querySelector(".js-keplr-connect");

  const handleClick = async () => {
    if (!window.keplr) {
      return alert("Please install keplr extension");
    }

    const $address = document.querySelector(".js-account-address");

    const $balance = document.querySelector(".js-account-balance");

    if (window.keplr.experimentalSuggestChain) {
      console.log("[Suggest chain] attempting");
      try {
        await window.keplr.experimentalSuggestChain(chainInfo);
        console.log("[Suggest chain] success");
      } catch (e) {
        console.log("[Suggest chain] error");
        alert("Failed to use suggest chain", e);
      }
    }

    await window.keplr.enable(chainInfo.chainId);

    const offlineSigner = window.keplr.getOfflineSigner(chainInfo.chainId);

    const stargate = new SigningStargateClient(chainInfo.rpc, offlineSigner);

    let key;
    try {
      key = await keplr.getKey(chainInfo.chainId);
      $address.textContent = key.bech32Address;
    } catch (e) {
      return alert("Error occurred trying to get wallet address");
    }

    try {
      const balances = await stargate.getAllBalances(key.bech32Address);
      $balances.innerHTML = JSON.stringify(balances);
    } catch (e) {
      alert("Error occurred trying to get wallet balances");
    }

    $connect.textContent = "Connected";
  };

  $connect.addEventListener("click", handleClick);
})();
