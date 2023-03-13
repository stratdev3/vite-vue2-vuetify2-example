<template>
    <v-container>
    
        <h1>Home Index</h1>
        
        Dashboard <span v-if="hms" class="grey--text text-h5 mt-1 ml-2">{{ hms.toLocaleString('en-US', format) }}</span>
    
    </v-container>
</template>

<script>
export default {
    props: {
        action: {
            type: String
        },
    },
    data: function() {
        var self = this;
        return {
            hms: new Date(),
            documentation: null,
        };
    },
    mounted: function() {
        var self = this;

        setInterval(function() {
            self.hms = new Date();
        }, 1000);
    },
    computed: {
        format: function() {
            return {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            };
        }
    }
}
</script>