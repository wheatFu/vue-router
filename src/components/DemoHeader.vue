<template>
  <div id="Aheader" class="wrap">
    <div class="header">
      <h1 class="logo">
        <router-link to="/">
          <img src="../assets/logo.jpg" alt="">
        </router-link>
      </h1>
    </div>
    <div class="top-nav">
      <div id="navList" class="navlist-wrap">
        <div class="navlist clearfix">
          <span class="nav-btn">
            <router-link to="/">首页</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/about">关于</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/contact">联系方式</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default({
    name:'Aheader',
    data:function () {
      return {
        'nav-btn': 'nav-btn'
      }
    }
  })
</script>
<style scoped>
  .Aheader{width:1105px;margin:0 auto;height:111px;padding:12px 0 18px;position:relative;*z-index:1}
  .header .logo{height:86px;width:256px;margin-top:25px}
  .top-nav .navlist-wrap{width:1050px;margin:0 auto;position:relative}
  .top-nav .navlist{position:absolute;right:130PX;top:-40PX}
  .top-nav .navlist .nav-btn
  {
    float:left;
    margin-left:60px;
    color:#666;
    vertical-align: middle;
    text-decoration:none;
    font-size: large;
  }
</style>