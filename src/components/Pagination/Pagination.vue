<template>
    <div class="pagination">
        <div>
            <p>Showing page 1 0f 10</p>
        </div>
        <div>
            <paginate
                v-model="page"
                :page-count="10"
                :page-range="3"
                :margin-pages="2"
                :click-handler="clickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'">
  </paginate>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'pagination',
    data() {
        return {
            page: 10,
            items: [],
            limit: 5,
        }
    },
   methods: {
       ...mapActions({
           transactionHistory: 'overview/transactionHistory',
       }),
        async clickCallback (page) {
            console.log(page);
            // this.page = page;
            this.transactionHistory({page});
        },
        // const transactions = await this.transactionHistory({page: this.page, limit: this.limit});
        //     this.total = Math.ceil(response.data.data.length/this.limit);
		// 	if (transactions) {
		// 		this.items = transactions;
		// 	}
   }
}
</script>

<style scoped>
.pagination{
    display: flex;
    align-items: center;
    margin-top: 20px;
    height: 40px;
    /* height: calc(100vh - 40px); */
    justify-content: space-between;
    /* position: sticky; */
}
p{
    color: #3A434B;
    font-size: 14px;
}
.page-item{
    color: #3A434B;
    font-size: 14px;
}
li{
    margin-left: 10px;
}
</style>