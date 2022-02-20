const userReducer = (state, action) => {

    if (action.type === 'login') {
        return {
            username: action.username,
            token: action.token,
            logState: true,
        }

    } else if (action.type === 'logout') {
        return {
            username: '',
            token: '',
            logState: false,
        }
    }

}


export default userReducer;