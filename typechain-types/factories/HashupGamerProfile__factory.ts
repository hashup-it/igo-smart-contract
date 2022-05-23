/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HashupGamerProfile,
  HashupGamerProfileInterface,
} from "../HashupGamerProfile";

const _abi = [
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newNickname",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newColor",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newAvatar",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newDescription",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newSocials",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "UpdatedProfile",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "VerifiedUser",
    type: "event",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "gotReward",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "nicknameOwners",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pointsEarned",
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
    name: "profiles",
    outputs: [
      {
        internalType: "string",
        name: "nickname",
        type: "string",
      },
      {
        internalType: "string",
        name: "color",
        type: "string",
      },
      {
        internalType: "string",
        name: "avatar",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "socials",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isVerified",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        internalType: "string",
        name: "_nickname",
        type: "string",
      },
      {
        internalType: "string",
        name: "_color",
        type: "string",
      },
      {
        internalType: "string",
        name: "_avatar",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_socials",
        type: "string",
      },
      {
        internalType: "address",
        name: "_refferer",
        type: "address",
      },
    ],
    name: "updateProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_value",
        type: "bool",
      },
    ],
    name: "verifyProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100203361002560201b60201c565b6100e9565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611808806100f86000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806356412d3a1161005b57806356412d3a1461013b5780636d2e4b1b14610157578063bbe1562714610173578063e22b125b146101a857610088565b806302d05d3f1461008d5780634b8fc7d3146100ab57806350f4f7e7146100db5780635398a74f1461010b575b600080fd5b6100956101c4565b6040516100a29190611254565b60405180910390f35b6100c560048036038101906100c09190610f00565b6101ed565b6040516100d29190611429565b60405180910390f35b6100f560048036038101906100f09190610f00565b610205565b604051610102919061132a565b60405180910390f35b61012560048036038101906101209190610f65565b610225565b6040516101329190611254565b60405180910390f35b61015560048036038101906101509190610f29565b61026e565b005b610171600480360381019061016c9190610f00565b61037a565b005b61018d60048036038101906101889190610f00565b61046b565b60405161019f96959493929190611345565b60405180910390f35b6101c260048036038101906101bd9190610fa6565b61075c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60026020528060005260406000206000915090505481565b60016020528060005260406000206000915054906101000a900460ff1681565b6003818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff1661028d6101c4565b73ffffffffffffffffffffffffffffffffffffffff16146102e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102da906113c9565b60405180910390fd5b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160006101000a81548160ff0219169083151502179055507ff0d3aa896be1783a313f19ba0f3066aab0fd142c6247b25088bd73ee8771de30828260405161036e92919061126f565b60405180910390a15050565b3373ffffffffffffffffffffffffffffffffffffffff166103996101c4565b73ffffffffffffffffffffffffffffffffffffffff16146103ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e6906113c9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561045f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610456906113e9565b60405180910390fd5b61046881610a1e565b50565b600460205280600052604060002060009150905080600001805461048e906115b6565b80601f01602080910402602001604051908101604052809291908181526020018280546104ba906115b6565b80156105075780601f106104dc57610100808354040283529160200191610507565b820191906000526020600020905b8154815290600101906020018083116104ea57829003601f168201915b50505050509080600101805461051c906115b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610548906115b6565b80156105955780601f1061056a57610100808354040283529160200191610595565b820191906000526020600020905b81548152906001019060200180831161057857829003601f168201915b5050505050908060020180546105aa906115b6565b80601f01602080910402602001604051908101604052809291908181526020018280546105d6906115b6565b80156106235780601f106105f857610100808354040283529160200191610623565b820191906000526020600020905b81548152906001019060200180831161060657829003601f168201915b505050505090806003018054610638906115b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610664906115b6565b80156106b15780601f10610686576101008083540402835291602001916106b1565b820191906000526020600020905b81548152906001019060200180831161069457829003601f168201915b5050505050908060040180546106c6906115b6565b80601f01602080910402602001604051908101604052809291908181526020018280546106f2906115b6565b801561073f5780601f106107145761010080835404028352916020019161073f565b820191906000526020600020905b81548152906001019060200180831161072257829003601f168201915b5050505050908060050160009054906101000a900460ff16905086565b61076586610ae2565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050828160040190805190602001906107c0929190610dcb565b50838160030190805190602001906107d9929190610dcb565b50858160010190805190602001906107f2929190610dcb565b508481600201908051906020019061080b929190610dcb565b50600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166109d25760018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600a600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461090491906114d6565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415801561097457503373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156109d1576005600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109c991906114d6565b925050819055505b5b7f193be08ff957394791f8ad84d18f9f78ff9b8f7a94538bd6bd1c441fea88e01b33888888888888604051610a0d9796959493929190611298565b60405180910390a150505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff16600382604051610b0a9190611226565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480610bc457503373ffffffffffffffffffffffffffffffffffffffff16600382604051610b7d9190611226565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b610c03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfa90611409565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600382604051610c2a9190611226565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610dc85760006003600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001604051610cc7919061123d565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000019080519060200190610d69929190610dcb565b5033600382604051610d7b9190611226565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b828054610dd7906115b6565b90600052602060002090601f016020900481019282610df95760008555610e40565b82601f10610e1257805160ff1916838001178555610e40565b82800160010185558215610e40579182015b82811115610e3f578251825591602001919060010190610e24565b5b509050610e4d9190610e51565b5090565b5b80821115610e6a576000816000905550600101610e52565b5090565b6000610e81610e7c84611469565b611444565b905082815260208101848484011115610e9957600080fd5b610ea4848285611574565b509392505050565b600081359050610ebb816117a4565b92915050565b600081359050610ed0816117bb565b92915050565b600082601f830112610ee757600080fd5b8135610ef7848260208601610e6e565b91505092915050565b600060208284031215610f1257600080fd5b6000610f2084828501610eac565b91505092915050565b60008060408385031215610f3c57600080fd5b6000610f4a85828601610eac565b9250506020610f5b85828601610ec1565b9150509250929050565b600060208284031215610f7757600080fd5b600082013567ffffffffffffffff811115610f9157600080fd5b610f9d84828501610ed6565b91505092915050565b60008060008060008060c08789031215610fbf57600080fd5b600087013567ffffffffffffffff811115610fd957600080fd5b610fe589828a01610ed6565b965050602087013567ffffffffffffffff81111561100257600080fd5b61100e89828a01610ed6565b955050604087013567ffffffffffffffff81111561102b57600080fd5b61103789828a01610ed6565b945050606087013567ffffffffffffffff81111561105457600080fd5b61106089828a01610ed6565b935050608087013567ffffffffffffffff81111561107d57600080fd5b61108989828a01610ed6565b92505060a061109a89828a01610eac565b9150509295509295509295565b6110b08161152c565b82525050565b6110bf8161153e565b82525050565b60006110d0826114af565b6110da81856114ba565b93506110ea818560208601611583565b6110f3816116a6565b840191505092915050565b6000611109826114af565b61111381856114cb565b9350611123818560208601611583565b80840191505092915050565b6000815461113c816115b6565b61114681866114cb565b945060018216600081146111615760018114611172576111a5565b60ff198316865281860193506111a5565b61117b8561149a565b60005b8381101561119d5781548189015260018201915060208101905061117e565b838801955050505b50505092915050565b60006111bb6028836114ba565b91506111c6826116b7565b604082019050919050565b60006111de6035836114ba565b91506111e982611706565b604082019050919050565b6000611201602e836114ba565b915061120c82611755565b604082019050919050565b6112208161156a565b82525050565b600061123282846110fe565b915081905092915050565b6000611249828461112f565b915081905092915050565b600060208201905061126960008301846110a7565b92915050565b600060408201905061128460008301856110a7565b61129160208301846110b6565b9392505050565b600060e0820190506112ad600083018a6110a7565b81810360208301526112bf81896110c5565b905081810360408301526112d381886110c5565b905081810360608301526112e781876110c5565b905081810360808301526112fb81866110c5565b905081810360a083015261130f81856110c5565b905061131e60c08301846110a7565b98975050505050505050565b600060208201905061133f60008301846110b6565b92915050565b600060c082019050818103600083015261135f81896110c5565b9050818103602083015261137381886110c5565b9050818103604083015261138781876110c5565b9050818103606083015261139b81866110c5565b905081810360808301526113af81856110c5565b90506113be60a08301846110b6565b979650505050505050565b600060208201905081810360008301526113e2816111ae565b9050919050565b60006020820190508181036000830152611402816111d1565b9050919050565b60006020820190508181036000830152611422816111f4565b9050919050565b600060208201905061143e6000830184611217565b92915050565b600061144e61145f565b905061145a82826115e8565b919050565b6000604051905090565b600067ffffffffffffffff82111561148457611483611677565b5b61148d826116a6565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006114e18261156a565b91506114ec8361156a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561152157611520611619565b5b828201905092915050565b60006115378261154a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156115a1578082015181840152602081019050611586565b838111156115b0576000848401525b50505050565b600060028204905060018216806115ce57607f821691505b602082108114156115e2576115e1611648565b5b50919050565b6115f1826116a6565b810181811067ffffffffffffffff821117156116105761160f611677565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f48617368757043726561746f72736869703a2063616c6c6572206973206e6f7460008201527f2063726561746f72000000000000000000000000000000000000000000000000602082015250565b7f48617368757043726561746f72736869703a2063616e6e6f742073657420637260008201527f6561746f7220746f207a65726f20616464726573730000000000000000000000602082015250565b7f48617368757047616d657250726f66696c653a2050726f7669646564206e696360008201527f6b6e616d652069732074616b656e000000000000000000000000000000000000602082015250565b6117ad8161152c565b81146117b857600080fd5b50565b6117c48161153e565b81146117cf57600080fd5b5056fea264697066735822122056eb02ba96fb1d6baa73d443f59ccda1485423e34fb172beca28ece09bf091f864736f6c63430008040033";

export class HashupGamerProfile__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HashupGamerProfile> {
    return super.deploy(overrides || {}) as Promise<HashupGamerProfile>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HashupGamerProfile {
    return super.attach(address) as HashupGamerProfile;
  }
  connect(signer: Signer): HashupGamerProfile__factory {
    return super.connect(signer) as HashupGamerProfile__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HashupGamerProfileInterface {
    return new utils.Interface(_abi) as HashupGamerProfileInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HashupGamerProfile {
    return new Contract(address, _abi, signerOrProvider) as HashupGamerProfile;
  }
}
