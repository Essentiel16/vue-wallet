<template>
    <div>
        <ValidationProvider :rules="rules" v-slot="{ errors }" :vid="vid"> 
            <div class="form-group">
                <label for="title">{{title}}</label><br>
                <span class="content-form-input">
                <input class="input" :class="{'input__error': errors && errors.length }" :type="showPassword"
                :placeholder="placeholder" v-model="innerValue" :name="name" v-on="$listeners"/>
                <span class="password-icon">
                    <img class="svg" @click.prevent="togglePassword" src="@/assets/icons/visibility-off.svg" svg-inline v-if="showPassword =='password'">
                    <img class="svg" @click.prevent="hidePassword" src="@/assets/icons/visibility-on.svg" svg-inline  v-if="showPassword == 'text'"/>
                </span>
                </span>
                <span>
                    <small class="invalid" v-for="error in errors" :key="error">{{error}}</small>
                </span>
            </div>
    </ValidationProvider>
    </div>
</template>
<script src="./PasswordInput.js"></script>
<style lang="scss" src="./PasswordInput.scss">
</style>
