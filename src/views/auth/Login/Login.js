import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import PasswordInput from '../../../components/PasswordInput';
import Loader from '../../../components/Loader';

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'login',
    components: {
        CustomInput,
        CustomButton,
        PasswordInput,
        Loader,
    },
    data(){
        return {
            form: {
                email: '',
                password: '',
            },
            error: '',
            loading: false,
        }
    },
    computed: {
		...mapGetters({
			status: 'getStatus',
            walletStatus: 'getHasWallet'
		})
	},
    methods: {
        ...mapActions({
            login: 'auth/loginUser',
            showAlert: 'showAlert'
        }),
        userLogin() {
            this.loading = true;
            this.login(this.form)
            .then((response) => {
                console.log(response.status);
                if (response.status === 201) {
                    this.walletStatus ? this.$router.push({name: 'Dashboard'}) :  this.$router.push({name: 'CreatePin'});
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
        }
    },
}
