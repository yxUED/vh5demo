<template>
  <div class="container-view ">
    <router-link :to="config.url" v-for="(config, index) in configs" class="auction-round" :key='index'>
      <div class="details-parms">
        <div class="pic-left">
          <img class="icon" :src="config.imgUrl" >
        </div>
        <div class="text-right" >
          <p class="text-title">{{config.title}}</p>
          <p class="text-cont">{{config.content}}</p>
        </div>
      </div>
    </router-link>
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
  },
};
</script>

<style lang="scss" >
@import "../../assets/function";
  .container-view {
    margin-top: px2rem(100px);
    .details-parms {
      background: #fff;
      margin-top: px2rem(31px);
      display: flex;
      align-items: center;
      padding: px2rem(45px) px2rem(80px);
      height: px2rem(150px);

      .pic-left {
        padding-right: px2rem(194px);
        width: px2rem(260px);
        height: px2rem(150px);
        .icon {
         width: px2rem(260px);
         height: px2rem(150px);
        }
      }

      .text-right {
        text-align: center;
        .text-title {
         font-size: px2rem(34px);
         color: #000;
        }

        .text-cont{
         color: #8492A6;
         font-size: px2rem(24px);
         width: px2rem(160px);
         line-height: px2rem(33px);
         padding-top: px2rem(10px);
        }
      }
    }
  }
</style>
