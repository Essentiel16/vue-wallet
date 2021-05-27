export default {
	name: 'custom-button',
	props: {
		color: {
            type: String,
            default: 'red',
        },
        size: {
            type: String,
            default: 'small',
        },
    },
    computed: {
        computedColor() {
            return `btn__${this.color}`;
        },
        computedSize() {
            return `btn__${this.size}`;
        }
    },
    methods: {
        callback: function(e) {
            this.$emit('submit', e);
        }
    },
};
