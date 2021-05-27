<template>
    <div class="wrapper">
        <div class="header">
            <img src="@/assets/icons/logo.svg" svg-inline>
        </div>
        <div class="content">
            <div class="content-left">
                <h2>Create Pin</h2>
                <p>Create pin to enable transfer</p>
            </div>
            <div class="content-right">
                <form class="form-body">
                    <h2 class="otp-body-head">Kindly create your <br/><span>transaction Pin</span></h2>
                    <div class="otp-body-code">
                        <div class="code-input"><input type="text" placeholder="*" v-model="input.pin1" maxlength="1">
                        </div>
                        <div class="code-input"><input type="text" placeholder="*" v-model="input.pin2" maxlength="1"></div>
                        <div class="code-input"><input type="text" placeholder="*" v-model="input.pin3" maxlength="1"></div>
                        <div class="code-input"><input type="text" placeholder="*" v-model="input.pin4" maxlength="1"></div>
                    </div>
                    <div class="otp-footer">
                       <CustomButton @click.prevent="pinCreate">Create Pin</CustomButton>
                    </div>
                    <div class="check"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./CreatePin.js"></script>
<style lang="scss" scoped>
@import '@/assets/scss/modules/_signup';
@import '@/assets/scss/modules/_verification';
</style>
