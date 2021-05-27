export default {
    signupUser: (state, payload) => { state.users.push(payload); },
	checkCurrentUsername: (state, payload) => { state.currentUser = payload; },
    setEmailVerification: (state, payload) => { state.otpbody = payload; },
    setTokenResponse: (state, payload) => { state.tokenResponse = payload; },
    setUserLogin: (state, payload) => { state.userLogin.push(payload); },
    setPin: (state, payload) => { state.pin = payload; },
    setLoginResponse: (state, payload) => { state.loginResponse = payload; },
    setLoggedUser: (state, payload) =>{
        state.loggedUser = payload;
        state.isLoggedIn = true;
    },
    setUserDetails: (state, payload) => { state.userDetails = payload;},
    setPassword: (state, payload) => { state.forgotPassword = payload;},
    setResetPassword: (state, payload) => { state.resetPassword = payload;
    },
}

/* async resetPassword({token, password}) {
		console.log(token, password);
		const response = await axios.post(`https://wallet-app-jupyter.herokuapp.com/api/v1/auth/reset-password ${token}`, {password});
		console.log('ttre', response.data);
		return response;
	}, */