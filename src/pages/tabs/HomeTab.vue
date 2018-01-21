<template>
  <div>
    <icon-routes :configs="auctionConfigs" bgcolor="blue"></icon-routes>
    <icon-routes :configs="manageInfos1" bgcolor="white"></icon-routes>
    <icon-routes :configs="manageInfos2" bgcolor="white"></icon-routes>
    <icon-routes :configs="manageInfos3" bgcolor="white"></icon-routes>
    <p>姓名：{{userData.name}}</p>
    <p>手机：{{userData.phone}}</p>
  </div>
</template>

<script>
import iconRoutes from '@/components/tabs/icon-routes';
import api from '../../api';

export default {
  components: {
    iconRoutes,
  },
  data() {
    return {
      userData: '',
      auctionConfigs: [
        { icon: '../../../static/img/preview.png', text: '车源预告', url: '' },
        { icon: '../../../static/img/timing.png', text: '定时拍', url: '' },
        { icon: '../../../static/img/long.png', text: '长时拍', url: '' },
      ],
      manageInfos1: [
        { icon: '../../../static/img/icon_assess.png', text: '评估管理', url: '' },
        { icon: '../../../static/img/icon_store.png', text: '库存管理', url: '' },
        { icon: '../../../static/img/icon_client.png', text: '客户管理', url: '' },
      ],
      manageInfos2: [
        { icon: '../../../static/img/icon_shop.png', text: '采购订单', url: '' },
        { icon: '../../../static/img/icon_sale.png', text: '销售订单', url: '' },
        { icon: '../../../static/img/icon_ready.png', text: '整备管理', url: '' },
      ],
      manageInfos3: [
        { icon: '../../../static/img/icon_card.png', text: '牌证管理', url: '' },
        { icon: '../../../static/img/icon_price.png', text: '行情估价', url: '' },
        { icon: '../../../static/img/icon_staff.png', text: '员工管理', url: '' },
      ],
    };
  },
  created() {
    api.getUser().then((res) => {
      this.userData = res.data.data;
    });
  },
};
</script>
