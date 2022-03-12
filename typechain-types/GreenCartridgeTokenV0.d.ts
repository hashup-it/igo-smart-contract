/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface GreenCartridgeTokenV0Interface extends ethers.utils.Interface {
  functions: {
    "HashUpWallet()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "allowed(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "balances(address)": FunctionFragment;
    "color()": FunctionFragment;
    "creator()": FunctionFragment;
    "decimals()": FunctionFragment;
    "feeDecimals()": FunctionFragment;
    "feeForCreator()": FunctionFragment;
    "feesCounter()": FunctionFragment;
    "getAmountAfterFees(uint256,address)": FunctionFragment;
    "hashUpIGO()": FunctionFragment;
    "metadata()": FunctionFragment;
    "name()": FunctionFragment;
    "setMetadata(string)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "HashUpWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowed",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "balances", values: [string]): string;
  encodeFunctionData(functionFragment: "color", values?: undefined): string;
  encodeFunctionData(functionFragment: "creator", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeForCreator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feesCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountAfterFees",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "hashUpIGO", values?: undefined): string;
  encodeFunctionData(functionFragment: "metadata", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "setMetadata", values: [string]): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "HashUpWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "color", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "creator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeForCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feesCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountAfterFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hashUpIGO", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "metadata", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    _owner: string;
    _spender: string;
    _value: BigNumber;
  }
>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & {
    _from: string;
    _to: string;
    _value: BigNumber;
  }
>;

export class GreenCartridgeTokenV0 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GreenCartridgeTokenV0Interface;

  functions: {
    HashUpWallet(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { remaining: BigNumber }>;

    allowed(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    color(overrides?: CallOverrides): Promise<[string]>;

    creator(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    feeDecimals(overrides?: CallOverrides): Promise<[number]>;

    feeForCreator(overrides?: CallOverrides): Promise<[BigNumber]>;

    feesCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAmountAfterFees(
      _value: BigNumberish,
      _from: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        recipientPart: BigNumber;
        creatorPart: BigNumber;
      }
    >;

    hashUpIGO(overrides?: CallOverrides): Promise<[string]>;

    metadata(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    setMetadata(
      _metadataUrl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  HashUpWallet(overrides?: CallOverrides): Promise<string>;

  allowance(
    _owner: string,
    _spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  allowed(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    _spender: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  color(overrides?: CallOverrides): Promise<string>;

  creator(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  feeDecimals(overrides?: CallOverrides): Promise<number>;

  feeForCreator(overrides?: CallOverrides): Promise<BigNumber>;

  feesCounter(overrides?: CallOverrides): Promise<BigNumber>;

  getAmountAfterFees(
    _value: BigNumberish,
    _from: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      recipientPart: BigNumber;
      creatorPart: BigNumber;
    }
  >;

  hashUpIGO(overrides?: CallOverrides): Promise<string>;

  metadata(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  setMetadata(
    _metadataUrl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    HashUpWallet(overrides?: CallOverrides): Promise<string>;

    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowed(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    color(overrides?: CallOverrides): Promise<string>;

    creator(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    feeDecimals(overrides?: CallOverrides): Promise<number>;

    feeForCreator(overrides?: CallOverrides): Promise<BigNumber>;

    feesCounter(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountAfterFees(
      _value: BigNumberish,
      _from: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        recipientPart: BigNumber;
        creatorPart: BigNumber;
      }
    >;

    hashUpIGO(overrides?: CallOverrides): Promise<string>;

    metadata(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    setMetadata(
      _metadataUrl: string,
      overrides?: CallOverrides
    ): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      _owner?: string | null,
      _spender?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _owner: string; _spender: string; _value: BigNumber }
    >;

    Approval(
      _owner?: string | null,
      _spender?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _owner: string; _spender: string; _value: BigNumber }
    >;

    "Transfer(address,address,uint256)"(
      _from?: string | null,
      _to?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _from: string; _to: string; _value: BigNumber }
    >;

    Transfer(
      _from?: string | null,
      _to?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _from: string; _to: string; _value: BigNumber }
    >;
  };

  estimateGas: {
    HashUpWallet(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowed(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    color(overrides?: CallOverrides): Promise<BigNumber>;

    creator(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    feeDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    feeForCreator(overrides?: CallOverrides): Promise<BigNumber>;

    feesCounter(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountAfterFees(
      _value: BigNumberish,
      _from: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashUpIGO(overrides?: CallOverrides): Promise<BigNumber>;

    metadata(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    setMetadata(
      _metadataUrl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    HashUpWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowed(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    color(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeForCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feesCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountAfterFees(
      _value: BigNumberish,
      _from: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashUpIGO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    metadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMetadata(
      _metadataUrl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
