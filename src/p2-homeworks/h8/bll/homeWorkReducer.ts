import {UserType} from "../HW8";


export const homeWorkReducer = (state: Array<UserType>, action: GeneralType): Array<UserType> => { // need to fix any

    let stateCopy = state.map(m => m).sort(function (a,b){
        if (a.name > b.name){
            return 1;
        }
        if (a.name < b.name){
            return -1;
        }
        return 0;
    })

    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return stateCopy
            }
             else if (action.payload === 'down') {
                return stateCopy.reverse()
            }
            return state
        }
        case 'check': {
            return state.filter(f => f.age > action.payload)
        }
        default:
            return state
    }
}


type GeneralType = sortUpACType
    | sortDownACType
    | checkACType


type sortUpACType = ReturnType<typeof sortUpAC>
const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}

type sortDownACType = ReturnType<typeof sortDownAC>
const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}

type checkACType = ReturnType<typeof checkAC>
const checkAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}

