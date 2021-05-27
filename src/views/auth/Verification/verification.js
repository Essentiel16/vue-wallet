import CustomInput from '../../../components/CustomInput';
import Loader from '../../../components/Loader';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'verification',
  components: {
    CustomInput,
    Loader
  },
  data() {
    return {
      input: {
        emailInput1: '',
        emailInput2: '',
        emailInput3: '',
        emailInput4: '',
      },
      loading: false,
    }
  },
  computed: {
		...mapGetters({
			status: 'getStatus'
		})
	},
  watch: {
    input(newValue, oldValue) {
      console.log('newValue', newValue);
      console.log('oldValue', oldValue);
      this.confirmEmail();
    }
  },
  methods: {
    ...mapActions({
			emailVerify: 'auth/VerifyEmail',
      resend :'auth/resendOtp',
      showAlert: 'showAlert',
		}),
    async confirmEmail() {
        await this.emailVerify(this.input)
        .then((response) => {
          if (response.data.status === 'Success') {
            this.showAlert({
              status: 'success',
              message: 'Verification Successful',
              showAlert: true
            });
            this.$router.push('/login');
          }
        })
        .catch((error) => {
          this.showAlert({
            status: 'error',
            message: error.response.data.message,
            showAlert: true
          });
        })
      },

    async resendOTP() {
      // console.log('I am about to resend the otp');
      const {email} = JSON.parse(localStorage.getItem('user-detail'))
      await this.resend({'email' : email});
      // console.log('otp resend');
    },
  }
};