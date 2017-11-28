<template>
    <div>
        <h2>Blue child title</h2>
        <div>
            <slot name="tag">
                #BLUE_TAG in child
            </slot>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>