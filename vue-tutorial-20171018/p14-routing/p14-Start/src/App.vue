<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <link-header></link-header>
                <h1>Routing</h1>
                <hr>
                <!-- <router-view name="header-top"></router-view> -->
                <app-header></app-header>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                <!-- <router-view name="header-bottom"></router-view> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        components: {
            linkHeader: Header
        }
    }
</script>

<style>

</style>