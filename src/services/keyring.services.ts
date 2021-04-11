import { mnemonicGenerate } from '../extra/util/bip39Util'

import { testData } from '../extra/testData.extra';
import { PhraseInterface, PostInterface } from '../redux/types';

export const keyringService = {
    generatePhrase,
};

async function generatePhrase(): Promise<PhraseInterface> {
    //return testData.phraseData
    const mnemonic = await mnemonicGenerate(12);
    return { phrase: mnemonic }
}

async function likePost({ postId, userId }: { postId: String, userId: String }): Promise<PostInterface[]> {
    // return await getFromServer('/api/');
    const posts = testData.posts
    posts.map((post: PostInterface) => {
        if (post.id == postId) {
            if (post.likes.find(like => like == userId))
                post.likes = post.likes.filter(like => like != userId)
            else post.likes.push(userId)
        }
    })
    return posts
}