<template>
    <div class="wrapper">
        <div class="header">
            <img src="@/assets/icons/logo.svg" alt="logo">
        </div>
        <div class="content">
            <div class="content-left">
                <h2>Reset Password</h2>
                <p>we have sent a reset link to your  <br/> <span>registered email address</span></p>
            </div>
            <div class="content-right">
                <div class="form-body">
                    <div class="resetPassword-body-content">
                        <div class="reset-image">
                            <img src="@/assets/icons/inbox.svg" svg-inline>
                        </div>
                        <h2 class="desc">Check your Inbox</h2>
                        <p class="desc-small">Password reset link has been sent to your inbox</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./ResetPassword.js"></script>
<style lang="scss" scoped>
@import '@/assets/scss/modules/_signup';
@import '@/assets/scss/modules/_reset-password';
</style>