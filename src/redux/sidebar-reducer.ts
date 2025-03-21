

type friendType = {
    id: number
    avaPath: string | null
    name: string
}


let initialState = {
    friends: [
        {
            id: 1,
            avaPath: 'https://steamuserimages-a.akamaihd.net/ugc/2045245270074876117/E9D4584423782EE94614B15674CEAE4221A312B9/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
            name: 'Миша'
        },
        {
            id: 2,
            avaPath: 'https://cs2c9f.4pda.ws/18211540.png',
            name: 'Егор'
        },
        {
            id: 3,
            avaPath: 'https://steamuserimages-a.akamaihd.net/ugc/787490852837681446/0A92D34BC231337330D67B370FA7D258C3D391EF/?imw=512&amp;imh=672&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
            name: 'Сёма'
        }
    ] as Array<friendType>
}

type initialStateType = typeof initialState
export const sidebarReducer = (state = initialState, action: any): initialStateType => {
    return state
}
