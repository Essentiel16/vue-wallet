export default {
    name: 'custom-input',
    data() {
        return {
            innerValue: '',
        }
    },
    props: {
        placeholder:{
            type: String,
        },
        value: {
            type: null,
            default: ''
        },
        size:{
            type: String,
        },
        title: {
            type: String,
        },
        type: {
            type: String,
            default: 'text',
        },
        name: {
            type: String,
        },
        rules: {
            type: String,
        },
    },
    computed: {
        computedWidth() {
            return `input__${this.size}`;
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