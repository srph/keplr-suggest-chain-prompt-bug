const chainInfo = {
  rpc: "https://test-rpc.com",
  rest: "https://test-rpc.com",
  chainId: "TEST-RPC",
  chainName: "TEST-CHAIN",
  stakeCurrency: {
    coinDenom: "TEST",
    coinMinimalDenom: "utest",
    coinDecimals: 6,
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "test",
    bech32PrefixAccPub: "testpub",
    bech32PrefixValAddr: "testvaloper",
    bech32PrefixValPub: "testvaloperpub",
    bech32PrefixConsAddr: "testvalcons",
    bech32PrefixConsPub: "testvalconspub",
  },
  currencies: [
    {
      coinDenom: "TEST",
      coinMinimalDenom: "utest",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "TEST",
      coinMinimalDenom: "utest",
      coinDecimals: 6,
    },
  ],
  coinType: 118,
  features: ["stargate", "ibc-transfer", "ibc-go"],
  gasPriceStep: {
    low: 0,
    average: 0.025,
    high: 0.04,
  },
};

export { chainInfo };
