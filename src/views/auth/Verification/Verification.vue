<template>
    <div class="wrapper">
        <div class="header">
            <img src="@/assets/icons/logo.svg" svg-inline>
        </div>
        <div class="content">
            <div class="content-left">
                <h2>OTP Verification</h2>
                <p>A code has been sent to your mail</p>
            </div>
            <div class="content-right">
                <form class="form-body">
                    <h2 class="otp-body-head">Kindly enter your OTP to<br/><span>verify account</span></h2>
                    <div class="otp-body-code">
                        <div class="code-input">
                            <input type="text" placeholder="-" maxlength="1" v-model="input.emailInput1"> 
                        </div>
                        <div class="code-input">
                            <input type="text" placeholder="-" maxlength="1" v-model="input.emailInput2">
                            </div>
                        <div class="code-input">
                            <input type="text" placeholder="-" maxlength="1" v-model="input.emailInput3">
                            </div>
                        <div class="code-input">
                            <input type="text" placeholder="-" maxlength="1" v-model="input.emailInput4" @keyup="confirmEmail">
                            </div>
                    </div><span class="error" v-if="error">{{error}}</span>
                    <!-- <button @click.prevent="confirmEmail">click</button> -->
                    <div class="otp-footer">
                        <p class="footer-desc">Didn't get the code? <span class="span" @click.prevent="resendOTP"> Resend</span></p>
                        <p>00:59</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./verification.js"></script>
<style lang="scss" scoped>
@import '@/assets/scss/modules/_signup';
@import '@/assets/scss/modules/_verification';
</style>
