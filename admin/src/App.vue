<template>
  <div id="app">
    <router-view v-if="isReloadAlive"/>
  </div>
</template>

<script>
  export default{
    provide() {
      return {
          reload: this.reload
      }
    },
    data(){
      return{
        isReloadAlive:true
      }
      
    },
    methods:{
      reload() {
        this.isReloadAlive = false;
        this.$nextTick(function(){
          this.isReloadAlive = true;
        })
      },
    },
    mounted(){

    }
  }
</script>
<style>
@import "~assets/css/global.css";

html,
body {
  margin: 0;
  padding: 0;
}
html {
  height: 100vh;
}
body {
  height: 100%;
  min-width: 1200px;
}
#app {
  height: 100%;
}
</style>
