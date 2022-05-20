export type CardsResponseType = {
    cards: OneCardType[]
    cardsTotalCount: number
    params: ParamsCardsType
    isFetching: boolean
    packUserId: string
}

export type ParamsCardsType = {
    cardAnswer: string
    cardQuestion: string
    cardsPack_id: string
    min: number
    max: number
    sortCards: '0grade' | '1grade'
    page: number
    pageCount: number
}

export type OneCardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
    answerImg: string
    answerVideo: string
    comments: string
    more_id: string
    questionImg: string
    questionVideo: string
    rating: number
    type: string
    __v: number
}

export type RequestCardsType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: number
    max?: number
    sortCards?: string
    page?: number
    pageCount?: number
}

export type RequestCardPostType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
}

export type CardFormikErrorType = {
    question?: string;
    answer?: string
};


export type RequestCardUpdateType = {
    _id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
}