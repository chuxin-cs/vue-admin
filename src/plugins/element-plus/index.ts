import {type App} from 'vue';
import ElementPlus from "element-plus";

export function loadUseElementPlus(app: App) {
    /** Element Plus 组件完整引入  这里后期也可以注入使用到的组件 */
    app.use(ElementPlus);
}

