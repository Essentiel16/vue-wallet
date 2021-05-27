<template>
<div class="overlay" id="overlay">
        <div class="modal" id="modal">
            <div class="modal-header">
                <h3>{{modalTitle}}</h3>
                <img id="close-modal" src="@/assets/icons/cancel.svg" svg-inline @click="$emit('toggleModal')"> 
            </div>
            <hr>
            <slot/>
          </div>
</div>
</template>

<script src="./Modal.js"></script>
<style lang="scss" scoped src="./Modal.scss"></style>
