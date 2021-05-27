
export default {
    userSignup: (state) => state.users,
    getTokenResponse: (state) => state.tokenResponse,
    getUserLogin: (state) => state.userLogin,
    getPin: (state) => state.pin,
    getLoginResponse : (state) => state.loginResponse,
    getIsLoggedIn: (state) => state.isLoggedIn,
    getloggedUser: (state) => state.loggedUser,
    getUserProfile: (state) => state.userDetails,
    getPassword: (state) => state.forgotPassword,
    getResetPassword: (state) => state.resetPassword,
}