<template>
	<div class="tabar">
		<router-link :to="tab.url" v-for="(tab, index) in tabNames" :key="index" >
			<div class="tab-item">
				<img class="tab-icon" :src="navIndex === index ? tab.iconActive : tab.icon"/>
				<div :class="{ textActive: navIndex === index }">{{tab.name}}</div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'footer-tabs',
  props: {
    tabNames: {
      type: Array,
      default() {
        return [];
      },
    },
  },
	computed: {
		navIndex() {
			const CurRouteArray = this.$route.path.split('/');
			switch (CurRouteArray[1]) {
				case 'home':
					return 0;
				case 'market':
					return 1;
				case 'mine':
					return 2;
				default:
					return 0;
			}
		},
	},
};
</script>

<style scoped lang="scss">
@import '../../assets/function';

.tabar {
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: px2rem(120px);
	background: #fff;
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

	.tab-item{
		margin-top: 10px;

		.tab-icon{
			width: 27px;
			height: 27px;
		}

		.textActive {
			color: #1296db;
		}
	}
}
</style>
