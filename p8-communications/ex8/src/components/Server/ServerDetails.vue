<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ showServerDetail() }}</p>
        <hr>
        <!-- <button @click="resetStatus">Change to {{ status[(statusIndex + 1) % 3] }}</button> -->
        <button @click="resetStatus">Change to {{ statuses[(statusIndex + 1) % 3] }}</button>
    </div>

</template>

<script>
    import { serverBus } from '../../main';

    export default {
        data: function() {
            return {
                server: null,
                statuses: ['Normal', 'Critical', 'Unknown']
            }
        },
        methods: {
          showServerDetail() {
              if (this.server != null) {
                  return this.server.id + ' ' + this.server.status
              }
              return 'Server Details component are currently not updated'
          },
          resetStatus() {
            // this.statusIndex = (this.statusIndex + 1) % 3
            // this.server.status = this.status[this.statusIndex]
            this.server.status = this.statuses[(this.statusIndex + 1) % 3] 
            this.$emit('clickedResetStatus', this.server)
          }
        },
        created() {
            serverBus.$on('clickedServer', (cServer)=> {
                this.server = cServer
            })
            this.statusIndex = 0
        },
        computed: {
            statusIndex: function() {
                return this.statuses.indexOf(this.server.status)
            }
        }
    }
</script>

<style>

</style>
