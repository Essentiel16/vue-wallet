import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import CustomSidebar from '../../components/CustomSidebar';
import CModal from '../../components/Modal';
import CustomTable from '../../components/CustomTable';
import CustomInput from '../../components/CustomInput';
import Loader from '../../components/Loader';

import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'emptydashboard',
	components: {
		CustomButton,
		CustomHeader,
		CustomSidebar,
		CModal,
		CustomInput,
		CustomTable,
		Loader,
	},
	data() {
		return {
			form: {
				recipientUsername: '',
				amount: '',
				pin: ''
			},
			showModal: false,
			showFundModal: false,
			fundwallet: null,
			items: [],
			loading: false,
			error: ''
		};
	},
	computed: {
		...mapGetters({
			status: 'getStatus'
		})
	},
	methods: {
		...mapActions({
			userProfile: 'auth/userProfile',
			fund: 'overview/fundUserWallet',
			checkRecepient: 'overview/validateRecepient',
			transfer: 'overview/moneyTransfer',
			transactionHistory: 'overview/transactionHistory',
			showAlert: 'showAlert'
		}),
		toggleModal() {
			if (!this.showModal) {
				this.showModal = true;
			} else {
				this.showModal = !this.showModal;
			}
		},
		toggleFundModal() {
			if (!this.showFundModal) {
				this.showFundModal = true;
			} else {
				this.showFundModal = !this.showFundModal;
			}
		},
		fundWallet() {
			this.loading = true;
			this.fund({ amount: this.fundwallet })
			.then((response) => {
				if(response.data.status === 'Success') {
					this.userProfile();
					this.transactionDetails();
					this.showAlert({
                        status: 'success',
                        message: 'Wallet successfully funded!',
                        showAlert: true
                    });
					this.toggleFundModal();
					return true;
				}
			})
			.catch((error) => {
				this.showAlert({
                    status: 'error',
                    message: error.response.data.message,
                    showAlert: true
                });
			})
			.finally(() => {
				this.loading = false;
			})
		},
		async recepientValid() {
			await this.checkRecepient(this.form.recipientUsername);
		},
		amountValid() {
			let balance = this.currentUser.balance;
			if (this.form.amount > balance) {
				this.error = 'You do not have sufficient amount!';
			}
		},
		async transferFund() {
			this.loading = true
			await this.transfer(this.form)
			.then((response) => {
				if (response.data.status === 'Success') {
					this.userProfile();
					this.transactionDetails();
					this.showAlert({
                        status: 'success',
                        message: 'Transfer successful!',
                        showAlert: true
                    });
					this.toggleModal();
					return true;
				}
			})
			.catch((error) => {
				this.showAlert({
                    status: 'error',
                    message: error.response.data.message,
                    showAlert: true
                });
			})
			.finally(() => {
				this.loading = false;
			})
		},
		async transactionDetails() {
			const transactions = await this.transactionHistory();
			if (transactions) {
				this.items = transactions;
			}
		}
	},
	async mounted() {
		await this.userProfile();
		// console.log('pro', this.userProfile);
		console.log('currentUser', this.currentUser);
		await this.transactionDetails();
	},
	computed: {
		...mapGetters({
			currentUser: 'auth/getUserProfile'
		})
	}
};
