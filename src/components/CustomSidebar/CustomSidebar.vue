<template>
    <div class="sidenav">
            <div class="sidenav-logo">
                    <img src="@/assets/icons/white_logo.svg" svg-inline>
                <div class="logo-text">
                    <h6>Wallet</h6>
                </div>    
            </div>
            <div class="menu-wrapper">
                <router-link to="dashboard">
            <a href="#" class="nav-menu">
                <img src="@/assets/icons/home.svg" svg-inline>
                <span class="nav-text">Home</span>
            </a></router-link>
            
            <router-link to="transaction"><a href="#" class="nav-menu">
                <img src="@/assets/icons/history.svg" svg-inline>
                <span class="nav-text">History</span>
            </a></router-link>
    
            <router-link to="create"><a href="#" class="nav-menu">
                <img src="@/assets/icons/profile.svg" alt="">
                <span class="nav-text">Profile</span>
            </a></router-link>
            </div>
          </div>
</template>