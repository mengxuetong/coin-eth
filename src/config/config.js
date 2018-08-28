import ContractConfig, {gameAddress, transferAddress} from './abi'

const dev = {
    network: {
        protocol:'http',
        blockchain:'eos',
        host:'88.99.193.44',
        port: 8888,
        chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
        broadcast: true
    },
    tokenName: 'dacccoin',
    accountToName: 'dacccoin',
    userTable: 'accounts',
    gamesTable: 'games',
    transferTo: '0x4710827d464e2f815d47198be4f491ad6c214e8d',
    gameAbi: ContractConfig.gameAbi,
    transferAbi: ContractConfig.transferAbi,
    gameAddress: ContractConfig.gameAddress,
    transferAddress: ContractConfig.transferAddress,
    address: '0xa7de0e90c6f69769aa8e94a1f075b842a7642725'
}

const product = {
    network: {
        protocol:'https', // Defaults to https
        blockchain:'eos',
        host:'nodes.get-scatter.com', // ( or null if endorsed chainId )
        port: 443, // ( or null if defaulting to 80 )
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
        broadcast: true
    },
    tokenName: 'dacccoin',
    accountToName: 'dacccoin',
    userTable: 'accounts',
    gamesTable: 'games'
}

export default dev
