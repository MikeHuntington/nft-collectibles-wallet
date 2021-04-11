import { ImageSourcePropType } from "react-native"

export interface UserInterface {
    id: String,
    username: string
    avatar?: ImageSourcePropType
}

export interface CommentInterface {
    user: UserInterface
    comment: string
}

export interface PostInterface {
    id: string
    user: UserInterface
    caption: string
    likes: String[]
    comments: CommentInterface[]
}

export interface PhraseInterface {
    phrase?: string
}

export const GENERATE_PHRASE = "GENERATE_PHRASE"
export const UPDATE_FEED = "UPDATE_FEED"
export const LIKE_POST = "LIKE_POST"

interface GeneratePhraseAction {
    type: typeof GENERATE_PHRASE,
    payload: PhraseInterface
}

interface UpdateFeedAction {
    type: typeof UPDATE_FEED,
    payload: PostInterface[]
}

interface LikePostAction  {
    type: typeof LIKE_POST,
    payload: PostInterface[]
}

export type KeyringActionTypes = GeneratePhraseAction | UpdateFeedAction | LikePostAction