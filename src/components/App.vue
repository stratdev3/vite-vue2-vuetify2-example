<template>
    <v-app>

        <!-- nav bar -->
        <v-app-bar app dense :elevation=0 color="primary">
            <v-toolbar-items>
                <v-btn color="primary" :elevation=0 to="/">Home</v-btn>
                <v-btn color="primary" :elevation=0 to="/test/index">Test</v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <!-- main content router view -->
        <v-main>
            <RouterView />
        </v-main>

    </v-app>
</template>

<script>
export default {
    
};
</script>