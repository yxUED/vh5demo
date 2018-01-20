<template>
  <div class="header">
    <div v-show="backDisplay" class="img-container" @click="goBack">
      <img class="back-icon" :src="backIcon"/>
    </div>
    <div class="header-title"><p :class="{fixTitleCenter: backDisplay}">{{title}}</p></div>
  </div>
</template>

<script>
import backIcon from '../../../static/img/back.png';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    backIcon: {
      type: String,
      default: backIcon,
    },
    backDisplay: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style lang="scss" >
@import "../../assets/function";

.header{
  position: fixed;
  transform: translateZ(0);
  top: 0;
  z-index: 99;
  height: px2rem(100px);
  width: 100%;
  background: #368CDA;
  display: flex;
  flex-direction: row;

  .img-container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    .back-icon {
      width: px2rem(50px);
      height: px2rem(50px);
    }
  }

  .header-title {
    flex: 6;
    text-align: center;
    overflow: hidden;
    >p {
      color: #ffffff;
      font-size: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
   }

   .fixTitleCenter {
     margin-right: px2rem(100px);
   }
 }

</style>
