<template>
  <div>
    <common-form :configs="myConfigOne"></common-form>
    <common-form :configs="myConfigTwo"></common-form>
    <common-form :configs="myConfigThree"></common-form>
    <common-form :configs="myConfigFour"></common-form>
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
        { url: '', leftText: '我的钱包', rightText: '', isRoute: true },
        { url: '', leftText: '我的关注', rightText: '', isRoute: true },
      ],
      myConfigTwo: [
        { url: '', leftText: '商家认证', rightText: '', isRoute: true },
        { url: '', leftText: '员工管理', rightText: '', isRoute: true },
      ],
      myConfigThree: [
        { url: '', leftText: '行情估价', rightText: '', isRoute: true },
        { url: '', leftText: '库存融资', rightText: '稍后开通', isRoute: false },
        { url: '', leftText: '车辆物流', rightText: '稍后开通', isRoute: false },
        { url: '', leftText: '串车交流', rightText: '稍后开通', isRoute: false },
      ],
      myConfigFour: [
        { url: '', leftText: '意见反馈', rightText: '', isRoute: true },
        { url: '/mine/setting', leftText: '设置', rightText: '', isRoute: true },
      ],
    };
  },
};
</script>
