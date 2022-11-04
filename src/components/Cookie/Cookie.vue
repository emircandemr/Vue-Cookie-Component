<script setup>
	import {computed, reactive} from "vue";
	import CookieSettings from "./CookieSettings.vue";
	import ButtonComp from "../Shared/Button.vue";
	import {setCookie,getCookie} from "../../utils/CookieFunc.js";

	const props = defineProps(
		{
			cookieData: {
				type: Object,
				required: true,
			},
		}
		);

	const defaultDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
	const {title="Default Title"} = (props.cookieData);
	const {description=defaultDesc} = (props.cookieData);
	const {rejectActive} = (props.cookieData);
	const {cookieSettings=
		[{
				title : "Cookie Settings",
				description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
				isActive : false
		}]} = (props.cookieData);
	
	const {privacyPolicy } = (props.cookieData);


	const cookieActive = computed( () => {
		return getCookie("cookieShow") === "false" ? false : true;
	})

	const isActive = reactive({
		cookie: cookieActive.value,
		settings: false
	})

	const acceptHandler = () => {
		isActive.cookie = false
		setCookie("cookieShow",false,10) // 10 minute to clear cookie
	};

	const declineHandler = () => {
		isActive.cookie = false
		setCookie("cookieShow",true,10)
	};

	const settingsHandler = () => {
		isActive.settings = true
		isActive.cookie= false
	};

	const buttonData = {
		accept : {
			text: "Accept All Cookies",
			handler: acceptHandler
		},
		decline : {
			text: "Decline All Cookies",
			active: rejectActive,
			handler: declineHandler,
		},
		settings : {
			text: "Cookie Settings",
			handler: settingsHandler
		}
	}

</script>

<template>
	<div v-if="isActive.cookie" class="cookie">
		<div class="cookie--header">
			<h2>{{title}}</h2>
		</div>
		<div class="cookie--body">
			<p>{{description}}</p>
		</div>
		<div class="cookie--footer">
			<ButtonComp v-for="button in buttonData" :button="button" ></ButtonComp>
		</div>
	</div>
	<CookieSettings v-if="isActive.settings" :isShow="isActive" :cookieSettings="cookieSettings" :privacy="privacyPolicy" ></CookieSettings>
</template>

<style lang="scss" scoped>

.cookie{
	width: 800px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #212121;
	border: 2px solid #121212;
	border-radius: 20px;
	position: fixed;
	bottom: 20px;
	right: 50%;
	padding: 10px;
	transform: translateX(50%);
	transition: 0.8s ease-in-out;
	animation: cookie 0.8s ease-in-out;

	&--header{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		h2{
			color: white;
			font-size: 20px;
			font-weight: 500;
		}
	}

	&--body{
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		p{
			color: white;
			font-size: 14px;
			font-weight: 500;
		}
	}

	&--footer{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content : center;
		align-items: center;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	
	}
}

@media screen and (max-width: 800px){
	.cookie{
		width: 95%;
		height: 200px;

		&--header{
			h2{
				font-size: 16px;
			}
		}

		&--body{
			p{
				font-size: 12px;
			}
		}
	}
}

@keyframes cookie {
	0%{
		bottom: -200px;
	}
	100%{
		bottom: 20px;
	}
}

</style>