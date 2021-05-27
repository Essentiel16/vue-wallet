import axios from 'axios';
export default {
    async fundUserWallet({commit}, payload) {
        const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/wallet/deposit', payload);
          // console.log('ggg', response.data.data);
          commit('setFundWallet', response.data);
          return response;
    },
    async validateRecepient({ commit }, payload) {
        const recipientUsername = payload;
        const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/wallet/validate-receiver', { recipientUsername });
        console.log('hhh', response.data);
        commit('setValidateAccount', response.data);
        return response.data;
    },
    async moneyTransfer({ commit }, payload) {
        const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/wallet/transfer', payload);
        // console.log('iih', response.data);
        commit('setSendMoney', response.data);
        return response;
    },
    async transactionHistory({commit}, payload = {}) {
        let url = 'https://wallet-app-jupyter.herokuapp.com/api/v1/wallet/transaction-history?'
        if(Object.keys(payload).length) {
            Object.keys(payload).forEach(key => {
                url += `${key}=${payload[key]}&`
            })
        }
        const response = await axios.get(url);
        console.log('hhr', response.data);
        // commit('', response.data.data);
        return response.data.data;
    },
    async filterHistory({commit}, payload) {
        const response = await axios.post('https://wallet-app-jupyter.herokuapp.com/api/v1/wallet/filtered-transaction-history', payload);
        console.log('filter', response);
        commit('setFilteredHistory', response.data);
        return response;
    }
}