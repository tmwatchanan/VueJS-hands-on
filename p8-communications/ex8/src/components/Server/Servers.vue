<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <ul class="list-group">
            <!-- passing each server data to Server component -->
            <app-server
                v-for="server in servers"
                :key="server.id" v-bind:serverInfo="server"></app-server>
            </ul>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue';

export default {
    data: function() {
        return {
            servers: [
                { id: 1, status: 'Normal', oldStatus: 'Normal'},
                { id: 2, status: 'Critical', oldStatus: 'Critical'},
                { id: 3, status: 'Unknown', oldStatus: 'Unknown'},
                { id: 4, status: 'Normal', oldStatus: 'Normal'},
                { id: 5, status: 'Normal', oldStatus: 'Normal'},
                { id: 6, status: 'Critical', oldStatus: 'Critical'},
                { id: 7, status: 'Normal', oldStatus: 'Normal'}
            ]
        };
    },
    components: {
        appServer: Server
    }
}
</script>

<style>

</style>
