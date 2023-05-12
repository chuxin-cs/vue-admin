import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";

// 加载 plugins
import {loadPlugins} from '@/plugins';

// css
import "normalize.css";
import 'element-plus/dist/index.css';
import "./styles/index.scss";

const app = createApp(App);

/** 加载插件 **/
loadPlugins(app);
/** 加载自定义指令 **/


app.use(store).use(router);
app.mount('#app');

