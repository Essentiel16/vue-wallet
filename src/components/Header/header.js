import CButton from '../CustomButton';

export default {
	name: 'my-header',

	components: { CButton },

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
