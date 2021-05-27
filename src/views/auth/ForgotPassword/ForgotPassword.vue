<template>
    <div class="wrapper">
        <div class="header">
            <img src="@/assets/icons/logo.svg" alt="logo">
        </div>
        <div class="content">
            <div class="content-left">
                <h2>Forgot Password</h2>
                <p>Kindly enter your registered email<br/><span>to reset your password</span></p>
            </div>
            <div class="content-right">
                <ValidationObserver slim v-slot="{ invalid }">
                <form class="form-body">
                    <Custom-input class="content-form-input" :size="'large'" :type="'email'" :title="'Email Address'"
                    :placeholder="'kingsleyomin@gmail.com'" :name="'Email'" :rules="'required|email'" v-model="form.email"/>
                    <div class="content-form-button">
                        <CustomButton :disabled="invalid" @click.prevent="forgotPassword">
                            <template v-if="!loading">Recover Password</template>
                            <Loader v-else/>
                        </CustomButton>
                    </div>
                    <div class="forgotPassword-footer">
                        <a href="./login"><p>Return to Log In</p></a>
                    </div>
                </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>

<script src="./ForgotPassword.js"></script>
<style lang="scss" scoped>
@import '@/assets/scss/modules/_signup';
@import '@/assets/scss/modules/forgot-password';
</style>