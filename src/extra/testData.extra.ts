import moment from 'moment'
import { PhraseInterface, PostInterface } from '../redux/types'

const userNoah = { id: "7", username: 'noah' }
const userJonas = { id: "1", username: 'jonaskahnwald' }
const userBartosz = { id: "2", username: 'bartosztiedemann' }
const userMagnus = { id: "3", username: 'magnusnielsen' }
const userFranziska = { id: "4", username: 'franziskadoppler' }
const reginaTiedelmann = { id: "5", username: 'reginatiedelmann' }
const ulrichNielsen = { id: "6", username: 'ulrichnielsen' }

const phraseData: PhraseInterface = {
    phrase: "lion october thank mom level patch angry clarify glow kid dry caution"
}

const posts: PostInterface[] = [
    {
        id: String(moment().unix() + 1),
        user: userJonas,
        caption: "New season out",
        likes: ["2"],
        comments: [{ user: userBartosz, comment: "so excited for the new season!" }, { user: userFranziska, comment: "can't wait!" }]
    },
    {
        id: String(moment().unix() + 2),
        user: userMagnus,
        caption: "tbt",
        likes: ["2", "3"],
        comments: [{ user: userJonas, comment: "Nice!" }, { user: userFranziska, comment: "Aww!" }]
    },
    {
        id: String(moment().unix() + 3),
        user: userBartosz,
        caption: "bff",
        likes: ["2"],
        comments: []
    },
    {
        id: String(moment().unix() + 4),
        user: reginaTiedelmann,
        caption: "gretchen <3",
        likes: ["2", "3", "4", "5"],
        comments: [{ user: userFranziska, comment: "cute!" }]
    },
    {
        id: String(moment().unix() + 5),
        user: ulrichNielsen,
        caption: "my only aim is to take many lives, the more the better I feel",
        likes: ["1", "2"],
        comments: []
    },
    {
        id: String(moment().unix() + 6),
        user: userJonas,
        caption: "back to school",
        likes: ["1", "2"],
        comments: []
    }
]

export const testData = {
    userJonas,
    posts,
    phraseData
}