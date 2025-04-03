/// Create a new Vue app
const app = Vue.createApp({
    /// Define the data for the app
    data() {
        return {

        };
    },
    /// Define the methods for the app
    methods: {
        isActive(pressureLevel) {
            /// Logic here for if the pressure is within the level parameters return boolean
        }
    }
});

/// Mount the app to the #app element
app.mount('#app');
