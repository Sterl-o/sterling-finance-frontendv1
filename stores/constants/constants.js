import BigNumber from 'bignumber.js'
import * as contractsTestnet from './contractsTestnet'
import * as contracts from './contracts'
import * as actions from './actions'
import * as queries from './graph-queries'

let isTestnet = process.env.NEXT_PUBLIC_CHAINID == 80001

// URLS
let scan = 'https://arbiscan.io/'
let cont = contracts

if(isTestnet) {
  scan = 'https://mumbai.arbiscan.io/'
  cont = contractsTestnet
}

export const ETHERSCAN_URL = scan

export const CONTRACTS = cont
export const ACTIONS = actions
export const QUERIES = queries

export const NETWORK_TOKEN_NAME = CONTRACTS.FTM_NAME;

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const RENAME_ASSETS = {
  "miMATIC": "MAI"
}

export const BLACK_LIST_TOKENS = [
  // '0x104592a158490a9228070e0a8e5343b499e125d0'.toLowerCase(), // wrong FRAX
  '0xfa157458912d54492df38448c613375c772f2b08'.toLowerCase(), // OLD DEPLOY STERLING TOKEN
]

export const BASE_ASSETS_WHITELIST = [ // Done
  {
    id: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    chainId: "42161",
    symbol: "WETH",
  },
  {
    id: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    chainId: "42161",
    symbol: "WBTC",
  },
  {
    id: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    chainId: "42161",
    symbol: "USDC",
  },
  {
    id: "0x67910c8E12aE4743a6411ed07Bea78fA4a6859dc",
    address: "0x67910c8E12aE4743a6411ed07Bea78fA4a6859dc",
    chainId: "42161",
    symbol: "STR",
  },
  {
    id: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    chainId: "42161",
    symbol: "DAI",
  },
  {
    id: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    chainId: "42161",
    symbol: "USDT",
  },
];

export const ROUTE_ASSETS = [
  {
    address: CONTRACTS.WFTM_ADDRESS,
    decimals: CONTRACTS.WFTM_DECIMALS,
    logoURI: CONTRACTS.WFTM_LOGO,
    name: CONTRACTS.WFTM_NAME,
    symbol: CONTRACTS.WFTM_SYMBOL,
  }, {
    address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // Done
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg",
    name: "USDC",
    symbol: "USDC",
  },
  {
    address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", // Done
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/usdt.jpg",
    name: "Tether USD",
    symbol: "USDT",
  }, {
    address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", // Done
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/dai.jpg",
    name: "Dai Stablecoin",
    symbol: "DAI",
  },
  {
    address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // Done
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg",
    name: "Wrapped Ether",
    symbol: "WETH",
  }
];

// hardcoded routes for taxable tokens
export const DIRECT_SWAP_ROUTES = {
  // SPHERE -> USD+
  // ["0x62f594339830b90ae4c084ae7d223ffafd9658a7".toLowerCase()]: "0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f".toLowerCase(),
  // penSTR -> STR
  // ["0x5b0522391d0a5a37fd117fe4c43e8876fb4e91e6".toLowerCase()]: "0x67910c8E12aE4743a6411ed07Bea78fA4a6859dc".toLowerCase(),
}

export const MULTISWAP_INCLUDE = [
  // TETU
  // "0x255707B70BF90aa112006E1b07B9AeA6De021424".toLowerCase(),
]

export const ALLOWED_DUPLICATE_SYMBOLS = [
    "FXS",
]

export const DEFAULT_ASSET_FROM = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1" // DONE
export const DEFAULT_ASSET_TO = "0x67910c8E12aE4743a6411ed07Bea78fA4a6859dc" // DONE

export const GAS_MULTIPLIER = 5
