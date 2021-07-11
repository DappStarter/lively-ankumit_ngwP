require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name radar rifle huge hope entry army gesture'; 
let testAccounts = [
"0xf156f09adcda986e942631dd2c4726db77a4ebdd561cedf9d357057eda0cae3a",
"0xa32f85b90dac6ab0b04cb4246e87e2fdc5e2a5b643041140921bc575d68d51ff",
"0xf04c327ae8fe73d219a87479420806b20dec983ca4acae5c3aa280178d7a00e0",
"0xa48d92d7380c2fc38dbaf7a675b26fc856d6b27f2626344c9306686d6eb9c2ed",
"0x8c125b07387bebd4963999f4bafc347226a9e48380f5bf69a8ab398eae26fa7b",
"0xf76c78a06ccade36b611b4c82de78dd7b4a67827c9bb3d469e1025b2ca0c28d0",
"0x703a0779ad8b4a81a79fa53153000dc7474c565f0682ec7dbe32e04e340587a7",
"0x8f83a80816239acbf3d419c17944a3d6cfcb67fef063c0ca8248d15f8bd7ec9d",
"0x92587b4208ad5cfc27d78b2f891b804f0c35ecedd2fd53fe4093e0dfe80e890b",
"0x613c606bc98482c3ec739f3b16a965876d5679200f5adab6b94b03c053ecd25f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

