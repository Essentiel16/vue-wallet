<template>
<div>
    <ValidationProvider :rules="rules" v-slot="{ errors }"> 
        <label for="title">{{title}}</label><br>
        <input class="input" :class="{'input__error': errors && errors.length, computedWidth }" :type="type" :placeholder="placeholder" v-model="innerValue" :name="name" v-on="$listeners"/>
        <span>
        <small class="invalid" v-for="error in errors" :key="error">{{error}}</small></span>
    </ValidationProvider>
</div>
</template>
<script src="./CustomInput.js"></script>
<style lang="scss" src="./CustomInput.scss">
</style>
