// @ts-ignore
/* Remove vue-router import (if it exists) */
// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

export default router
