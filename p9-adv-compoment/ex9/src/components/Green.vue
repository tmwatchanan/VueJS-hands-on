<template>
    <div>
        <h2>Green child title</h2>
        <slot>
            This will only be displayed if there is no content to be distributed.
        </slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>