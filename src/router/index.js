import Vue from 'vue';
import VueRouter from 'vue-router';
import Signup from '../views/auth/Signup/Signup.vue';
import Verification from '../views/auth/Verification/Verification.vue';
import Login from '../views/auth/Login/Login.vue';
import ForgotPassword from '../views/auth/ForgotPassword/ForgotPassword.vue';
import ResetPassword from '../views/auth/ResetPassword/ResetPassword.vue';
import ResetForm from '../views/auth/ResetForm/ResetForm.vue';
import Transactions from '../home/Transactions/Transaction.vue';
import EmptyDashboard from '../home/EmptyDashboard/EmptyDashboard.vue';
import TransactionDashboard from '../home/TransactionDashboard/TransactionDashboard.vue';
import CreatePin from '../views/auth/CreatePin/CreatePin.vue';
import store from '../store';

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
	if(store.getters['auth/getIsLoggedIn'] && store.state.hasWallet === true) {
		next ('/dashboard');
	}
	else if (store.state.signedup === false) {
		next('/signup');
	}
	 else {
		next ();
	}
};
 const ifLoggedIn = (to, from, next) => {
	console.log(store.state.hasWallet);
	if ( !store.getters['auth/getIsLoggedIn']) {
		next('/login');
	} else if(store.getters['auth/getIsLoggedIn'] && store.state.hasWallet === false) {
		next ('/create');
	}
	else {
		next()
	}

};

const routes = [
	{
		path: '/',
		redirect: {
			name: 'Signup'
			}
	},
	{
		path: '/signup',
		name: 'Signup',
		component: Signup
	},
	{
		path: '/otp',
		name: 'Verification',
		component: Verification,
		beforeEnter: ifAuthenticated,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		// beforeEnter: ifLoggedIn,
	// 	redirect: {
	// 		name: 'emptyHome'
	// 		}
	},
	{
		path: '/forgot',
		name: 'ForgotPassword',
		component: ForgotPassword,
		// beforeEnter: ifAuthenticated,
	},
	{
		path: '/reset',
		name: 'ResetPassword',
		component: ResetPassword,
		// beforeEnter: ifAuthenticated,
	},
	{
		path: '/resetForm',
		name: 'ResetForm',
		component: ResetForm,
		// beforeEnter: ifAuthenticated,
	},
	{
		path: '/create',
		name: 'CreatePin',
		component: CreatePin,
		// beforeEnter: ifAuthenticated,
	},
	{
		path: '/table',
		name: 'Transaction',
		component: Transactions,
		beforeEnter: ifLoggedIn,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: EmptyDashboard,
		beforeEnter: ifLoggedIn,
	},
	{
		path: '/transaction',
		name: 'TransactionDashboard',
		component: TransactionDashboard,
		beforeEnter: ifLoggedIn,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
