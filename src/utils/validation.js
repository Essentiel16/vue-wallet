import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import store from '../store';

extend('username_check', {
	message() {
		return 'Username already exists';
	},
	async validate(value) {
        const usernameCheck = await store.dispatch('auth/checkUserName', value);
        console.log('hwee',usernameCheck);
        return usernameCheck.message === "Username available" ? true : false;
	}
});

extend('validate_amount', {
	message() {
		return 'Balance is not sufficient';
	},
	async validate(value) {
        const amountCheck = await store.dispatch('overview/validateAmount', value);
        console.log('hqqe',amountCheck);
       return amountCheck.message === "Balance is sufficient" ? true : false;
	}
});

Object.keys(rules).forEach((rule) => {
    extend(rule,rules[rule]); 
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);