import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import Loader from '../../../components/Loader';

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'login',
    components: {
        CustomInput,
        CustomButton,
        Loader,
    },
    data() {
        return {
            form: {
                email: '',
            },
            loading: false,
        }
    },
    computed: {
		...mapGetters({
			status: 'getStatus',
		})
	},
    methods: {
        ...mapActions({
            forget: 'auth/forgotPassword',
            showAlert: 'showAlert'}),
        forgotPassword() {
            this.loading = true;
            this.forget(this.form)
            .then ((response) => {
                if (response.status === 201) {
                    this.$router.push('/reset');
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
        }
    }
}