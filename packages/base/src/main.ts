import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Apps} from './constant';
import {registerMicroApps, start} from 'qiankun';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'home',
      component: App,
    },
   
  ];

const history = createWebHistory();
// app.use(router)
const router = createRouter({
    history,
    routes,
  });

const app = createApp(App)
app.use(router)
.mount('#app')

const apps = Apps.map(item=>{
    console.log('app-hhhhhitem=====', item, history)
    // const history = createWebHistory(item.activeRule);
    return {
        ...item,
        props: {
            routerBase: item.activeRule, // 下发基础路由
            history,
        }
    }
})

console.log('apps==', apps)


registerMicroApps(apps, 
    {
    beforeLoad: app => {
        console.log('before load app.name====>>>>>', app.name)
    },
    beforeMount: [
    app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
    ],
    afterMount: [
    app => {
        console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
    ],
    afterUnmount: [
    app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
    ]
}
)

start()