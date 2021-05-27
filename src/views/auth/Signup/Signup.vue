<template>
    <div class="wrapper">
        <div class="header">
            <img src="@/assets/icons/logo.svg" svg-inline>
        </div>
        <div class="content">
            <div class="content-left">
                <h2>Create Your Account</h2>
                <p>Let's get you started</p>
            </div>
            <div class="content-right">
                <ValidationObserver slim v-slot="{ invalid }">
                    <form class="form-body" @submit.prevent="createAccount">
                        <div class="content-form-nameinput">
                            <div class="content-form-name">
                            <Custom-input :type="'text'" :title="'First Name'" v-model="form.firstName"
                            :placeholder="'Kingsley'" :name="'First name'" :rules="'required|alpha|min:2'"/>
                            </div>
                            <div class="content-form-name">
                            <Custom-input :type="'text'" :title="'Last Name'" v-model="form.lastName"
                            :placeholder="'Omin'" :name="'Last name'" :rules="'required|alpha|min:2'"/>
                            </div>
                        </div>
                        <div class="content-form-nameinput">
                            <div class="content-form-name">
                            <Custom-input :type="'email'" :title="'Email Address'" v-model="form.email"
                            :placeholder="'kingsleyomin@gmail.com'" :name="'Email'" :rules="'required|email'"/>
                            </div>
                            <div class="content-form-name">
                            <Custom-input :type="'tel'" :title="'Phone Number'" v-model="form.phoneNumber"
                            :placeholder="'08089928991'" :name="'Phone Number'" :rules="'required|numeric|min:11|max:11'"/>
                            </div>
                        </div>
                        <div class="vd"></div>
                        <div class="content-form-nameinput">
                            <div class="content-form-name">
                            <Custom-input :type="'text'" :title="'Username'" v-model="form.username"
                            :placeholder="'Kingsley01'" :name="'Username'" :rules="'required|alpha_num|min:6|username_check'"/>
                            </div>
                            <div class="content-form-name">
                            <Custom-input :type="'date'" :title="'Date'" v-model="form.dob"
                            :placeholder="'20-02-2021'" :name="'Date'" :rules="'required'"/></div>
                        </div>
                            <PasswordInput :title="'Password'" v-model="form.password"
                            :placeholder="'•••••••••'" :name="'Password'" :rules="'required|alpha_num|min:7'"/>
                            <div class="content-form-button">
                            <CustomButton :disabled="invalid"><template v-if="!loading">Create Account</template>
                            <Loader v-else/>
                            </CustomButton>
                            </div>
                        <div class="content-footer">
                            <p>Already have an Account?<a :href="'./login'"> <span> Sign in</span></a></p>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>

<script src="./Signup.js"></script>
<style lang="scss" scoped src="../../../assets/scss/modules/_signup.scss"></style>