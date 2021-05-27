export default {
    name: 'password-input',
    data () {
        return {
            innerValue: '',
            showPassword: 'password',
        }
    },
    props: {
        placeholder:{
            type: String,
        },
        value: {
            type: null,
            default: '',
        },
        size:{
            type: String,
        },
        title: {
            type: String,
        },
        type: {
            type: String,
            default: 'showPassword',
        },
        name: {
            type: String,
        },
        rules: {
            type: String,
        },
        vid: {
            type: String,
            default: '',
        }

    },
    methods: {
        togglePassword(){
            this.showPassword = 'text';
        },
        hidePassword() {
            this.showPassword = 'password';
        }
    },
    watch: {
        innerValue(val) {
            this.$emit('input', val);
            // this.$emit('change', val);
        },
        value(val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
            }
        },
    },
    created() {
        if (this.value) {
            this.innerValue = this.value;
        }
    }
    
}