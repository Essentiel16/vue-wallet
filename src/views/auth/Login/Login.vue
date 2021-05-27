<template>
    <div class="wrapper">
        <div class="header">
            <img src="@/assets/icons/logo.svg" alt="logo">
        </div>
        <div class="content">
            <div class="content-left">
                <h2>Log In</h2>
                <p>Great to have you back</p>
            </div>
            <div class="content-right">
                <ValidationObserver slim v-slot="{ invalid }">
                <form class="form-body" @submit.prevent="userLogin">
                        <Custom-input  :type="'email'" :title="'Email Address'" v-model="form.email"
                        :placeholder="'kingsleyomin@gmail.com'" :name="'Email'" :rules="'required|email'"/>
                        <PasswordInput :title="'Password'" v-model="form.password"
                        :placeholder="'•••••••••'" :name="'Password'" :rules="'required|alpha_num|min:7'"/>
                        <div class="forgot-password"><span class="error" v-if="error">{{error}}</span>
                        <p><a href="./forgot">Forgot Password?</a></p>
                        </div>
                        <div class="content-form-button">
                        <CustomButton :disabled="invalid"><template v-if="!loading">Log In</template>
                            <Loader v-else/></CustomButton>
                        </div>
                    <div class="content-footer">
                        <p>Don't have an account?<a href="./signup"><span> Register now</span></a></p>
                    </div>
                </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>
<script src="./Login.js"></script>
<style lang="scss" scoped>
@import '@/assets/scss/modules/_signup';
@import '@/assets/scss/modules/_login';
</style>