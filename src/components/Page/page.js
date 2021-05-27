import MyHeader from '../Header';

export default {
	name: 'my-page',

	components: { MyHeader },

	props: {
		user: {
			type: Object
		}
	},

	methods: {
		onLogin() {
			this.$emit('onLogin');
		},
		onLogout() {
			this.$emit('onLogout');
		},
		onCreateAccount() {
			this.$emit('onCreateAccount');
		}
	}
};
