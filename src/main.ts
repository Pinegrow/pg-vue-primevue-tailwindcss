// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtoolsKey = devtools
// }

import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'
import '@/assets/css/shiki.css'

import 'uno.css'

import { createApp } from 'vue'
import pinia from '@/plugins/pinia'
import head from '@/plugins/head'
import { primeVuePlugin, primeVueConfig } from '@/plugins/primevue'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(head)
app.use(primeVuePlugin, primeVueConfig)

app.mount('#app')
