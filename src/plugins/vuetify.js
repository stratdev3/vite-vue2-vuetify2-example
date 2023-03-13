// styles
import '/node_modules/roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

// vuetify
import vuetify from 'vuetify/lib'
import clickOutside from 'vuetify/lib/directives/click-outside';

export const Vuetify = vuetify;
export const options = {
    directives: {
        clickOutside,
    }
};