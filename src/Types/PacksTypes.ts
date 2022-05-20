export type FilterPacksType = "All" | "My";

export type ParamsPacksType = {
    packName: string
    min: number
    max: number
    sortPacks: '0updated' | '1updated',
    page: number
    pageCount: number
    user_id: string,
};

export type UpdatePackType = {
    namePack: string
    private: boolean
};

export type PacksType = {
    key: string,
    name: string,
    cards: number,
    last_updated: string,
    created_by: string,
}
export type PacksParamsType = {
    packName: string
    min: number
    max: number
    sortPacks: string
    page: number
    pageCount: number
    user_id: string
}

export type CreatePackType = {
    cardsPack: {
        name?: string
        deckCover?: string
        private?: boolean
    }
}

export type OnePacksType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
    grade: number
    more_id: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    user_name: string
    __v: number
}

export type ResponseCardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    _id: string
    user_id: string
    created: string
    updated: string
}

export type GetCardsResponseType = {
    cards: ResponseCardsType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: number
}

export type ResponsePacksType = {
    cardPacks: OnePacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}

export type RequestUpdatePackType = {
    _id: string
    name: string
    private: boolean
}

export type FormikErrorType = {
    namePack?: string;
    private?: boolean
};
