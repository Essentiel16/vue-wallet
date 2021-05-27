import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/validation';
import axios from 'axios';
import Paginate from 'vuejs-paginate';

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));

Vue.component('paginate', Paginate)

Vue.filter('moneyFormatN', function (value) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NGN',
    });
  
    let newPrice = formatter.format(value);
    newPrice = newPrice.replace("NGN", "₦");
    newPrice = newPrice.replace("NaN", "0.00");
    return newPrice
  }),

Vue.filter('moneyFormatD', function (value) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  
    let newPrice = formatter.format(value);
    newPrice = newPrice.replace("USD", "$");
    // newPrice = newPrice.replace(".00", "");
    return newPrice
  }),

Vue.filter('capitalize', function (value) {
	if (!value) return ''
	value = value.toString()
	return value.charAt(0).toUpperCase() + value.slice(1)
  })

new Vue({
	router,
	store,
	computed: {
	 isLoggedin() {
		 
		 if (this.$store.getters['auth/getIsLoggedIn']) {
			axios.defaults.headers.common.Authorization = `Bearer ${ this.loggedUser.loginToken }`
			console.log(';lk',this.$store.getters['auth/getIsLoggedIn']);
		 }
		return this.$store.getters['auth/getIsLoggedIn'];
	 },
	 loggedUser() {
		return this.$store.getters['auth/getloggedUser'];
	 },

	},
	watch: {
		isLoggedin(value) {
			console.log('kjh',value);
			if (value) {
				
				axios.defaults.headers.common.Authorization = `Bearer ${ this.loggedUser.loginToken }`
			}
		}
	},
	render: (h) => h(App)
}).$mount('#app');
