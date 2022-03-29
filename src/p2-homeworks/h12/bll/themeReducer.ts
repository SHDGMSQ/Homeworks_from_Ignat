const initState = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ChangeThemeCType): { theme: string } => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.payload.option};
        }
        default:
            return state;
    }
};
type ChangeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (option: string): { payload: { option: string }; type: 'CHANGE-THEME' } => {
    return {
        type: 'CHANGE-THEME',
        payload: {
            option
        }
    } as const;
};