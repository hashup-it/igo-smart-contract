/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BlueCartridgeTokenV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BlueCartridgeTokenV0__factory>;
    getContractFactory(
      name: "Cartridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Cartridge__factory>;
    getContractFactory(
      name: "CartridgeOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CartridgeOwnable__factory>;
    getContractFactory(
      name: "GoldCartridgeTokenV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GoldCartridgeTokenV0__factory>;
    getContractFactory(
      name: "GrayCartridgeTokenV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GrayCartridgeTokenV0__factory>;
    getContractFactory(
      name: "GreenCartridgeTokenV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GreenCartridgeTokenV0__factory>;
    getContractFactory(
      name: "HashupIGO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HashupIGO__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "RedCartridgeTokenV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RedCartridgeTokenV0__factory>;
    getContractFactory(
      name: "USDTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDTest__factory>;

    getContractAt(
      name: "BlueCartridgeTokenV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BlueCartridgeTokenV0>;
    getContractAt(
      name: "Cartridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Cartridge>;
    getContractAt(
      name: "CartridgeOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CartridgeOwnable>;
    getContractAt(
      name: "GoldCartridgeTokenV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GoldCartridgeTokenV0>;
    getContractAt(
      name: "GrayCartridgeTokenV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GrayCartridgeTokenV0>;
    getContractAt(
      name: "GreenCartridgeTokenV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GreenCartridgeTokenV0>;
    getContractAt(
      name: "HashupIGO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HashupIGO>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "RedCartridgeTokenV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RedCartridgeTokenV0>;
    getContractAt(
      name: "USDTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDTest>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
