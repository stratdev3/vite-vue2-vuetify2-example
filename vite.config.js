import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
    base: '', // force empty for relative url instead of default '/' to absolute
    plugins: [
        vue(),
        // https://github.com/antfu/unplugin-vue-components
        Components({
            // auto import for directives
            directives: true,
            // resolvers for custom components
            resolvers: [
                // Vuetify
                VuetifyResolver(),
            ],
            // https://github.com/antfu/unplugin-vue-components#types-for-global-registered-components
            // types: [{
            //     from: 'vue-router',
            //     names: ['RouterLink', 'RouterView'],
            // }],
        })
    ],
    resolve: {
        // https://vitejs.dev/config/shared-options.html#resolve-alias
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
