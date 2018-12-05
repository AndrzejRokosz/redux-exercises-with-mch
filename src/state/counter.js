
// ACTION TYPES
const INC = 'counter/INC'
const DEC = 'counter/DEC'

// ACTIONS CREATORS - RETURNS ACTIONS
export const inc = () => ({
    type: INC
})

export const dec = () => ({
    type: DEC
})

// INITIAL STATE
const INITIAL_STATE = {
    number: 0
}

// REDUCER
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                number: state.number + 1
            }
        case DEC:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state
    }
}