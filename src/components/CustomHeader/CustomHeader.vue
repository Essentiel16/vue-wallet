<template>
        <div class="nav-header">
            <div class="notification">
                <img src="@/assets/icons/notification.svg" svg-inline>
                <img class="popup" src="@/assets/icons/popup.svg" svg-inline>
            </div>
            <p>{{currentUser.first_name}} <span>{{currentUser['last_name']}}</span></p>
            <div class="initials">{{currentUser.first_name.charAt(0)}}{{currentUser.last_name.charAt(0)}}</div>
            <img src="@/assets/icons/down-arrow.svg" svg-inline>
        </div>
</template>
<script src="./CustomHeader.js"></script>
<style lang="scss" src="./CustomHeader.scss"></style>
