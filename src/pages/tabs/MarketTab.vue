<template>
  <market-card-info :configs="configs"></market-card-info>
</template>

<script>
import marketCardInfo from '@/components/tabs/market-card-info';

import iconPerson from '../../../static/img/icon_person.jpg';
import iconWholesale from '../../../static/img/icon_wholesale.jpg';
import iconChat from '../../../static/img/icon_chat.jpg';

export default {
  components: {
    'market-card-info': marketCardInfo,
  },
  data() {
    return {
      configs: [
        { url: '', imgUrl: iconPerson, title: '车源竞拍', content: '100%个人车源抢到就是赚到' },
        { url: '', imgUrl: iconWholesale, title: '车辆批售', content: '车辆打包批发更简单更高效' },
        { url: '', imgUrl: iconChat, title: '串车交流', content: '车辆信息交流互通有无' },
      ],
    };
  },
};
</script>
