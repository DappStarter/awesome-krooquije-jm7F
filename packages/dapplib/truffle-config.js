require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note punch evil hunt merry fog start'; 
let testAccounts = [
"0x0818958bad99f94329dd21c5ff3d5be3d32c519e75fd67e25683169088371aa0",
"0x7c073e5721517106aac4e06a3c826937fa9f9a9ea6648c45126a2973361a7380",
"0xaedd922b58b66e00f36088b101263aa527e783e1d99cba96ad4aa3608fed583f",
"0x3f2dd44f70da168b2dccb08de8fe185cb98d6f1567f2a89804da0b2bdae5c53e",
"0x999a001716d5965bb432a22b3e26eb82cc6f70f8a216fbbc64b7e66aededa17a",
"0x5dfb7241abde3c9256ea1d0e4fc8ab4cddfb89800d3e687ea3b884d5a94f6b99",
"0x4dcf2839eb706ec9d9e9da90779e05bbebfbe536b638815eaca9b4fbfd484490",
"0xd0af26a448f9564a94ff0bb9a6f6c95ab44076573bf1f7fd695e4866062d34ab",
"0x7b7feb30e1f4ef1547262599b364a99f8b12993e46a6edae13ec5c6cf15da231",
"0x6b27b19a2c4dd4e4333166a5c1d721cda8cffa5a90cff817988210252ab734c5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

