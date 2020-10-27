<template>
<div id="app">
    <router-view></router-view>
    <app-tab-bar></app-tab-bar>
</div>
</template>

<script>
import AppTabBar from "components/contact/AppTabBar/AppTabBar";
export default {
    name: "App",
    components: {
        AppTabBar
    }
};
</script>

<style>
@import "assets/css/base.css";
</style>
