import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Account from './components/Account.vue'
import Games from './components/Games.vue'
import Picks from './components/Picks.vue'
import Standings from './components/Standings.vue'
// 
// config();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'Home', path: '/', component: Home },
        { name: 'Account', path: '/account', component: Account },
        { name: 'Games', path: '/games', component: Games },
        { name: 'Standings', path: '/standings', component: Standings },
        { name: 'Picks', path: '/picks', component: Picks },
    ],
});

const app = createApp(App)
app.use(router)

app.mount('#app')
