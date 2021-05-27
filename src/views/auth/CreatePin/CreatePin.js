import CustomButton from '../../../components/CustomButton';
import Loader from '../../../components/Loader';

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'signup',
    components: {
        CustomButton,
        Loader,
    },
    data() {
        return {
            input: {
                pin1: '',
                pin2: '',
                pin3: '',
                pin4: '',
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
            create: 'auth/createPin',
            showAlert: 'showAlert'}),
        pinCreate() {
            this.loading = true;
            // console.log('fff', this.input);
            this.create(this.input)
            .then((response) => {
                if (response.status === 201) {
                    this.$router.push('/dashboard');
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