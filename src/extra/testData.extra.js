const phraseData = {
    phrase: "lion october thank mom level patch angry clarify glow kid dry caution"
}

const seriesData = [
    {id:"1", count:2, name:"This is a really long name", image:"https://images.unsplash.com/photo-1618386230353-3631c1365be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"},
    {id:"2", count:2, name:"Ladies Series", image:"https://images.unsplash.com/photo-1618510050510-d0903984e131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"},
    {id:"3", count:321, name:"Space Series", image:"https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"},
    {id:"4", count:2, name:"skull", image:"https://images.unsplash.com/photo-1618449625138-62cb2b8a343a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"},
    {id:"5", count:2, name:"hero", image:"https://images.unsplash.com/photo-1618513847270-992347f2c59c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"}
]


const collectibleData = [
    {id:"1", name:"dragon", image:"https://images.unsplash.com/photo-1610926597998-fc7f2c1b89b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"},
    {id:"2", name:"bird", image:"https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"},
    {id:"3", name:"pony", image:"https://images.unsplash.com/photo-1613043399165-d6ae7327ae02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"},
    {id:"4", name:"skull", image:"https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"},
    {id:"5", name:"hero", image:"https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"}
]

const scanData = {
    provider: {
        id: 'network.gamepower.Wallet',
        name: 'GamePower Network',
        endpoints: ['gamepower.io'],
        standard: 'orml',
        module: 'ormlNFT'
    },
    nft: {
        id: 'de4558fbap89s65dfjb430390345bjsass54ee'
    }
}
//lootboxwallet://claim;pid:network.gamepower.Wallet;name:GamePower Network;enpoints:gamepower.io|gamepower.network;standard:orml;module:ormlNFT;nft:de4558fbap89s65dfjb430390345bjsass54ee

const nftData = {
    collection: '0ahhadf874a77b-APPL',
    name: 'Golden Skull',
    instance: 'Dragon_0ahhadf874a77b-APPL',
    transferable: 1,
    sn: '00000000001',
    metadata: {
        title: 'Golden Skull',
        name: 'Golden Skull',
        type: 'object',
        external_link: 'https://lootbox.gamepower.network/',
        image: 'https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', //350 x 350
        description: "A photo of an apple",
        attributes: [
            {
                trait_type: "Creator",
                value: "GamePower"
            },
            {
                trait: "health",
                value: 20
            }
        ],
        properties: {
            name: {
                type: "string",
                description: "Apple"
            },
            description: {
                type: "string",
                description: "Just an Apple"
            },
            preview_media_file: {
                type: "string",
                description: "https://ipfsgateway.makersplace.com/ipfs/QmZ15eQX8FPjfrtdX3QYbrhZxJpbLpvDpsgb2p3VEH8Bqq"
            },
            preview_media_file_type: {
                type: "string",
                description: "jpg"
            },
            created_at: {
                type: "datetime",
                description: "2021-02-16T00:07:31.674688+00:00"
            },
            total_supply: {
                type: "int",
                description: 1
            },
            raw_media_file: {
                type: "string",
                description: "https://ipfsgateway.makersplace.com/ipfs/QmZ15eQX8FPjfrtdX3QYbrhZxJpbLpvDpsgb2p3VEH8Bqq"
            }
        }
    },
    data: {
        "protocol": "https",
        "data": "http://image-goes-here.jpg",
        "type": "image/png"
    }
}

export const testData = {
    phraseData,
    collectibleData,
    nftData,
    scanData,
    seriesData
}