<script setup>

const props = defineProps(["item"])

const {text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."} = (props.item)

</script>


<template>
	<div v-if="item.isActive" class="item" >
			<h3 class="item__title">{{item.name}}</h3>
			<p class="item__descr">{{text}}</p>
		</div>
</template>


<style lang="scss" scoped>
	.item{
				margin: 5px 0px;
				padding: 10px;
				display: flex;
				flex-direction: column;
				border-radius: 10px;
				&__title{
					color: white;
					font-size: 2rem;
					font-weight: 500;
					margin-bottom: 10px;
				}
				&__descr{
					color: white;
					font-size: 14px;
					font-weight: 500;
					line-height: 1.8;
					text-align: justify;
				}
			}
</style>