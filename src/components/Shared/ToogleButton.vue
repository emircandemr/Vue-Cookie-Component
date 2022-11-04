<script setup >
import { ref, toRefs } from 'vue';


	const props = defineProps(["cookieSetting"])

	const {isActive} = toRefs(props.cookieSetting)

	const input = ref(isActive.value)
	
	const toggleHandler = () => {
		isActive.value = !isActive.value
	}

</script>


<template>
      <div class="toggle">
        <div class="toggle--button" @click="toggleHandler()">
          <input :checked="!input" type="checkbox" class="toggle--checkbox">
          <div class="toggle--knobs">
            <span>YES</span>
          </div>
          <div class="toggle--layer"></div>
        </div>
      </div>
</template>

<style lang="scss" scoped>


.toggle{
 
	&--button{
		position: relative;
		top: 50%;
		width: 74px;
		height: 36px;
		overflow: hidden;
		background-color: #121212;
	}

	&--checkbox{
		position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;

		&:checked + .toggle--knobs{

			&>span{
				color: #4e4e4e;
			}
		}

		&:checked + .toggle--knobs::before{
			left: 42px;
    	background-color: #F44336;
		}

		&:checked + .toggle--knobs::after{
			color: #fff;
		}

		&:checked + .toggle--layer{
			background-color: #F44336;
		}

	}

	&--knobs{
		z-index: 2;

		&>span{
			display: inline-block;
			left: 4px;
			color: #fff;
			z-index: 1;
		}

		&::before , &::after, &>span{
			position: absolute;
			top: 4px;
			width: 20px;
			height: 10px;
			font-size: 10px;
			font-weight: bold;
			text-align: center;
			line-height: 1;
			padding: 9px 4px;
			border-radius: 2px;
			transition: 0.3s ease all;
		}
		&::before{
			content: '';
			left: 4px;
			// background-color: #03A9F4;
			background-color: #00DB99;
		}
		&::after{
			content: 'NO';
			right: 4px;
			color: #4e4e4e;
		}
	}
	&--layer{
		width: 100%;
    background-color: #ebf7fc;
    transition: 0.3s ease all;
    z-index: 1;
	}
}

@media screen and (max-width: 768px){
	.toggle{
		&--button{
			width: 60px;
			height: 30px;
		}
		&--knobs{
			&::before , &::after, &>span{
				width: 18px;
				height: 8px;
				font-size: 8px;
				padding: 7px 3px;
			}
			&::before{
				left: 3px;
			}
		}
		&--checkbox{
			&:checked + .toggle--knobs::before{
				left: 32px;
			}
		}

	}
}

</style>