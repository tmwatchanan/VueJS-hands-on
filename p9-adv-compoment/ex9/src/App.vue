<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'blueTemplate'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'greenTemplate'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'redTemplate'">Load Red Template</button>
                <hr>
                <p>selectedComponent = {{ selectedComponent }}</p>
                <component v-bind:is="selectedComponent">
                    <app-blue v-if="selectedComponent == 'blueTemplate'">
                        <!-- passing content using slot -->
                    </app-blue>
                    <app-green v-if="selectedComponent == 'greenTemplate'">
                        <!-- passing content using slot -->
                    </app-green>
                    <app-red v-if="selectedComponent == 'redTemplate'">
                        <!-- passing content using slot -->
                    </app-red>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedComponent: null
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
