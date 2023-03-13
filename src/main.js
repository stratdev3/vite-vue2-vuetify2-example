// vue
import Vue from 'vue'

// plugins
import { Vuetify, options } from './plugins/vuetify'

// app
import App from './components/App.vue'
import router from './router'


//
// main
//

// load Vue 2.7 plugins
Vue.use(Vuetify, options); // need options (directives) to work in vue 2.7 source https://github.com/vuetifyjs/vuetify/issues/12224#issuecomment-894201049
// init main Vue 2.7 root component
const app = new Vue({
    vuetify: new Vuetify(),
    router: router,
    render: h => h(App),
});
app.$mount('#app');
