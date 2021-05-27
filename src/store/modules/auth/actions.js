import axios from 'axios';

export default {
	async checkUserName({ commit }, payload) {
		const username = payload;
		const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/validate-username', { username });
		commit('checkCurrentUsername', response.data);
		return response.data;
	},
	async userRegister({ commit }, payload) {
		const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/signup', payload);
		console.log('tttt', response.data);
		const {confirmation_token, email} = response.data.data;
		localStorage.setItem('user-detail', JSON.stringify({'token':confirmation_token, 'email': email}));
		commit('setSignedup', true, { root: true });
		commit('signupUser', response.data);
		commit('setTokenResponse', confirmation_token);
		return response;
		
	},

	async VerifyEmail({ commit, getters }, payload) {
    const {token} = JSON.parse(localStorage.getItem('user-detail'))
		let otp = Object.entries(payload)
			.map((arr) => arr[1])
			.join('');
		const response = await axios.post(
			'https://wallet-app-jupyter.herokuapp.com/api/v1/auth/confirm-email',
			{ otp },
			{
				headers: {
					common: {
						Authorization: `Bearer ${token}`
					}
				}
			}
		);
		console.log('response', response);
		commit('setEmailVerification', response.data);
	},
	async resendOtp({commit}, payload) {
    const {email} = JSON.parse(localStorage.getItem('user-detail'))
    console.log(email);
		const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/auth/resend-email-otp', payload); 
    console.log(response.data);
	},

	async loginUser({ commit }, payload) {
		const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/auth/login', payload);
		console.log('res', response.data);
		const { loginToken, username, email, hasWallet } = response.data.data;
		 commit('setHasWallet', hasWallet, { root: true });
		commit('setLoggedUser', { loginToken, username, email });
		return response;
	},
	async createPin({ commit, getters }, payload) {
		let pin = Object.entries(payload)
			.map((arr) => arr[1])
			.join('');
		console.log('ffs', getters.getLoginResponse);
		const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/wallet/create-pin', { pin });
		console.log('blu', response.data);
		commit('setPin', response.data);
		return response;
	},
	async forgotPassword({ commit }, payload) {
		const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/auth/forgot-password', payload);
		console.log('...', response.data);
		commit('setPassword', response.data);
		return response;
	},
	async resetPassword({ commit },payload) {
		const { password, token } = payload;
		console.log(password, token);
		const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/auth/reset-password', { password }, 
		{
			headers: {
					Authorization: `Bearer ${token}`
			}
		});
		return response;
	},

	async userProfile({ commit }) {
		const response = await axios.get('https://wallet-app-jupyter.herokuapp.com/api/v1/auth/user');
		console.log('ffr', response.data.data);
		commit('setUserDetails', response.data.data);
		return response.data.data;
	},
};




