<template>
<div class="container">
    <CustomSidebar/>
    <div class="main">
        <div class="main-header">
            <CustomHeader/>
        </div>
        <div class="sub-header">
            <div class="sub-header-text">
                <p>Hello Kingsley <span> &#128075;&#127999;
                    </span></p>
            </div>
            <div class="sub-header-button">
                 <CustomButton class="btn-one" id="transfer" color="outline">Transfer Funds</CustomButton>
                 <CustomButton class="btn-two" id="fund" color="outline">+ Fund Wallet</CustomButton>
                </div>
            </div>
            <div class="body-card">
                <div class="card-content">
                    <h5><span>&#8358;</span>00.00</h5>
                    <p>Naira Balance</p>
                </div>
                <div class="card-content">
                    <h5><span>&#36;</span>00.00</h5>
                    <p>Dollar Balance</p>
                </div>
            </div>
            <div class="transaction">
                <h5>Recent Transaction</h5>
            </div>
        <div class="table">
            <CustomTable :items="items"/>
        </div>
    </div>
    </div>
</template>

<script src="./Transaction.js"></script>
<style lang="scss">
@import '../../assets/scss/layouts/_main.scss';
@import '../../assets/scss/modules/transaction-tables.scss';
</style>