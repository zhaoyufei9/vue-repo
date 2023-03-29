import './style.css'
import { createApp } from 'vue';
import { createRouter } from 'vue-router';
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/es/helper";
import App from './App.vue';

const routes = [
  {
    path: '/',
    name: 'preput',
    component: App,
  },
];


let root: any;


function render(props: any) {
  const { container, routerBase, history } = props;
  const router = createRouter({
    history,
    routes,
  });
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
