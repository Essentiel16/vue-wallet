<template>
    <div class="wrapper">
        <div class="header">
            <img src="@/assets/icons/logo.svg" alt="logo">
        </div>
        <div class="content">
            <div class="content-left">
                <h2>Reset Password</h2>
                <p>Create a unique password to  <br/> <span>keep your account protected</span></p>
            </div>
            <div class="content-right">
                <ValidationObserver slim v-slot="{ invalid }">
                        <form class="form-body" @submit.prevent="resetPassword">
                            <PasswordInput :title="'Password'" :placeholder="'•••••••••'"
                            name="Password" rules="required|confirmed:confirmation" v-model="form.password"/>

                            <PasswordInput :title="'Confirm Password'" vid="confirmation" v-model="confirm_pasword"
                            :placeholder="'•••••••••'" name="Confirm Password" rules="required"/>

                            <div class="content-form-button">
                                <CustomButton :disabled="invalid">
                                    <template v-if="!loading">Reset Password</template>
                            <Loader v-else/>
                                </CustomButton>
                            </div>
                        </form>
                        </ValidationObserver>
                        </div>
        </div>
    </div>
</template>
<script src="./ResetForm.js"></script>
<style lang="scss" scoped>
@import '@/assets/scss/modules/_signup';
// @import '@/assets/scss/modules/_login';
</style>