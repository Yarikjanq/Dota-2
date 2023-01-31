import { createApp } from "vue";
import App from "./App.vue";
import './assets/main.css';
import store from "./components/store/store";
import router from "./router/router";
const app = createApp(App);
app
.use(router)
.use(store)
.mount("#app");
