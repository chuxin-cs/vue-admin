<template>
  <div class="app-container">
    <h1>{{ name }}</h1>
    <el-button @click="updateName('123')">按钮</el-button>
    
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {storeToRefs} from 'pinia'
import {useUserStore} from './store/user';

export default {
  name: "App",
  setup() {
    const userStore = useUserStore();

    function updateName(e:string) {
      userStore.updateName(e)
    }

    return {
      name: storeToRefs(userStore).name,
      updateName,
    }
  }
}
</script>

