
<script setup>
import ToogleButton from '../Shared/ToogleButton.vue';
const props = defineProps(["cookieSetting"])


</script>

<template>
	<div class="settings--item">
		<div>
			<h3 class="settings--item__title">{{props.cookieSetting.title}}</h3>
			<p class="settings--item__descr">{{props.cookieSetting.description}}</p>
		</div>
		<div>
			<ToogleButton :cookieSetting="cookieSetting" ></ToogleButton>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.settings--item{
				border: 2px solid #121212;
				margin: 5px 0px;
				padding: 10px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-radius: 10px;
				&__title{
					color: white;
					font-size: 16px;
					font-weight: 500;
					margin-bottom: 5px;
				}
				&__descr{
					color: white;
					font-size: 14px;
					font-weight: 500;
				}
			}
			@media screen and (max-width: 800px) {
				.settings--item{
					&__title{
						font-size: 14px;
					}
					&__descr{
						font-size: 12px;
					}
				}
			}

</style>