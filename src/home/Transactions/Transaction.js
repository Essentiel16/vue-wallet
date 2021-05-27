import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import CustomTable from '../../components/CustomTable';
import CustomSidebar from '../../components/CustomSidebar';

export default {
    name: 'login',
    components: {
        CustomButton,
        CustomTable,
        CustomHeader,
        CustomSidebar,
    },
    data() {
        return {
            tableHeader: [ 'transaction_type', 'date', 'status', 'amount'],
            items: [
                {
                    'transaction_type': 'Wallet Transfer',
                    'date': 'May 27, 2020',
                    'status': 'Successful',
                    'amount': '30,000'
                    },
            ],
        }
    },
}