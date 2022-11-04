<script setup>
import { ref, toRefs } from 'vue';
import CookieSettingsItem from './CookieSettingsItem.vue';
import CookieModal from './CookieModal.vue';
import {setCookie} from "../../utils/CookieFunc.js";

const props = defineProps(['isShow',"cookieSettings","privacy"]);

const {cookie} = toRefs(props.isShow)
const {settings} = toRefs(props.isShow)

const selected = ref("Cookie Settings")

const selectData = ref([
	{
		id : 1 ,
		name : "Cookie Settings",
		isActive : true
	},
	{
		id : 2 ,
		name : "Privacy Policy",
		isActive : false,
		text : props.privacy
	},
	{
		id : 3 ,
		name : "Strictly Necessary Cookies",
		isActive : false,
	},
	{
		id : 4 ,
		name : "Performance Cookies",
		isActive : false
	},
	{
		id : 5 ,
		name : "Functional Cookies",
		isActive : false
	},
])

const selectHandler = () => {
	selectData.value.forEach((item) => {
		if (item.name === selected.value) return item.isActive = true
		item.isActive = false
	})
}

const closeHandler = () => {
	cookie.value = true;
	settings.value = false;
};

const saveHandler = () => {
	cookie.value = true;
	settings.value = false;
	setCookie("cookie","saveCookie",5)
};

</script>

<template>
	
	<div class="settings">
		<div class="settings--header">
			<div class="settings--header__title">
				<span class="material-symbols-outlined">
				tune
				</span>
					<select v-model="selected" @change="selectHandler()" class="settings--select" >
						<option v-for="select in selectData" :key="select.id" :value="select.name" >{{select.name}}</option>
					</select>
			</div>
			<div class="settins--header__icon" @click="closeHandler">
				<span class="material-symbols-outlined">
				close
			</span>
			</div>
		</div>
		<div class="settings--content">
			<template v-if="selected === 'Cookie Settings'" >
				<CookieSettingsItem v-for="item in cookieSettings" :cookieSetting="item" ></CookieSettingsItem>
			</template>
			<template v-else>
				<CookieModal v-for="item in selectData" :item="item" > </CookieModal>
			</template>
		</div>
		<div class="settings--footer">
			<button class="settings--footer--button" @click="saveHandler" >Confirm My Choices</button>
		</div>
	</div>

</template>


<style lang="scss" scoped>

	.settings{
		width: 40%;
		height: 60%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: #212121;
		border: 2px solid #121212;
		border-radius: 20px;
		padding: 10px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: 0.8s ease-in-out;

		&--header{
			width: 100%;
			height: 50px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 5px;
			border-top-left-radius: 20px;
			border-top-right-radius: 20px;

			&__title{
				display: flex;
				align-items: center;
				&>h2{
					color: white;
					font-size: 20px;
					font-weight: 500;
				}
			}
			.material-symbols-outlined{
				color: white;
				font-size: 28px;
				margin-right: 10px;
				cursor: pointer;
			}
		}

		&--select{
			width: 200px;
			height: 40px;
			border: none;
			border-radius: 10px;
			background-color: #121212;
			color: white;
			font-size: 16px;
			font-weight: 500;
			padding: 0 10px;
			outline: none;
			cursor: pointer;
 		}

		&--content{
			width: 100%;
			height: 90%;
			display: flex;
			flex-direction: column;
			color: white;
		}

		&--footer{
			width: 100%;
			height: 50px;
			display: flex;
			justify-content : center;
			align-items: center;
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 20px;
			&--button{
				background-color: #121212;
				border: 2px solid #121212;
				border-radius: 10px;
				color: white;
				font-size: 14px;
				font-weight: 500;
				padding: 10px 20px;
				cursor: pointer;
				&:hover{
					background-color: #212121;
					border: 2px solid #121212;
					color: white;
				}
			}
		}
	}
	@media screen and (max-width: 950px){
		.settings{
			width: 60%;
			height: 60%;
		}
	}
	@media screen and (max-width: 768px){
		.settings{
			width: 80%;
			height: 60%;
			&--header{
				&__title{
					&>h2{
						font-size: 16px;
					}
				}
			}
			&--select{
				width: 150px;
				height: 30px;
				font-size: 14px;
			}
			&--footer{
				&--button{
					font-size: 12px;
					padding: 5px 10px;
				}
			}
		}
	}
	@media screen and (max-width: 480px){
		.settings{
			width: 90%;
			height: 70%;
			&--header{
				&__title{
					&>h2{
						font-size: 14px;
					}
				}
			}
			&--select{
				width: 150px;
				height: 40px;
				font-size: 12px;
			}
			&--footer{
				&--button{
					font-size: 12px;
					padding: 10px 10px;
				}
			}
		}
	}

</style>