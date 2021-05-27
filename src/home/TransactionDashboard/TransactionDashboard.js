import CustomTable from '../../components/CustomTable';
import CustomHeader from '../../components/CustomHeader';
import CustomSidebar from '../../components/CustomSidebar';
import CustomInput from '../../components/CustomInput';
import CModal from '../../components/Modal';
import  CustomButton from '../../components/CustomButton';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'transactiondashboard',
    components: {
        CustomTable,
        CustomHeader,
        CustomSidebar,
        CustomInput,
        CModal,
        CustomButton,
        Loader,
        Pagination,
    },
    data() {
        return {
            showModal: false,
            items: [],
            loading: false,
            limit: 5,
            form: {
                transactionType: null,
                startDate: null,
                endDate: null,
                transactionStatus: null,
            },
            fail: null,
        }
    },
    computed: {
		...mapGetters({
			status: 'getStatus'
		})
	},
    methods: {
        ...mapActions({
            userProfile:'auth/userProfile',
            transactionHistory:'overview/transactionHistory',
            filter: 'overview/filterHistory',
            showAlert: 'showAlert'
        }),
        toggleModal(){
           
            if  (!this.showModal) {
                this.showModal = true;
            } else {
                this.showModal = !this.showModal;
            }
        },
        async transactionDetails() {
			const transactions = await this.transactionHistory();
			if (transactions) {
				this.items = transactions;
			}
		},
        applySearch(){
            this.loading = true;
            this.filter(this.form)
            .then((response) => {
                if(response.data.status === 'Success') {
                    this.items = response.data.data;
                    this.showAlert({
                        status: 'success',
                        message: 'History successfully filtered!',
                        showAlert: true
                    });
                    this.toggleModal();
                    return true;
                }
            })
            .catch((error) => {
                this.showAlert({
                    status: 'error',
                    // message: error.response.data.message,
                    showAlert: true
                });
            })
            .finally(() => {
                this.loading = false;
            })
        },
        
    },
    async mounted() {
        await this.userProfile();
        await this.transactionDetails();
    },
}

 // const filteredTransactions = this.filter();
                    // if (filteredTransactions) {
                    //     this.items = filteredTransactions;
                    // }