<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import {reactive, onMounted} from 'vue';
import {Apps} from './constant';
let microApps = reactive<any>({
  value: []
})

onMounted(() => {
  console.log('Mounted')
  // registerMicroApps([])
})

setTimeout(() => {
  microApps.value = Apps
}, 100);

const goto = (item): any => {
  // console.log('item.activeRule==', item.activeRule)
  history.pushState(null, item.activeRule,item.activeRule)
}

// function bindCurrent () {
//     const path = window.location.pathname
//     if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
//       this.current = path
//     }
//   }

// function listenRouterChange () {
//       const _wr = function (type) {
//         const orig = history[type]
//         return function () {
//           const rv = orig.apply(this, arguments)
//           const e = new Event(type)
//           e.arguments = arguments
//           window.dispatchEvent(e)
//           return rv
//         }
//       }
//       history.pushState = _wr('pushState')

//       window.addEventListener('pushState', this.bindCurrent)
//       window.addEventListener('popstate', this.bindCurrent)

//       this.$once('hook:beforeDestroy', () => {
//         window.removeEventListener('pushState', this.bindCurrent)
//         window.removeEventListener('popstate', this.bindCurrent)
//       })
//     }

</script>

<template>
  <div class="navigate">
    <div v-for="item in microApps.value" class="routeItem" @click="goto(item)">
        {{ item?.name || '11' }}
    </div>
  </div>
  <div id="subapp-root">
    
  </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="我是Base" /> -->
</template>

<style scoped>
.navigate{
  background: #42b883;
  display: flex;

}
.routeItem{
    /* display: inline-block; */
    width: 100px;
    height: 100px;
    border: 1px solid blueviolet;
    cursor: pointer;
  }
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
