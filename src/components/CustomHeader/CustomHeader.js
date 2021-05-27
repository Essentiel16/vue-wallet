import { mapGetters } from 'vuex';

export default {
    name: 'CustomHeader',
    props: {   
    },
    
    computed: {
        ...mapGetters({
           currentUser :'auth/getUserProfile'
        }),
        
    }
}