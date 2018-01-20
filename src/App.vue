/*
* 这是Vue单页应用的根组件，统一设置导航栏，路由切换，底部菜单栏
* 页面跳转动画等
*/
<template>
  <div id="app">
    <common-header :title="title" :back-display="backDisplay"></common-header>

    <transition :name="transitionName" tag="div">
      <router-view class="content"></router-view>
    </transition>

    <footer-tabs v-if="isShowTabbar" :tabNames="tabNames"></footer-tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import footerTabs from '@/components/tabs/footer-tabs';
import commonHeader from '@/components/common/common-header';

import homeIcon from '../static/img/tabs/home.png';
import homeIconActive from '../static/img/tabs/homeActive.png';
import marketIcon from '../static/img/tabs/market.png';
import marketIconActive from '../static/img/tabs/marketActive.png';
import mineIcon from '../static/img/tabs/mine.png';
import mineIconActive from '../static/img/tabs/mineActive.png';

export default {
  name: 'App',
  components: {
    commonHeader,
    footerTabs,
  },
  data() {
    return {
      tabNames: [
        { name: '首页', icon: homeIcon, iconActive: homeIconActive, url: '/home' },
        { name: '市场', icon: marketIcon, iconActive: marketIconActive, url: '/market' },
        { name: '我的', icon: mineIcon, iconActive: mineIconActive, url: '/mine' },
      ],
      transitionName: 'slide-left',
    };
  },
  computed: {
    ...mapState({
      currentPageTitle: state => state.base.currentPageTitle,
    }),
    backDisplay() {
      return this.$route.meta.level !== 1;
    },
    title() {
      return this.currentPageTitle;
    },
    isShowTabbar() {
      const CurRouteArray = this.$route.path.split('/');
      if (CurRouteArray.length > 2) {
        return false;
      }
      switch (CurRouteArray[1]) {
        case 'home':
        case 'market':
        case 'mine':
          return true;
        default:
          return false;
      }
    },
  },
  watch: {
    $route(to, from) {
      const toTitle = to.meta.title;
      const toLevel = Number(to.meta.level);
      const fromLevel = Number(from.meta.level);
      // 切换动画判断
      if (toLevel === 1 && fromLevel === 1) {
        this.transitionName = '';
      } else {
        this.transitionName = toLevel < fromLevel ? 'slide-right' : 'slide-left';
      }
      this.setCurrentPageTitle(toTitle);
    },
  },
  methods: {
    ...mapActions(['setShowHeader', 'getServiceTime', 'setCurrentPageTitle']),
  },
};
</script>

<style lang="scss">
  html,body {
    height: 100%;
    width: 100%;
    margin: 0;
    overflow-x: hidden;
    a {
      text-decoration: none;
      color: #000000;
    }
  }

  .content{
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 50px;
    background-color: #f5f5f5;
  }

  /*页面过渡效果*/
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    position: absolute;
    -webkit-transform: translate3d(0,0,0);
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    perspective: 1000;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    -webkit-transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    -webkit-transform: translate3d(-100%, 0, 0);
  }
</style>
