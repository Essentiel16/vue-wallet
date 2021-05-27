<template>
    <div>
        
        <table class="table__wrapper">
            <thead class="table__header">
                <tr>
                <!-- <tr v-for="(tableHeader, indexHeader) in tableHeaders" :key="indexHeader"> -->
                    <th class="table__header-item">Transaction Type</th>
                    <th class="table__header-item">Date</th>
                    <th class="table__header-item">Status</th>
                    <th class="table__header-item">Amount</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="table-body-row" v-for="(item, index) in items" :key="index">
                    <td class="table-body-plain">{{item.transaction_type | capitalize}}</td>
                    <td class="table-body-plain">{{item.transaction_date | moment("MMMM D, YYYY")}} | <span class="time">{{item.transaction_date | moment("h:mm a")}}</span></td>
                    <td class="table-body-plain">
                        <div class="successful">
                            <img class="icon" src="@/assets/icons/success.svg" svg-inline>{{item.transaction_status}}
                        </div>
                    </td>
                    <td class="table-body-plain">{{item.amount}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script src="./CustomTable.js"></script>
<style lang="scss" src="./CustomTable.scss"></style>