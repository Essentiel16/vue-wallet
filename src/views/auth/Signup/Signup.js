import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import PasswordInput from '../../../components/PasswordInput';
import Loader from '../../../components/Loader';

import { mapActions, mapGetters} from 'vuex';

export default {
    name: 'signup',
    components: {
        CustomInput,
        CustomButton,
        PasswordInput,
        Loader,
    },
    data(){
        return {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                username: '',
                dob: '',
                password: '',
            },
            loading: false,
        }
    },
    computed: {
		...mapGetters({
			status: 'getStatus'
		})
	},
    methods: {
       ...mapActions({
           signup: 'auth/userRegister',
           showAlert: 'showAlert'
        }),

         createAccount() {
            this.loading = true;
            this.signup(this.form)
            .then((response) => {
                if (response.data.status === 'Success') {
                    this.showAlert({
                        status: 'success',
                        message: 'Signup Successful',
                        showAlert: true
                    });
                    this.$router.push({name: 'Verification'});
                    return true;
                }
                this.showAlert({
                    status: 'error',
                    message: 'Something went wrong',
                    showAlert: true
                });
            })
            .catch((error) => {
                // this.loading = false;
                // return `Caught an error: ${error}`
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

    },
    
}