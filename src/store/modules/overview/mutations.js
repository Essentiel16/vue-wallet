export default {
    setFundWallet: (state, payload) => {
        state.wallet = payload;
    },
    setValidateAccount: (state, payload) => {
        state.recepient = payload;
    },
    setValidateAmount: (state, payload) => {
        state.amount = payload;
    },
    setSendMoney: (state, payload) => {
        state.sendMoney = payload;
    },
    setFilteredHistory: (state, payload) => {
        state.filteredHistory = payload;
    }
}