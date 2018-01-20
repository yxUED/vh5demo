<template>
  <div class="container" :class="bgcolor">
    <div v-for="(config, index) in configs" :key="index">
      <router-link :to="config.url" class="group-link">
        <img class="icon" :src="config.icon">
        <div class="text">{{config.text}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      configs: {
        type: Array,
        default() {
          return [];
        },
      },
      bgcolor: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/function";
  .container {
    display: flex;
    justify-content: space-around;
    height: px2rem(170px);
  }
  .blue{
    background:#368CDA;
    .group-link{
      width:px2rem(168px);
      color:#fff;
      display:inline-block;
      text-align: center;
      margin-top: px2rem(20px);
      font-size: px2rem(38px);
      .auction-content{
        margin-top: px2rem(20px);
      }
      .icon{
        width: px2rem(60px);
        height: px2rem(56px);
      }
    }
  }
  .white{
    background: #fff;
    .group-link{
      width:px2rem(168px);
      font-size: px2rem(30px);
      color:#000;
      display:inline-block;
      text-align: center;
      margin-top: px2rem(40px);
      .text{
        margin-top: px2rem(30px);
      }
      .icon{
        width: px2rem(44px);
        height: px2rem(42px);
      }
    }
  }
</style>
