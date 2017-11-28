<template>
    <li
            class="list-group-item"
            style="cursor: pointer"
            @click="serverSelected"
            @clickedResetStatus="server = $event">
        Server {{ server.id }} {{ server.status }}
    </li>
</template>

<script>
    import { serverBus } from '../../main';

    export default {
        props: ['serverInfo'],    // get passed data
        data: function() {
            return {
                server: this.serverInfo
            }
        },
        methods: {
            serverSelected() {
                // send data to ServerDetail
                serverBus.$emit('clickedServer', this.server);  //emit an event
            }
        }
    }
</script>

<style>

</style>
