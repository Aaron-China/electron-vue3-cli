<template>
  <div>
    <a-button @click="sendMsg">向主进程发消息</a-button>
    <a-button @click="quitApp">关闭APP</a-button>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
const { ipcRenderer } = window.electron;

export default defineComponent({
  name: 'delete',
  components: {},
  setup() {
    // 向主进程发异步消息
    const sendMsg = () => {
      ipcRenderer.send("sendMsg",`随机数: ${Math.random()}`);
    }
    // 向主进程发同步消息，可使用变量承接，主进程通过 e.returnValue 设置返回值
    const quitApp = () => {
      let  res = ipcRenderer.sendSync("quitApp", {time: 3000})
      console.log(res)
    }

    onMounted(() => {
      ipcRenderer.on("replyMsg",(e, d) => {
        console.log(d)
      });
    })

    return {
      sendMsg,
      quitApp
    }
  }
})
</script>

<style scoped>
</style>
