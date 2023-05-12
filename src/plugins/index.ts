import {type App} from 'vue';
import {loadUseElementPlus} from './element-plus';

/**
 * 项目引入外部插件 use 集合
 * 1、element-plus
 */
export function loadPlugins(app: App) {
    // use ElementPlus
    loadUseElementPlus(app);
}