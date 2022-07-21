const strideMainCurrency = {
  coinDenom: "STRD",
  coinMinimalDenom: "ustrd",
  coinDecimals: 6,
};

const strideExtraCurrencies = [
  {
    coinDenom: "ATOM",
    coinMinimalDenom: "uatom",
    coinDecimals: 6,
  },
  {
    coinDenom: "JUNO",
    coinMinimalDenom: "ujuno",
    coinDecimals: 6,
  },
  {
    coinDenom: "SCRT",
    coinMinimalDenom: "uscrt",
    coinDecimals: 6,
  },
];

const chainInfo = {
  rpc: "https://stride-node3.poolparty.stridenet.co:445/",
  rest: "https://stride-node3.poolparty.stridenet.co",
  chainId: "STRIDE-1",
  chainName: "STRIDE",
  stakeCurrency: strideMainCurrency,
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "stride",
    bech32PrefixAccPub: "stridepub",
    bech32PrefixValAddr: "stridevaloper",
    bech32PrefixValPub: "stridevaloperpub",
    bech32PrefixConsAddr: "stridevalcons",
    bech32PrefixConsPub: "stridevalconspub",
  },
  currencies: [strideMainCurrency, ...strideExtraCurrencies],
  feeCurrencies: [strideMainCurrency, ...strideExtraCurrencies],
  coinType: 118,
  features: ["stargate", "ibc-transfer", "ibc-go"],
  gasPriceStep: {
    low: 0,
    average: 0.025,
    high: 0.04,
  },
};

export { chainInfo };
