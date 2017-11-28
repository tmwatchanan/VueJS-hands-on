<template>
    <div>
        <h1>The User Page</h1>
        <!-- <p>Load ID: {{ id }}</p> -->
        <hr>
        <!-- add subroutes' component -->
        <router-view></router-view>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
</div>
</template>

<script>
    export default {
        data() {
            return {
                // corresponding to the '/usr/:id' route
                // $route NOT $router
                id: this.$route.params.id  
            }
        },
        methods: {
            navigateToHome() {
                // this.$router.push('/');     // add navigation
                // this.$router.push( { path: '/' })
                this.$router.push( { name: 'home' })
            }
        },
        watch: {
            // a function passing (new-route, old-route)
            '$route'(to, from) {            
                this.id = to.params.id;
            }
        }
    }
</script>
