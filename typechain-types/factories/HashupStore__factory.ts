/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HashupStore, HashupStoreInterface } from "../HashupStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "cartridgeAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CartridgesBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "cartridgeAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CartridgesWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "cartridgeAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SentToStore",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cartridgeAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "buyCartridge",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cartridgeAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
    ],
    name: "buyCartridge",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalValue",
        type: "uint256",
      },
    ],
    name: "distributePayment",
    outputs: [
      {
        internalType: "uint256",
        name: "toCreator",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toPlatform",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toReferrer",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cartridgeAddress",
        type: "address",
      },
    ],
    name: "getCartridgePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paymentToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "raisedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "reflinkAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reflinkFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cartridgeAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendCartridgeToStore",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCreator",
        type: "address",
      },
    ],
    name: "transferCreatorship",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cartridgeAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawCartridges",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawnAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620031ba380380620031ba833981810160405281019062000037919062000415565b6200006b7f945396e4e28f845014041618c13870eb7c0b715828eb1d7804ea64a433d5202c60001b620001c860201b60201c565b6200009f7f5172285f08578e74d2ae70247d89320853d18421e8290b56f7754c3458da974160001b620001c860201b60201c565b620000d37f75cad3ba65d32a153cef14e90019829977169c6683f65fce07e18cf3a2e2db6260001b620001c860201b60201c565b620000e433620001cb60201b60201c565b620001187f72fbd3eefcee3c9bd6f8588275b837823c0726775acc4ff0c8160396fdb823a960001b620003fb60201b60201c565b6200014c7ff7468f32b4f501ae45e09ade247391c2f78a3bdb205f35e6608bc8eecfc9732160001b620003fb60201b60201c565b620001807ff5d3360cef4730ba8d08938ccc5da655ef6be73f98cc0cd981853d756f8ace4060001b620003fb60201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200048f565b50565b620001ff7fd08b1176d949dd9ab5d4a27eace58ee69db6d1bd9375f15faa8e2cac09abd30160001b620001c860201b60201c565b620002337f8dc23c781b5b726583a860cabdb6ee22e9ab8f0b85036d421679cd898e68dba260001b620001c860201b60201c565b620002677f8e8b33978f53acaf5d55bab4b5a4436f87ab3ee34fa2c49aa7e807ac217714a360001b620001c860201b60201c565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050620002c17ff22f2257305e2ffde0dd273eb5198d3f4f356b7a44e9bb5a03eede4bea94017160001b620001c860201b60201c565b620002f57ff6a95ee8803a29551ad899c855f7d9ed48000faaca46dd8b8311809e934c5fc860001b620001c860201b60201c565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620003697f9a40606a3e2aed1c2c8ad87c71df88a71c7f8e50c04650f108fb2c2f48bb434960001b620001c860201b60201c565b6200039d7fc273bd9a94d576db81b5f93e145c9a09b324157e7ca73d49d11d3be3d68e731860001b620001c860201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b50565b6000815190506200040f8162000475565b92915050565b6000602082840312156200042857600080fd5b60006200043884828501620003fe565b91505092915050565b60006200044e8262000455565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620004808162000441565b81146200048c57600080fd5b50565b612d1b806200049f6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806330e190b21161008c5780636aab262a116100665780636aab262a146102505780636d2e4b1b1461028057806370c71e001461029c578063c7cc5f16146102ba576100cf565b806330e190b2146101c057806336006777146101f0578063364c022214610220576100cf565b806302d05d3f146100d4578063038bf1e7146100f25780630ba4f01f146101225780631ba291251461015257806326232a2e146101845780633013ce29146101a2575b600080fd5b6100dc6102ea565b6040516100e99190612868565b60405180910390f35b61010c6004803603810190610107919061267d565b610396565b604051610119919061291a565b60405180910390f35b61013c600480360381019061013791906126b9565b610a62565b604051610149919061291a565b60405180910390f35b61016c60048036038101906101679190612780565b611226565b60405161017b939291906129b0565b60405180910390f35b61018c61141f565b6040516101999190612995565b60405180910390f35b6101aa611424565b6040516101b79190612868565b60405180910390f35b6101da60048036038101906101d5919061262b565b61144a565b6040516101e79190612995565b60405180910390f35b61020a6004803603810190610205919061262b565b611462565b6040516102179190612995565b60405180910390f35b61023a60048036038101906102359190612708565b61152f565b604051610247919061291a565b60405180910390f35b61026a6004803603810190610265919061262b565b6119cc565b6040516102779190612995565b60405180910390f35b61029a6004803603810190610295919061262b565b6119e4565b005b6102a4611d11565b6040516102b19190612995565b60405180910390f35b6102d460048036038101906102cf919061267d565b611d16565b6040516102e19190612995565b60405180910390f35b60006103187ff23082f9d8bab099a93551f0bb10efa6804c9b383351bd4b923b1d9acfcff26560001b6123c4565b6103447f4528b2e25688aafc86d6168c8a9747baa8ae935e1c22ad209fa3406fe98fc02a60001b6123c4565b6103707f457987541796120663b9026823ee12987b56ab582560e360ab8d318ff36b244460001b6123c4565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006103c47f9b6baca47b02ace01dcba495781b330af1ae19447002745c2a27095345adddb560001b6123c7565b6103f07faf75c955d76b6e5e1a05a9d28b9a3953e1b91de98e6f82f39a3b6bd62c4dd82a60001b6123c7565b61041c7fa887dd13888619f7d70493ca98fda4902127afac51728322cacc17a0bf0a4eba60001b6123c7565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061046f7fc1bbb842e91cbdc33f9e2f569875cc8a96a949125ef9e70f70bb0f8a5a1ea08560001b6123c7565b61049b7f72c81b4a5c8c46d89b8174fe6b058979318ee9b09c549d2f92bc405cabd688c160001b6123c7565b60008490506104cc7fb0c7d3c2f209cc950b7af2084f1d3d9965a1623e5f6c99055ec7ce9831c660fd60001b6123c7565b6104f77e6fd8ec688b2ad081f50158c725187eb2e709f77bcb94203a7be381200867d060001b6123c7565b60008461050387611462565b61050d9190612a7f565b905061053b7fb4dd2c4d548dd63d989bc21aa4e6b0a458745eacfb3cd956e5bb85585e2ba58a60001b6123c7565b6105677f3a174a6237a5d1d78774228fae2d859e33af497f942ea3e4b018327f2e35ed7a60001b6123c7565b600080600061057584611226565b9250925092506105a77f200d188af50a1e6f6d65562a798733048b99f34178edd8ad9a452b72b1d8e68760001b6123c7565b6105d37f560f73aa841e1509c8a0a8ef368287e106a6539a2b1bf0de6ccdbaeeb08b9b8460001b6123c7565b8473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338a6040518363ffffffff1660e01b815260040161060e9291906128ba565b602060405180830381600087803b15801561062857600080fd5b505af115801561063c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106609190612757565b5061068d7f9e062b7279bb84cfb09b4eb6679b8af6668f48b2ec037044c134b92f73e5c4f460001b6123c7565b6106b97f71d5c72d1695f8611ac4fc5884f7371adf5ea0ba3e7573fb4f5ce4d714b23cc760001b6123c7565b8573ffffffffffffffffffffffffffffffffffffffff166323b872dd338773ffffffffffffffffffffffffffffffffffffffff166302d05d3f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561071c57600080fd5b505afa158015610730573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107549190612654565b866040518463ffffffff1660e01b815260040161077393929190612883565b602060405180830381600087803b15801561078d57600080fd5b505af11580156107a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c59190612757565b506107f27fcc199e8da27ebecd232c17a83a368fae4d5657339cada4d935ef4c164db96d6e60001b6123c7565b61081e7fa6b8e837c6dcae87bc81e14be4fe2d11d26701ea921ca17c859df315917a814760001b6123c7565b8573ffffffffffffffffffffffffffffffffffffffff166323b872dd3330848661084891906129f8565b6040518463ffffffff1660e01b815260040161086693929190612883565b602060405180830381600087803b15801561088057600080fd5b505af1158015610894573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b89190612757565b506108e57fcff7cda505b21e9de83499443ec9f81ea720fa44af9e78a490b5e45f7de1406160001b6123c7565b6109117fd355a53e021c59e7e7ffdab33b66f0e63f672cc9e4e0ef4396b6adbecfc0daa160001b6123c7565b82600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461096091906129f8565b925050819055506109937f278cc5a9294683e0841a1b3e62a3bdc871e8afbd450d8fd4f66605c90a6f314260001b6123c7565b6109bf7fa998c6eecd8eb804da59cab4c974d09452c718e53cfa6c70872356e3f547e46960001b6123c7565b7f70b581c62e019ffa29be6d963f5728ccf7445d2fe72866743cfb79c2ea5f1aa189858a6040516109f2939291906128e3565b60405180910390a1610a267f846ac1f682fc869fb2ebb252091941246d51c834cd3c19d8307cdd71ecb56f5b60001b6123c7565b610a527f81bd756541ded30da90305c475dce1a997985b9aff7486656af7db2d96dd4d6c60001b6123c7565b6001965050505050505092915050565b6000610a907fb667e08ff64167dc85b3ca6af10b6e0f058f1195b43e61271759b9eed5c54dbf60001b6123c7565b610abc7f709defb6b6be65eeb959759528167e40ba524e84ba94cfadb44e619787907a1460001b6123c7565b610ae87ffde8709756d6602a9fdce2bb5247ad7b1b453d0c3cb01c26523c05e363d29fba60001b6123c7565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610b3b7fd96a9b7976bd93f3c0c7c91b58aa1aad83a59b6327bd09a300581f227c2a9b8d60001b6123c7565b610b667e317dfcfd715e1122923b35695d02df7450fc002d7e084610f97856f41a89bc60001b6123c7565b6000859050610b977f69b339c1046a0a10c984a2a53d680caa0d473757d0e5e19677fc217ab630d20960001b6123c7565b610bc37f3f4894fbc92bcb61f602575f0771161b8b36bc875836df9a0ffa36dd36d02f3160001b6123c7565b600085610bcf88611462565b610bd99190612a7f565b9050610c077f85619ba2c8890452e9eb91abc465544dabbba1fd3664b0d4e70ccbd13008a16060001b6123c7565b610c337fdcecc930a37d87d173342a4fe1d4f6e31f0fdac699404f146889122765ca4dbe60001b6123c7565b6000806000610c4184611226565b925092509250610c737ff6f52385f15eb720300aa6fa8db40ab0ac91a992422bbd241dea03189e5bc58260001b6123c7565b610c9f7fef27d20ac65d0aa95a984783729e3400e470a5d0ce05843c0e31933cdb80275e60001b6123c7565b8473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338b6040518363ffffffff1660e01b8152600401610cda9291906128ba565b602060405180830381600087803b158015610cf457600080fd5b505af1158015610d08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2c9190612757565b50610d587e640b1fce9f0e44267b1c7f994621b604acaedbd7f4d385c15ef1f7c81d323060001b6123c7565b610d847f1dc54f0a6e23557896801977e622b3492cdca3d949d3c62eff4faae196b10ac760001b6123c7565b8573ffffffffffffffffffffffffffffffffffffffff166323b872dd338773ffffffffffffffffffffffffffffffffffffffff166302d05d3f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610de757600080fd5b505afa158015610dfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1f9190612654565b866040518463ffffffff1660e01b8152600401610e3e93929190612883565b602060405180830381600087803b158015610e5857600080fd5b505af1158015610e6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e909190612757565b50610ebd7f4a89188033ab9fc7578b9d9e1ad4beee03361f0bd7c82e518dbd9979ae55620a60001b6123c7565b610ee97fdb9a4f1b518e8d90123f16551c0ea5e06e2755d6e42c72f25aa01327edbec21e60001b6123c7565b8573ffffffffffffffffffffffffffffffffffffffff166323b872dd338a846040518463ffffffff1660e01b8152600401610f2693929190612883565b602060405180830381600087803b158015610f4057600080fd5b505af1158015610f54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f789190612757565b50610fa57f7ac93b31e6888d09e54048c37cb027838c5ee3490e0d8e9b76f8ead6c79b137f60001b6123c7565b610fd17f9bf9bd95082799970be20f6ed07005cecbbfb795d921fedf5d04027f6d104baf60001b6123c7565b8573ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161100e93929190612883565b602060405180830381600087803b15801561102857600080fd5b505af115801561103c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110609190612757565b5061108d7fb6e1c6168db5edd686f0f7d3af5ce148f0aa4b00dd266231ba54e7004d9ccf3460001b6123c7565b6110b97fd1cc1bf69eae27aba5aca3ec92437fdb53a4b6cfa0db51c98ed384e7443eb76f60001b6123c7565b82600260008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461110891906129f8565b9250508190555061113b7f2457c144437d54c81865864597b3a53f02d6051ee79d203177e4788c481ccd0360001b6123c7565b6111677fe10147dfad98ee10184c9b04bbea881c8520b295101f69d2403684d9318d954f60001b6123c7565b80600360008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111b691906129f8565b925050819055506111e97f63f9169281679e2f4e08f5804d313305827a98f859280be7598aa3a373f302cd60001b6123c7565b6112157faa6f0b00a60e137c8acb3f42f61c341f50f47c27f5d4ab9390ba689239d616ed60001b6123c7565b600196505050505050509392505050565b60008060006112577f118e28e6aa4c5e6705511333187d65f29a55075b9ca0e0329df4fdbbe407e8c760001b6123c7565b6112837f1dbad06c30469d273325cac90abf4defcb8d0d8440fcd417b595f296d55fded660001b6123c7565b6112af7fac9c22826d06aa72a717410c82bdc00e831257fad770ddb49e964f2d44c01d4b60001b6123c7565b600060646014866112c09190612a7f565b6112ca9190612a4e565b90506112f87f1713ff911152c96b3fe82f3a4e0f35be9255193a7e9457b950eab74f5b9b85a160001b6123c7565b6113247f74de631dfc218c065d1ae6c0262892bf85353f23906a01178a8d74ff86ec84d360001b6123c7565b600060646005876113359190612a7f565b61133f9190612a4e565b905061136d7f645b3cc45895bda1fcb8c1c233614e56643a7bc438f797f816106b74776818bb60001b6123c7565b6113997f21b44c361f98c37e74b7eb7cba367945aa0e6b5cd611c552dfc0b7224cd7b71960001b6123c7565b60008282886113a89190612ad9565b6113b29190612ad9565b90506113e07fcde29f7f09f6abfc6f2f0c259b6d9e149a79198d768c70ec9a22ffd1c5c9d3db60001b6123c7565b61140c7f893a661dbe7dd3825f8ea1789bec67f085148b941bdd11732a6c999a51b8198060001b6123c7565b8083839550955095505050509193909250565b601481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915090505481565b60006114907f866c80799a79b3d3cf4e80b8dc162858b9b49dcf54609bbefcd7a27754c751c060001b6123c7565b6114bc7fb6edf29c70b5e9d70c390510f9fd3aa0ac65349b06858831058309365fa10ef660001b6123c7565b6114e87ffdf86321d5ccc8aa3717f35218c846276c9ee70d94bcddbbddf137b5c8f22db560001b6123c7565b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008361155e7f878178a6e587810669fc35339136fff51d21bdfbb3fd7beff88c0a3fce1ccc0260001b6123c7565b61158a7fe2fc26f4d80df7213ecd6d132f728bcd28df57994c03ca84ba72f3152e7110be60001b6123c7565b6115b67fcf3561f1a20cf92206a7ea9a32c6be763229673dc977773b69e96350c6142d8f60001b6123c7565b6115e27fecc0235dba73315f05deaefedea63ef4b55ba8d2dc00f38ffbe1b1b07beb559a60001b6123c7565b8073ffffffffffffffffffffffffffffffffffffffff166302d05d3f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561162857600080fd5b505afa15801561163c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116609190612654565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c490612955565b60405180910390fd5b6116f97f4cbc0458d915ed901bb435182e4db260d9ffb6e8523971d382569c454cb9ebf760001b6123c7565b6117257fd4d3090ff81e66ca7b98fd1a53f9334d872516ad19021088b574537c25dc37cf60001b6123c7565b6117517f745f2897b8fbda56e89ffbfedb24b2be173c2940e634428e59a0c055c7c3757b60001b6123c7565b61177d7fb0cfa8ad6536c78c96c45e9dd79bbaedb03b6575f19cc68e296479616bacfc7860001b6123c7565b6117a97fff4e72a6bc29c77f5586ee40a31ab0945c23d37f78201c96b532839f3ff601d460001b6123c7565b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016117e693929190612883565b602060405180830381600087803b15801561180057600080fd5b505af1158015611814573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118389190612757565b506118657f740628b6befa82ebf41a6f7d72d5475b3f313dfa0bdf9486b02c07cc9880ea3e60001b6123c7565b6118917f835883b56205fab69031e523bc1570faf1886cd3f1ff9e2c987169fc4550989660001b6123c7565b83600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506119017fdd1e90b0e3026cb371d75bc2fb2abf9137405bcb660c4db10601bc2ceef490f360001b6123c7565b61192d7f3b69d9a1d00b535f327e5d2c9661a2423dac2434b69313ca3b9692435b84cbb660001b6123c7565b7fab9c90d2cf83eb532f3a89c01238c21acc88bd8ba237e505607dba4362dcb2dd858585604051611960939291906128e3565b60405180910390a16119947fc1e699a1f29d0d32052905ae7c40860bd2fc82ab07d3c9b4b8c0c33a4918784a60001b6123c7565b6119c07f9492e2883e3d009bce7aac723c3205ee46129aa88f1448f0afc9f2cd7404123b60001b6123c7565b60019150509392505050565b60036020528060005260406000206000915090505481565b611a107f3980c125a009b2f06f8eff72077c856f3a46a47e8ba6a244737991e7f58dcb6f60001b6123c4565b611a3c7f09e1fe90479c061912dde6c03a3041e96bebe2fc544824e26fdd709d8e8c6f1b60001b6123c4565b611a687f57d2508b22c3d7179828628a2590219b90beb5531ca2d415f4e51e2fe1855e3560001b6123c4565b611a947fe0bac180f9e2a5036b97d4cb01894d549e87f9b4478429467aaad99bf97e295360001b6123c4565b3373ffffffffffffffffffffffffffffffffffffffff16611ab36102ea565b73ffffffffffffffffffffffffffffffffffffffff1614611b09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0090612935565b60405180910390fd5b611b357f73645565a82ccee66556abde671df735598961db5a092e820df2d2586a392bb360001b6123c4565b611b617fa1935f7f8ce24f2bce06e84362ee0c4745e1a86add172e10847fef9e15409e7760001b6123c4565b611b8d7f372d3e6236c18fb9704fe53bcd4ad5c8db987b98ead0cf79956c0eab0e49ee8f60001b6123c4565b611bb97f9e9ace337926738372c9740ace0f7ef9766bb61928858bb008a52330087c6b1a60001b6123c4565b611be57fdbaf6205bd54f8f3a71d86e80baed3b147b28ef9e9e4be34eeb641442431c83d60001b6123c4565b611c117fc194f112cb18c2dc23067ab97b7edbbdf8273433047f1030dac7ae0e1452bfc860001b6123c4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611c81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c7890612975565b60405180910390fd5b611cad7fe075022662c72d797fa368f6fb121749912afb9afe1cb5f12599efb27df67c0060001b6123c4565b611cd97fca9d179db5623cd4eb0f83e448c1dac92582d7f641681f73623a7bbeabfeaa9160001b6123c4565b611d057ffd421ab5f14fbe408cbfd18b462f70754a36e52a0861ab6a57723ad764e5f7ff60001b6123c4565b611d0e816123ca565b50565b600581565b600082611d457f878178a6e587810669fc35339136fff51d21bdfbb3fd7beff88c0a3fce1ccc0260001b6123c7565b611d717fe2fc26f4d80df7213ecd6d132f728bcd28df57994c03ca84ba72f3152e7110be60001b6123c7565b611d9d7fcf3561f1a20cf92206a7ea9a32c6be763229673dc977773b69e96350c6142d8f60001b6123c7565b611dc97fecc0235dba73315f05deaefedea63ef4b55ba8d2dc00f38ffbe1b1b07beb559a60001b6123c7565b8073ffffffffffffffffffffffffffffffffffffffff166302d05d3f6040518163ffffffff1660e01b815260040160206040518083038186803b158015611e0f57600080fd5b505afa158015611e23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e479190612654565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611eb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eab90612955565b60405180910390fd5b611ee07f4cbc0458d915ed901bb435182e4db260d9ffb6e8523971d382569c454cb9ebf760001b6123c7565b611f0c7fd4d3090ff81e66ca7b98fd1a53f9334d872516ad19021088b574537c25dc37cf60001b6123c7565b611f387f804d37f2379ccc2956245942270169383fbe54fbf3943c80e7fbea91366b145860001b6123c7565b611f647fb9c539d6a4f0236afd2b6064e7334414d7a81531d18374c2be96cc5706b7ec3660001b6123c7565b611f907f099d2f438a11217333d7017e7f29ad9e70fc66cddbcde5bc0275241d545c89e960001b6123c7565b6000849050611fc17f5f3b16e7c6ca4f83dbff04f2f2e9d31136e40c932d326c2552868495e6252de860001b6123c7565b611fed7f6f9316a370172b456fcdaadb7724e3d3f7dc683275579ce1cb8d4d14f30d905360001b6123c7565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016120289190612868565b60206040518083038186803b15801561204057600080fd5b505afa158015612054573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061207891906127a9565b90506120a67f49ea540143294d5ff691864d650c6b73265399202cefb86021276bff7d3aaf7b60001b6123c7565b6120d27fc92b0745c5e0d57fb48cd345b9ab6cbe6557cb2b3761e865509b9b72790ebdf360001b6123c7565b84811061224d576121057fab0bdcdb1f8c9451f9dddbaa2525a859be44eabad1c3a80090e7e1c7991bc2d860001b6123c7565b6121317f19574b9cc744390dcead75525179e2b581637281398d57b17a6d7d1c848f7ea160001b6123c7565b61215d7fb56b5e39f40f9b72b345988f0a46cc88379d9e0f5e26102d5463604ef741bcd360001b6123c7565b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33876040518363ffffffff1660e01b81526004016121989291906128ba565b602060405180830381600087803b1580156121b257600080fd5b505af11580156121c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121ea9190612757565b506122177f34e05bd3ee8cdf7683ff97d035777fdeb3ea58f71ad1fa650ee236238643e64060001b6123c7565b6122437f273fd8baa1654100adbd8bf18229265e950f1fcbdb6302e9ab0e0b0a32fc3aef60001b6123c7565b84935050506123bd565b6122797ff889d46e10ef3b3a6d11d596ed5b54df0cb6c7a5f589b036715c2c0e1c073a5860001b6123c7565b6122a57f92e934da01b76b07e81b928e936456249e16bef2118a208e6c427a34da16b42760001b6123c7565b6122d17f030e58bfc1f94927b2b439d4cbece6e48735ef3bed9fb5cf58551f83f7c2af5c60001b6123c7565b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161230c9291906128ba565b602060405180830381600087803b15801561232657600080fd5b505af115801561233a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061235e9190612757565b5061238b7fd8cc50ba403889455fb0ef8d6e6927a35d873ad4e8d919931578feaf201b4a7e60001b6123c7565b6123b77fec70f763e224ae0a66890db37c4770584701ef8d75a09c09e415a67ed352a75060001b6123c7565b80935050505b5092915050565b50565b50565b6123f67fd08b1176d949dd9ab5d4a27eace58ee69db6d1bd9375f15faa8e2cac09abd30160001b6123c4565b6124227f8dc23c781b5b726583a860cabdb6ee22e9ab8f0b85036d421679cd898e68dba260001b6123c4565b61244e7f8e8b33978f53acaf5d55bab4b5a4436f87ab3ee34fa2c49aa7e807ac217714a360001b6123c4565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506124a07ff22f2257305e2ffde0dd273eb5198d3f4f356b7a44e9bb5a03eede4bea94017160001b6123c4565b6124cc7ff6a95ee8803a29551ad899c855f7d9ed48000faaca46dd8b8311809e934c5fc860001b6123c4565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506125387f9a40606a3e2aed1c2c8ad87c71df88a71c7f8e50c04650f108fb2c2f48bb434960001b6123c4565b6125647fc273bd9a94d576db81b5f93e145c9a09b324157e7ca73d49d11d3be3d68e731860001b6123c4565b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000813590506125d181612ca0565b92915050565b6000815190506125e681612ca0565b92915050565b6000815190506125fb81612cb7565b92915050565b60008135905061261081612cce565b92915050565b60008151905061262581612cce565b92915050565b60006020828403121561263d57600080fd5b600061264b848285016125c2565b91505092915050565b60006020828403121561266657600080fd5b6000612674848285016125d7565b91505092915050565b6000806040838503121561269057600080fd5b600061269e858286016125c2565b92505060206126af85828601612601565b9150509250929050565b6000806000606084860312156126ce57600080fd5b60006126dc868287016125c2565b93505060206126ed86828701612601565b92505060406126fe868287016125c2565b9150509250925092565b60008060006060848603121561271d57600080fd5b600061272b868287016125c2565b935050602061273c86828701612601565b925050604061274d86828701612601565b9150509250925092565b60006020828403121561276957600080fd5b6000612777848285016125ec565b91505092915050565b60006020828403121561279257600080fd5b60006127a084828501612601565b91505092915050565b6000602082840312156127bb57600080fd5b60006127c984828501612616565b91505092915050565b6127db81612b0d565b82525050565b6127ea81612b1f565b82525050565b60006127fd6028836129e7565b915061280882612bb3565b604082019050919050565b60006128206027836129e7565b915061282b82612c02565b604082019050919050565b60006128436035836129e7565b915061284e82612c51565b604082019050919050565b61286281612b4b565b82525050565b600060208201905061287d60008301846127d2565b92915050565b600060608201905061289860008301866127d2565b6128a560208301856127d2565b6128b26040830184612859565b949350505050565b60006040820190506128cf60008301856127d2565b6128dc6020830184612859565b9392505050565b60006060820190506128f860008301866127d2565b6129056020830185612859565b6129126040830184612859565b949350505050565b600060208201905061292f60008301846127e1565b92915050565b6000602082019050818103600083015261294e816127f0565b9050919050565b6000602082019050818103600083015261296e81612813565b9050919050565b6000602082019050818103600083015261298e81612836565b9050919050565b60006020820190506129aa6000830184612859565b92915050565b60006060820190506129c56000830186612859565b6129d26020830185612859565b6129df6040830184612859565b949350505050565b600082825260208201905092915050565b6000612a0382612b4b565b9150612a0e83612b4b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612a4357612a42612b55565b5b828201905092915050565b6000612a5982612b4b565b9150612a6483612b4b565b925082612a7457612a73612b84565b5b828204905092915050565b6000612a8a82612b4b565b9150612a9583612b4b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612ace57612acd612b55565b5b828202905092915050565b6000612ae482612b4b565b9150612aef83612b4b565b925082821015612b0257612b01612b55565b5b828203905092915050565b6000612b1882612b2b565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f48617368757043726561746f72736869703a2063616c6c6572206973206e6f7460008201527f2063726561746f72000000000000000000000000000000000000000000000000602082015250565b7f48617368757053746f72653a206d75737420626520436172747269646765206360008201527f726561746f722e00000000000000000000000000000000000000000000000000602082015250565b7f48617368757043726561746f72736869703a2063616e6e6f742073657420637260008201527f6561746f7220746f207a65726f20616464726573730000000000000000000000602082015250565b612ca981612b0d565b8114612cb457600080fd5b50565b612cc081612b1f565b8114612ccb57600080fd5b50565b612cd781612b4b565b8114612ce257600080fd5b5056fea26469706673582212205cfc716cc92b767d243ddea8166ea8a96044f0cfbecd886bcd8d8852d4d56f1164736f6c63430008040033";

export class HashupStore__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _paymentToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HashupStore> {
    return super.deploy(_paymentToken, overrides || {}) as Promise<HashupStore>;
  }
  getDeployTransaction(
    _paymentToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_paymentToken, overrides || {});
  }
  attach(address: string): HashupStore {
    return super.attach(address) as HashupStore;
  }
  connect(signer: Signer): HashupStore__factory {
    return super.connect(signer) as HashupStore__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HashupStoreInterface {
    return new utils.Interface(_abi) as HashupStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HashupStore {
    return new Contract(address, _abi, signerOrProvider) as HashupStore;
  }
}
