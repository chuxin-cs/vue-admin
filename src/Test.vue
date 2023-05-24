<template>
  <div class="app-container">
    {{ count }}
  </div>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  onUpdated,
  onBeforeMount,
  watchEffect
} from 'vue';


function useHooks() {
  onMounted(() => {
    console.log('直接执行不行，但是我用函数包裹起来在setup执行的时候再进行执行，是可以的，也就是说当前生命周期依赖当前组件')
  });
}

export default {
  setup() {

    const count = ref(0);
    console.log("-------------------进入setup")
    onMounted(() => {
      console.log("onMounted")
    })

    setTimeout(() => {
      count.value++;
    }, 2000);

    watchEffect(() => {
      const a = count.value;
      console.log("watchEffect", a)
    })

    onBeforeMount(() => {
      console.log("onBeforeMount")
    })

    onUpdated(() => {
      console.log("onUpdated")
    })

    useHooks();
    console.log("setup结束-----------------");

    return {
      count
    }
  }
}
</script>

