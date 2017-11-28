<template>
    <div>
        <h2>Home Components:</h2>
        <my-server-status/>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue'
    // locally register components
    export default {
        components: {
            'my-server-status': ServerStatus
        }
    }
</script>

<style>
</style>