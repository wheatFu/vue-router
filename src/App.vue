<template>
  <div id="app">
        <demo-header></demo-header>
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
        <demo-footer></demo-footer>
    </div>
</template>
<script>
import DemoHeader from './components/DemoHeader'
import DemoFooter from './components/DemoFooter'
export default {
  name: 'app',
  components: {
    DemoHeader,
    DemoFooter
  }
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: aliceblue;
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
