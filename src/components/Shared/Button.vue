<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps(["button"])

const isDeclineActive = computed(() => {
	return props.button.active === false ? false : true
})

</script>

<template>
	<div>
		<button v-if="isDeclineActive" class="cookie--button" @click="props.button.handler"> {{props.button.text}} </button>
	</div>
</template>

<style lang="scss" scoped>
	.cookie--button{
			background-color: #121212;
			color: white;
			padding: 10px;
			border-radius: 5px;
			margin: 10px;
			border: none;
			cursor: pointer;
			font-size: 14px;
			font-weight: 500;
			&:hover {
				background-color: #424242;
			}
		}

		@media screen and (max-width: 800px) {
			.cookie--button{
				padding: 5px;
				font-size: 12px;
			}
		}

</style>