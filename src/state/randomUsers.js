
const SET_USERS = 'randomUsers/SET_USERS'

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
})


const INITIAL_STATE = {
    users: [

    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }



        default:
            return state
    }
}