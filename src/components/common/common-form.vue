<template>
  <div class="container-view">
    <router-link :to="config.url" v-for="(config, index) in configs" class="itemsLink" :key='index' >
      <div class="leftText">
        {{config.leftText}}
      </div>
      <div class="rightText">
        <p>{{config.rightText}}</p>
        <div class="arrow-icon" v-show="config.isRoute">
          <img class="next-icon" :src="nextIcon">
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import nextIcon from '../../../static/img/next.png';

export default {
  props: {
    configs: {
      type: Array,
      default() {
        return [];
      },
    },
    nextIcon: {
      type: String,
      default: nextIcon,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/function";
.container-view{
 background: #fff;
 border-top: 1px solid #E0E6ED;
 border-bottom: 1px solid #E0E6ED;
 margin-top: px2rem(30px);

  .itemsLink {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: px2rem(82px);
    border-top: 1px solid #E0E6ED;
    background: #fff;
    font-size: px2rem(30px);
    margin-left: px2rem(36px);
    color: #495362;

    .rightText {
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-right: px2rem(20px);
        color: #8492A6;

        .next-icon {
          width: px2rem(35px);
          height: px2rem(35px);
        }
    }
  }
  .itemsLink:first-child {
    border-top: none;
  }
  .itemsLink:last-child {
     border-bottom: none;
  }
}
</style>
