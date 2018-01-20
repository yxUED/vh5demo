<template>
  <div class="content-wrap">
    <!--list-->
    <div>
      <common-form :configs="myConfigOne"></common-form>
      <common-form :configs="myConfigTwo"></common-form>
    </div>
    <!--按钮-->
    <div class="button-wrapper" @click="loginOut">
       <div class="button-logoff">退出</div>
    </div>
    <!--按钮 end-->
  </div>
</template>
<script>
import commonForm from '@/components/common/common-form';

export default {
  components: {
    'common-form': commonForm,
  },
  data() {
    return {
      myConfigOne: [
        { url: '', leftText: '清除缓存', rightText: '', isRoute: true },
      ],
      myConfigTwo: [
        { url: '', leftText: '关于我们', rightText: '', isRoute: true },
        { url: '', leftText: '用户协议', rightText: '', isRoute: true },
      ],
    };
  },
  methods: {
    loginOut() {
      this.$router.replace({
        name: 'home',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/function";

.content-wrap{
  .button-wrapper{
    margin-top:px2rem(270px);
    .button-logoff{
      width:100% ;
      height:px2rem(80px);
      line-height: px2rem(80px);
      font-size: px2rem(36px);
      color: #FFFFFF;
      text-align: center;
      background: #368CDA;
    }
  }
}
</style>
