import './style.css'
import { createApp } from 'vue';
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/es/helper";
import App from './App.vue';
import HelloWorldVue from './components/HelloWorld.vue';
import SecondVue from './components/Second.vue';
import ThirdVue from './components/Third.vue';
import { createRouter, createWebHistory } from 'vue-router';


// 当前问题是：子应用切换到adcreate后，点击子应用中路由，无法再次切换导航栏路由。
// 猜测：router不一致导致
/**
 * 
 * 微应用之间如何跳转？
主应用和微应用都是 hash 模式，主应用根据 hash 来判断微应用，则不用考虑这个问题。

主应用根据 path 来判断微应用

history 模式的微应用之间的跳转，或者微应用跳主应用页面，直接使用微应用的路由实例是不行的，原因是微应用的路由实例跳转都基于路由的 base。有两种办法可以跳转：

history.pushState()：mdn 用法介绍
将主应用的路由实例通过 props 传给微应用，微应用这个路由实例跳转。
 * 
 * 
 */
const routes = [
  {
    path: '/',
    name: 'adcreate',
    component: App,
  },
  {
    path: '/adcreate/hello',
    name: 'hello',
    component: HelloWorldVue,
  },
  {
    path: '/adcreate/second',
    name: 'second',
    component: SecondVue,
  },
  {
    path: '/adcreate/third',
    name: 'third',
    component: ThirdVue,
  },
  
 
];


let root: any;


function render(props: any) {
  const { container, routerBase, history  } = props;
  // const history = createWebHistory()
  console.log('routerBase-', routerBase)
  const router = createRouter({
    history,
    routes,
  });

  // console.log('props=', props)
  root = createApp(App)
  root.use(router);
  const c = container
    ? container.querySelector("#app")
    : document.getElementById("app")
  root.mount(c)
}


renderWithQiankun({
  mount(props) {
    console.log("vue3sub mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("vue3sub unmount");
    root.unmount();
  },
  update(props: any) {
    console.log("vue3sub update");
    console.log(props)
  },
});
