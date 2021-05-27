import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import auth from './modules/auth/index';
import overview from './modules/overview/index';
Vue.use(Vuex);

const vuexPersistence = new VuexPersistence ({
	storage: window.localStorage
})

const initialAlertState = {
	status: '',
	title: '',
	message: '',
	showAlert: false
};

export default new Vuex.Store({
	state: {
		signedup: false,
		authenticated: false,
		hasWallet: false,
		status: '',
		errorLog: {},
		alert: initialAlertState
	},
	mutations: {
		setSignedup: (state, status) => {
			state.signedup = status;
		},
		setAuthenticated: (state, payload) => {
			state.authenticated = status;
		},
		setHasWallet: (state, status) => {
			state.hasWallet = status;
		},
		reqInit: (state) => {
			state.status = 'loading';
		},
		reqSuccess: (state) => {
			state.status = 'success';
		},
		reqError: (state) => {
			state.status = 'error';
		},
		resetReq: (state) => {
			state.status = '';
			state.errorLog = {};
		},
		logError: (state, data) => {
			state.status = 'error';
			state.errorLog = data;
		},
		resetAll: (state) => {
			Object.keys(state).forEach((key) => {
				Object.assign(state[key], initialState[key]);
			});
		},
		updateAlert: (state, data) => {
			if (!data.showAlert) {
				state.alert = initialAlertState;
				return;
			}

			state.alert = { ...initialAlertState, ...data };
		},
		resetAlert: (state) => {
			state.alert = initialAlertState;
		}
	},
	actions: {
		showAlert: ({ commit }, data) => {
			commit('updateAlert', data);

			setTimeout(() => {
				commit('resetAlert');
			}, 3000);
		}
	},
	getters: {
		getStatus: (state) => state.status,
		getErrorLog: (state) => state.errorLog,
		getAlert: (state) => state.alert,
		getHasWallet: (state) => state.hasWallet,
	},
	modules: {
		auth,
		overview,
	},
	plugins: [vuexPersistence.plugin],
});

