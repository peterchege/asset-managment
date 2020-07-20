import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#034EA2',
                secondary: '#F8AB10',
                accent: '#EFEFEF',
                error: '#FF5252',
                info: '#F8F9FB',
                success: '#4CAF50',
                warning: '#FFC107'
            },
        },
    },
});