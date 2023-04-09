import {createApp} from 'vue';
import App from './App.vue';

const app = createApp(App)

// router
import router from './router';
app.use(router);

// Element-Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

app.use(ElementPlus);

// store
import store from "./store";

app.use(store);


// 挂载
app.mount('#app')
