<template>
    <div>
        <h3>ServerStatus Component:</h3>
        <p>
            Server Status: {{ status }} - 
            <button @click="changeStatus">Change Status</button>
        </p>
    </div>
</template>

<script>
    export default {
        data: function() {
          status: 'Normal'
        },
        methods: {
            changeStatus: function() {
                this.status = (this.status == 'Normal' ? 'Critical' : 'Normal');
            }
        }
    }
</script>

<style>

</style>
