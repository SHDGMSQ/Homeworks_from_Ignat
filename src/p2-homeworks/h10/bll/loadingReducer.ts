export type InitStateType = {
    loading: boolean
}
const initState = {
    loading: false
}

const SET_LOADING = 'SET_LOADING'

export const loadingReducer = (state:InitStateType = initState, action: loadingACType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loading: action.payload.loading}
        }
        default: return state
    }
}

type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => {
    return {
        type: SET_LOADING,
        payload: {
            loading
        }
    } as const
}