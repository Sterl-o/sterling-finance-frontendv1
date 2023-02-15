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
    id: "0x67910c8E12aE4743a6411ed07Bea78fA4a6859dc",
    address: "0x67910c8E12aE4743a6411ed07Bea78fA4a6859dc",
    chainId: "42161",
    symbol: "STR",
  },
  {
    address: "0x7cb16cb78ea464aD35c8a50ABF95dff3c9e09d5d",
    chainId: "42161",
    id: "0x7cb16cb78ea464aD35c8a50ABF95dff3c9e09d5d",
    symbol: "0xBTC"
  }, {
    address: "0x03b95f1C84Af0607afd5dD87ca1FDE7572aa827F",
    chainId: "42161",
    id: "0x03b95f1C84Af0607afd5dD87ca1FDE7572aa827F",
    symbol: "AGVE"
  }, {
    address: "0x0e15258734300290a651FdBAe8dEb039a8E7a2FA",
    chainId: "42161",
    id: "0x0e15258734300290a651FdBAe8dEb039a8E7a2FA",
    symbol: "ALCH"
  }, {
    address: "0x9b3fa2A7C3EB36d048A5d38d81E7fAFC6bc47B25",
    chainId: "42161",
    id: "0x9b3fa2A7C3EB36d048A5d38d81E7fAFC6bc47B25",
    symbol: "ALN"
  }, {
    address: "0xea986d33eF8a20A96120ecc44dBdD49830192043",
    chainId: "42161",
    id: "0xea986d33eF8a20A96120ecc44dBdD49830192043",
    symbol: "AUC"
  }, {
    address: "0x6F67043201C903bbCBC129750CB3b328Dd56a0a5",
    chainId: "42161",
    id: "0x6F67043201C903bbCBC129750CB3b328Dd56a0a5",
    symbol: "BAC"
  }, {
    address: "0xBfa641051Ba0a0Ad1b0AcF549a89536A0D76472E",
    chainId: "42161",
    id: "0xBfa641051Ba0a0Ad1b0AcF549a89536A0D76472E",
    symbol: "BADGER"
  }, {
    address: "0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8",
    chainId: "42161",
    id: "0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8",
    symbol: "BAL"
  }, {
    address: "0xBbFbde08Bf1BE235a3Fa97d6A27fFfA19Ac4a8a8",
    chainId: "42161",
    id: "0xBbFbde08Bf1BE235a3Fa97d6A27fFfA19Ac4a8a8",
    symbol: "BARK"
  }, {
    address: "0xA5eC9d64b64b8B9E94FEaA7538c084b38117E7Ba",
    chainId: "42161",
    id: "0xA5eC9d64b64b8B9E94FEaA7538c084b38117E7Ba",
    symbol: "BLANK"
  }, {
    address: "0x0D81E50bC677fa67341c44D7eaA9228DEE64A4e1",
    chainId: "42161",
    id: "0x0D81E50bC677fa67341c44D7eaA9228DEE64A4e1",
    symbol: "BOND"
  }, {
    address: "0xd44e8F8768D4ed25119921a53802D8758A5b20dD",
    chainId: "42161",
    id: "0xd44e8F8768D4ed25119921a53802D8758A5b20dD",
    symbol: "BOOST"
  }, {
    address: "0xBA9a5Dd807c9F072850bE15a52dF3408BA25Fd18",
    chainId: "42161",
    id: "0xBA9a5Dd807c9F072850bE15a52dF3408BA25Fd18",
    symbol: "BTU"
  }, {
    address: "0x031d35296154279DC1984dCD93E392b1f946737b",
    chainId: "42161",
    id: "0x031d35296154279DC1984dCD93E392b1f946737b",
    symbol: "CAP"
  }, {
    address: "0x3a8B787f78D775AECFEEa15706D4221B40F345AB",
    chainId: "42161",
    id: "0x3a8B787f78D775AECFEEa15706D4221B40F345AB",
    symbol: "CELR"
  }, {
    address: "0x989D099d29F62b839C8CbD41c82c6554a5515752",
    chainId: "42161",
    id: "0x989D099d29F62b839C8CbD41c82c6554a5515752",
    symbol: "CNT"
  }, {
    address: "0x354A6dA3fcde098F8389cad84b0182725c6C91dE",
    chainId: "42161",
    id: "0x354A6dA3fcde098F8389cad84b0182725c6C91dE",
    symbol: "COMP"
  }, {
    address: "0x6FE14d3CC2f7bDdffBa5CdB3BBE7467dd81ea101",
    chainId: "42161",
    id: "0x6FE14d3CC2f7bDdffBa5CdB3BBE7467dd81ea101",
    symbol: "COTI"
  }, {
    address: "0xf4D48Ce3ee1Ac3651998971541bAdbb9A14D7234",
    chainId: "42161",
    id: "0xf4D48Ce3ee1Ac3651998971541bAdbb9A14D7234",
    symbol: "CREAM"
  }, {
    address: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
    chainId: "42161",
    id: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
    symbol: "CRV"
  }, {
    address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    chainId: "42161",
    id: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    symbol: "DAI"
  }, {
    address: "0xdeBa25AF35e4097146d7629055E0EC3C71706324",
    chainId: "42161",
    id: "0xdeBa25AF35e4097146d7629055E0EC3C71706324",
    symbol: "DEFI5"
  }, {
    address: "0xAE6e3540E97b0b9EA8797B157B510e133afb6282",
    chainId: "42161",
    id: "0xAE6e3540E97b0b9EA8797B157B510e133afb6282",
    symbol: "DEGEN"
  }, {
    address: "0xaE6aab43C4f3E0cea4Ab83752C278f8dEbabA689",
    chainId: "42161",
    id: "0xaE6aab43C4f3E0cea4Ab83752C278f8dEbabA689",
    symbol: "DF"
  }, {
    address: "0x1D54Aa7E322e02A0453c0F2fA21505cE7F2E9E93",
    chainId: "42161",
    id: "0x1D54Aa7E322e02A0453c0F2fA21505cE7F2E9E93",
    symbol: "DFYN"
  }, {
    address: "0x8038F3C971414FD1FC220bA727F2D4A0fC98cb65",
    chainId: "42161",
    id: "0x8038F3C971414FD1FC220bA727F2D4A0fC98cb65",
    symbol: "DHT"
  }, {
    address: "0x69Eb4FA4a2fbd498C257C57Ea8b7655a2559A581",
    chainId: "42161",
    id: "0x69Eb4FA4a2fbd498C257C57Ea8b7655a2559A581",
    symbol: "DODO"
  }, {
    address: "0x4425742F1EC8D98779690b5A3A6276Db85Ddc01A",
    chainId: "42161",
    id: "0x4425742F1EC8D98779690b5A3A6276Db85Ddc01A",
    symbol: "DOG"
  }, {
    address: "0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55",
    chainId: "42161",
    id: "0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55",
    symbol: "DPX"
  }, {
    address: "0xE212f5E733257ed5628a2FeBcEdBc9222e535F51",
    chainId: "42161",
    id: "0xE212f5E733257ed5628a2FeBcEdBc9222e535F51",
    symbol: "DSU"
  }, {
    address: "0xA7Aa2921618e3D63dA433829d448b58C9445A4c3",
    chainId: "42161",
    id: "0xA7Aa2921618e3D63dA433829d448b58C9445A4c3",
    symbol: "DVF"
  }, {
    address: "0xC3Ae0333F0F34aa734D5493276223d95B8F9Cb37",
    chainId: "42161",
    id: "0xC3Ae0333F0F34aa734D5493276223d95B8F9Cb37",
    symbol: "DXD"
  }, {
    address: "0xCE32aA8d60807182c0003Ef9cc1976Fa10E5d312",
    chainId: "42161",
    id: "0xCE32aA8d60807182c0003Ef9cc1976Fa10E5d312",
    symbol: "ESS"
  }, {
    address: "0x969131D8ddC06C2Be11a13e6E7fACF22CF57d95e",
    chainId: "42161",
    id: "0x969131D8ddC06C2Be11a13e6E7fACF22CF57d95e",
    symbol: "EUX"
  }, {
    address: "0xF80D589b3Dbe130c270a69F1a69D050f268786Df",
    chainId: "42161",
    id: "0xF80D589b3Dbe130c270a69F1a69D050f268786Df",
    symbol: "FLUX"
  }, {
    address: "0x2338a5d62E9A766289934e8d2e83a443e8065b83",
    chainId: "42161",
    id: "0x2338a5d62E9A766289934e8d2e83a443e8065b83",
    symbol: "FLUX"
  }, {
    address: "0x3816e40c1eB106c8fb7c05f901cfD58C7292D051",
    chainId: "42161",
    id: "0x3816e40c1eB106c8fb7c05f901cfD58C7292D051",
    symbol: "FOR"
  }, {
    address: "0x488cc08935458403a0458e45E20c0159c8AB2c92",
    chainId: "42161",
    id: "0x488cc08935458403a0458e45E20c0159c8AB2c92",
    symbol: "FST"
  }, {
    address: "0xBDeF0E9ef12E689F366fe494A7A7D0dad25D9286",
    chainId: "42161",
    id: "0xBDeF0E9ef12E689F366fe494A7A7D0dad25D9286",
    symbol: "FUSE"
  }, {
    address: "0x590020B1005b8b25f1a2C82c5f743c540dcfa24d",
    chainId: "42161",
    id: "0x590020B1005b8b25f1a2C82c5f743c540dcfa24d",
    symbol: "GMX"
  }, {
    address: "0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1",
    chainId: "42161",
    id: "0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1",
    symbol: "GNO"
  }, {
    address: "0x07E49d5dE43DDA6162Fa28D24d5935C151875283",
    chainId: "42161",
    id: "0x07E49d5dE43DDA6162Fa28D24d5935C151875283",
    symbol: "GOVI"
  }, {
    address: "0x9623063377AD1B27544C965cCd7342f7EA7e88C7",
    chainId: "42161",
    id: "0x9623063377AD1B27544C965cCd7342f7EA7e88C7",
    symbol: "GRT"
  }, {
    address: "0x9c67eE39e3C4954396b9142010653F17257dd39C",
    chainId: "42161",
    id: "0x9c67eE39e3C4954396b9142010653F17257dd39C",
    symbol: "IMX"
  }, {
    address: "0x04cb2d263a7489f02d813eaaB9Ba1bb8466347F2",
    chainId: "42161",
    id: "0x04cb2d263a7489f02d813eaaB9Ba1bb8466347F2",
    symbol: "KUN"
  }, {
    address: "0x3CD1833Ce959E087D0eF0Cb45ed06BffE60F23Ba",
    chainId: "42161",
    id: "0x3CD1833Ce959E087D0eF0Cb45ed06BffE60F23Ba",
    symbol: "LAND"
  }, {
    address: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
    chainId: "42161",
    id: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
    symbol: "LINK"
  }, {
    address: "0x46d0cE7de6247b0A95f67b43B589b4041BaE7fbE",
    chainId: "42161",
    id: "0x46d0cE7de6247b0A95f67b43B589b4041BaE7fbE",
    symbol: "LRC"
  }, {
    address: "0x539bdE0d7Dbd336b79148AA742883198BBF60342",
    chainId: "42161",
    id: "0x539bdE0d7Dbd336b79148AA742883198BBF60342",
    symbol: "MAGIC"
  }, {
    address: "0xAA086809EFA469631DD90D8C6cB267bAb107E958",
    chainId: "42161",
    id: "0xAA086809EFA469631DD90D8C6cB267bAb107E958",
    symbol: "MAL"
  }, {
    address: "0x99F40b01BA9C469193B360f72740E416B17Ac332",
    chainId: "42161",
    id: "0x99F40b01BA9C469193B360f72740E416B17Ac332",
    symbol: "MATH"
  }, {
    address: "0xaaA62D9584Cbe8e4D68A43ec91BfF4fF1fAdB202",
    chainId: "42161",
    id: "0xaaA62D9584Cbe8e4D68A43ec91BfF4fF1fAdB202",
    symbol: "MATTER"
  }, {
    address: "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
    chainId: "42161",
    id: "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
    symbol: "MCB"
  }, {
    address: "0x2e9a6Df78E42a30712c10a9Dc4b1C8656f8F2879",
    chainId: "42161",
    id: "0x2e9a6Df78E42a30712c10a9Dc4b1C8656f8F2879",
    symbol: "MKR"
  }, {
    address: "0x5298Ee77A8f9E226898403eBAC33e68a62F770A0",
    chainId: "42161",
    id: "0x5298Ee77A8f9E226898403eBAC33e68a62F770A0",
    symbol: "MTA"
  }, {
    address: "0xB965029343D55189c25a7f3e0c9394DC0F5D41b1",
    chainId: "42161",
    id: "0xB965029343D55189c25a7f3e0c9394DC0F5D41b1",
    symbol: "NDX"
  }, {
    address: "0xd67D9F7E018B4e7613b0251BBe3Ba3988Baf7C16",
    chainId: "42161",
    id: "0xd67D9F7E018B4e7613b0251BBe3Ba3988Baf7C16",
    symbol: "NEC"
  }, {
    address: "0xc9c2B86CD4cdbAB70cd65D22EB044574c3539F6c",
    chainId: "42161",
    id: "0xc9c2B86CD4cdbAB70cd65D22EB044574c3539F6c",
    symbol: "NFD"
  }, {
    address: "0x52f5d9B3a2bB89D3aEC5829A3415c21115aCD633",
    chainId: "42161",
    id: "0x52f5d9B3a2bB89D3aEC5829A3415c21115aCD633",
    symbol: "OCTO"
  }, {
    address: "0x6E6a3D8F1AfFAc703B1aEF1F43B8D2321bE40043",
    chainId: "42161",
    id: "0x6E6a3D8F1AfFAc703B1aEF1F43B8D2321bE40043",
    symbol: "OHM"
  }, {
    address: "0x55704A0e9E2eb59E176C5b69655DbD3DCDCFc0F0",
    chainId: "42161",
    id: "0x55704A0e9E2eb59E176C5b69655DbD3DCDCFc0F0",
    symbol: "OVR"
  }, {
    address: "0x753D224bCf9AAFaCD81558c32341416df61D3DAC",
    chainId: "42161",
    id: "0x753D224bCf9AAFaCD81558c32341416df61D3DAC",
    symbol: "PERP"
  }, {
    address: "0x965772e0E9c84b6f359c8597C891108DcF1c5B1A",
    chainId: "42161",
    id: "0x965772e0E9c84b6f359c8597C891108DcF1c5B1A",
    symbol: "PICKLE"
  }, {
    address: "0x3642c0680329ae3e103E2B5AB29DDfed4d43CBE5",
    chainId: "42161",
    id: "0x3642c0680329ae3e103E2B5AB29DDfed4d43CBE5",
    symbol: "PL2"
  }, {
    address: "0x51fC0f6660482Ea73330E414eFd7808811a57Fa2",
    chainId: "42161",
    id: "0x51fC0f6660482Ea73330E414eFd7808811a57Fa2",
    symbol: "PREMIA"
  }, {
    address: "0xaeF5bbcbFa438519a5ea80B4c7181B4E78d419f2",
    chainId: "42161",
    id: "0xaeF5bbcbFa438519a5ea80B4c7181B4E78d419f2",
    symbol: "RAI"
  }, {
    address: "0x32Eb7902D4134bf98A28b963D26de779AF92A212",
    chainId: "42161",
    id: "0x32Eb7902D4134bf98A28b963D26de779AF92A212",
    symbol: "RDPX"
  }, {
    address: "0xef888bcA6AB6B1d26dbeC977C455388ecd794794",
    chainId: "42161",
    id: "0xef888bcA6AB6B1d26dbeC977C455388ecd794794",
    symbol: "RGT"
  }, {
    address: "0x5298060A95205BE6Dd4aBc21910A4bB23D6DCD8b",
    chainId: "42161",
    id: "0x5298060A95205BE6Dd4aBc21910A4bB23D6DCD8b",
    symbol: "ROUTE"
  }, {
    address: "0x552E4e96A0Ce6D36d161b63984848c8dAC471ea2",
    chainId: "42161",
    id: "0x552E4e96A0Ce6D36d161b63984848c8dAC471ea2",
    symbol: "SAKE"
  }, {
    address: "0x7bA4a00d54A07461D9DB2aEF539e91409943AdC9",
    chainId: "42161",
    id: "0x7bA4a00d54A07461D9DB2aEF539e91409943AdC9",
    symbol: "SDT"
  }, {
    address: "0x5575552988A3A80504bBaeB1311674fCFd40aD4B",
    chainId: "42161",
    id: "0x5575552988A3A80504bBaeB1311674fCFd40aD4B",
    symbol: "SPA"
  }, {
    address: "0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF",
    chainId: "42161",
    id: "0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF",
    symbol: "SPELL"
  }, {
    address: "0x326c33FD1113c1F29B35B4407F3d6312a8518431",
    chainId: "42161",
    id: "0x326c33FD1113c1F29B35B4407F3d6312a8518431",
    symbol: "STRP"
  }, {
    address: "0x20f9628a485ebCc566622314f6e07E7Ee61fF332",
    chainId: "42161",
    id: "0x20f9628a485ebCc566622314f6e07E7Ee61fF332",
    symbol: "SUM"
  }, {
    address: "0xd4d42F0b6DEF4CE0383636770eF773390d85c61A",
    chainId: "42161",
    id: "0xd4d42F0b6DEF4CE0383636770eF773390d85c61A",
    symbol: "SUSHI"
  }, {
    address: "0xdE903E2712288A1dA82942DDdF2c20529565aC30",
    chainId: "42161",
    id: "0xdE903E2712288A1dA82942DDdF2c20529565aC30",
    symbol: "SWPR"
  }, {
    address: "0xFa51B42d4C9EA35F1758828226AaEdBeC50DD54E",
    chainId: "42161",
    id: "0xFa51B42d4C9EA35F1758828226AaEdBeC50DD54E",
    symbol: "TAC"
  }, {
    address: "0xA72159FC390f0E3C6D415e658264c7c4051E9b87",
    chainId: "42161",
    id: "0xA72159FC390f0E3C6D415e658264c7c4051E9b87",
    symbol: "TCR"
  }, {
    address: "0x4D15a3A2286D883AF0AA1B3f21367843FAc63E07",
    chainId: "42161",
    id: "0x4D15a3A2286D883AF0AA1B3f21367843FAc63E07",
    symbol: "TUSD"
  }, {
    address: "0x2aD62674A64E698C24831Faf824973C360430140",
    chainId: "42161",
    id: "0x2aD62674A64E698C24831Faf824973C360430140",
    symbol: "UBT"
  }, {
    address: "0xd5d3aA404D7562d09a848F96a8a8d5D65977bF90",
    chainId: "42161",
    id: "0xd5d3aA404D7562d09a848F96a8a8d5D65977bF90",
    symbol: "UDT"
  }, {
    address: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
    chainId: "42161",
    id: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
    symbol: "UNI"
  }, {
    address: "0x250F471385894fc81183a99d6fDe8CE9C5B142d6",
    chainId: "42161",
    id: "0x250F471385894fc81183a99d6fDe8CE9C5B142d6",
    symbol: "UNT"
  }, {
    address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    chainId: "42161",
    id: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    symbol: "USDC"
  }, {
    address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    chainId: "42161",
    id: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    symbol: "USDT"
  }, {
    address: "0xcd14C3A2ba27819B352aae73414A26e2b366dC50",
    chainId: "42161",
    id: "0xcd14C3A2ba27819B352aae73414A26e2b366dC50",
    symbol: "USX"
  }, {
    address: "0x8d1c89DcF613e3e709AfE9Abecae591D0e2B64Ca",
    chainId: "42161",
    id: "0x8d1c89DcF613e3e709AfE9Abecae591D0e2B64Ca",
    symbol: "VALX"
  }, {
    address: "0x995C235521820f2637303Ca1970c7c044583df44",
    chainId: "42161",
    id: "0x995C235521820f2637303Ca1970c7c044583df44",
    symbol: "VISR"
  }, {
    address: "0x2eD14d1788dfB780fD216706096AeD018514ECcd",
    chainId: "42161",
    id: "0x2eD14d1788dfB780fD216706096AeD018514ECcd",
    symbol: "VOX"
  }, {
    address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    chainId: "42161",
    id: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    symbol: "WBTC"
  }, {
    address: "0xA64eCCe74F8CdB7a940766B71f1b108BAC69851a",
    chainId: "42161",
    id: "0xA64eCCe74F8CdB7a940766B71f1b108BAC69851a",
    symbol: "WCHI"
  }, {
    address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    chainId: "42161",
    id: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    symbol: "WETH"
  }, {
    address: "0xcAFcD85D8ca7Ad1e1C6F82F651fA15E33AEfD07b",
    chainId: "42161",
    id: "0xcAFcD85D8ca7Ad1e1C6F82F651fA15E33AEfD07b",
    symbol: "WOO"
  }, {
    address: "0xF0A5717Ec0883eE56438932b0fe4A20822735fBa",
    chainId: "42161",
    id: "0xF0A5717Ec0883eE56438932b0fe4A20822735fBa",
    symbol: "XTK"
  }, {
    address: "0x82e3A8F066a6989666b031d916c43672085b1582",
    chainId: "42161",
    id: "0x82e3A8F066a6989666b031d916c43672085b1582",
    symbol: "YFI"
  }, {
    address: "0x0F61B24272AF65EACF6adFe507028957698e032F",
    chainId: "42161",
    id: "0x0F61B24272AF65EACF6adFe507028957698e032F",
    symbol: "ZIPT"
  }, {
    address: "0x9Ab3FD50FcAe73A1AEDa959468FD0D662c881b42",
    chainId: "42161",
    id: "0x9Ab3FD50FcAe73A1AEDa959468FD0D662c881b42",
    symbol: "ibBTC"
  }, {
    address: "0x4f947b40BEEB9D8130437781a560E5c7D089730f",
    chainId: "42161",
    id: "0x4f947b40BEEB9D8130437781a560E5c7D089730f",
    symbol: "kUSDC"
  }, {
    address: "0xA970AF1a584579B618be4d69aD6F73459D112F95",
    chainId: "42161",
    id: "0xA970AF1a584579B618be4d69aD6F73459D112F95",
    symbol: "sUSD"
  }
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
