new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
        	result: function() {
          	return this.value != 37 ? 'not there yet' : 'done';
          }
        },
        watch: {
        	result: function(value){
          	var val = this;
            setTimeout(function() {
            	val.value = 0;
            }, 5000)
          }
        }
    });