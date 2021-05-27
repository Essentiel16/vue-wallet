<template>
<div>
    <div class="container">
        <CustomSidebar/>
        <div class="main">
            <div class="main-header">
                <CustomHeader/>
            </div>
            <div class="sub-header">
                <div class="sub-header-text">
                    <p>Hello {{currentUser.username}} <span> &#128075;&#127999;
                        </span></p>
                </div>
                <div class="sub-header-button">
                    <CustomButton class="btn-one" id="transfer" color="outline" @click="toggleModal">Transfer Funds</CustomButton>
                    <CustomButton class="btn-two" id="fund" color="outline" @click="toggleFundModal">+ Fund Wallet</CustomButton>
                </div>
            </div>
            <div class="body-card">
                <div class="card-content">
                    <h5><!--<span>&#8358;</span>-->
                    {{currentUser.balance | moneyFormatN}}</h5>
                    <p>Naira Balance</p>
                </div>
                <div class="card-content">
                    <h5><!--<span>&#36;</span>-->
                    {{ 0| moneyFormatD}}</h5>
                    <p>Dollar Balance</p>
                </div>
            </div>
            <div class="transaction">
                <h5>Transaction History</h5>
            </div>
            <div class="empty-state" v-if="items.length === 0">
                <img src="@/assets/icons/empty-file.svg" svg-inline>
            </div>
            <div class="table" v-else>
                <CustomTable :items="items"/>
            </div>
        </div>
    </div>
            <CModal v-if="showModal" :modalTitle="'Transfer'" @toggleModal="toggleModal">
                <form class="transfer-form" action="" @submit.prevent="transferFund">
                    <h6>Select wallet type to transfer from</h6>
                    <div class="wallet-input">
                        <input type="radio" id="naira" name="wallet-type" value="naira">
                        <label for="naira">Naira</label><br>
                        <input type="radio" id="dollar" name="wallet-type" value="dollar">
                        <label for="dollar">Dollar</label><br>
                    </div>
                    <div class="input-field">
                        <Custom-input :size="'large'" :type="'text'" :title="'Recepient Username'" name="Recepient" @blur="recepientValid"
                        :placeholder="'BushBaby'" :rules="'required|min:6'" v-model="form.recipientUsername"/>
                        <Custom-input :size="'large'" :type="'text'" :title="'Amount'" name="Amount" @keyup="amountValid"
                        :placeholder="'₦ 00.00'" v-model.number="form.amount" rules="required"/> <span class="error" v-if="error">{{error}}</span>
                        <Custom-input :size="'large'" :type="'text'" :title="'Transaction Pin'"
                        :placeholder="'0000'" v-model.number="form.pin" rules="required"/>
                        <CustomButton ><template v-if="!loading"> Transfer</template>
                        <Loader v-else/></CustomButton>
                    </div>
                </form>
            </CModal>

            <CModal v-if="showFundModal" :modalTitle="'Fund Wallet'" @toggleModal="toggleFundModal">
                <form class="transfer-form" action="" @submit.prevent="fundWallet">
                    <h6>Select wallet type</h6>
                      <div class="wallet-input">
                          <input type="radio" id="naira" name="wallet-type" value="naira">
                          <label for="naira">Naira</label><br>
                          <input type="radio" id="dollar" name="wallet-type" value="dollar">
                          <label for="dollar">Dollar</label><br>
                      </div>
                      <div class="input-field">
                          <Custom-input :size="'large'" :type="'text'" :title="'Amount'" :placeholder="'₦ 00.00'" v-model.number="fundwallet"/>
                          <div class="input-field-button">
                              <CustomButton ><template v-if="!loading">Fund Wallet</template><Loader v-else/></CustomButton>
                          </div>
                      </div>
                </form>
            </CModal>
        </div>
</template>

<script src="./EmptyDashboard.js"></script>
<style lang="scss">
@import '../../assets/scss/layouts/_main.scss';
</style>