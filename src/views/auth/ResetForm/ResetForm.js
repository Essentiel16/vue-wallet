import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import PasswordInput from '../../../components/PasswordInput';
import Loader from '../../../components/Loader';

import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'resetForm',
    components: {
        CustomInput,
        CustomButton,
        PasswordInput,
        Loader,
    },
    data() {
        return {
            form: {
                password: null,
                token: null
            },
            confirm_pasword: null,
            loading: false,
        }
    },
    created(){
        const token = this.$route.query.token;
        if (token) {
            this.form.token = token
        }
    },
    methods: {
        ...mapActions({
            reset: 'auth/resetPassword',}),
        resetPassword(){
            this.loading = true;
            this.reset(this.form)
            .then((response) => {
                console.log(response);
                if (response.status === 201) {
                    this.$router.push('/login');
                    return true;
                }
            })
            .catch((error) => {
            console.log(error);
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