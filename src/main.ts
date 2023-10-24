import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store";
import { router } from "@/router";

// load
import { loadPlugins } from "@/plugins";

// css
import "normalize.css"
import "element-plus/dist/index.css";
import "@/styles/index.scss"

// 实例化
const app = createApp(App);

/** 加载插件 */
loadPlugins(app)

app.use(store).use(router);
app.mount("#app");