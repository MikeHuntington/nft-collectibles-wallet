//import { mnemonicGenerate } from '../extra/util/bip39Util'

import { testData } from '../extra/testData.extra';

export const keyringService = {
    generatePhrase,
};

async function generatePhrase() {
    return testData.phraseData
    //const mnemonic = await mnemonicGenerate(12);
    //return { phrase: mnemonic }
}

async function likePost({ postId, userId }) {
    // return await getFromServer('/api/');
    const posts = testData.posts
    posts.map((post) => {
        if (post.id == postId) {
            if (post.likes.find(like => like == userId))
                post.likes = post.likes.filter(like => like != userId)
            else post.likes.push(userId)
        }
    })
    return posts
}