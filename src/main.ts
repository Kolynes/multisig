import Vue from "vue"
import vuetify from './plugins/vuetify'
import App from './App.vue'
import ExtensionNotFound from "./ExtensionNotFound.vue";
import router from './router'
import store from './store'
import { Extension, Wallet } from "@terra-money/terra.js"

const extension = new Extension();
extension.connect();

if(extension.isAvailable) {
  extension.on("onConnect", (w: Wallet) =>  {
    console.log("connected: ", w);
    new Vue({
      store,
      router,
      vuetify,
      render: h => h(App),
    }).$mount('#app');
  })
}
else new Vue({
  store,
  router,
  vuetify,
  render: h => h(ExtensionNotFound),
}).$mount('#app');


