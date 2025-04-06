import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
/*
  @param {Component} rootComponent - The root component to be used for the app.
  @param {object} [rootProps] - Optional properties to be passed to the root component.
  @returns {App} - The created app instance.
  @description
  Creates a new Vue application instance with the specified root component and optional properties.
  function createApp(rootComponent: Component, rootProps?: object): App

  You can create multiple instance of Vue app, but you need mount them to different DOM elements.
*/

app.use(createPinia())
app.use(router)

app.mount('#app')