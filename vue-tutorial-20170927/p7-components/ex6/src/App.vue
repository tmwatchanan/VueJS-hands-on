<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li class="list-group-item" v-for="index in 5" v-bind:key="index">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>


// Template after modification
// <template>
//     <div class="container">
//         <app-header></app-header>
//         <hr>
//         <div class="row">
//             <app-servers></app-servers>
//             <app-server-details></app-server-details>
//         </div>
//         <hr>
//         <app-footer></app-footer>
//     </div>
// </template>

<script>
// import local components here!!!
import Header from './Header.vue'
</script>

<style>

</style>
