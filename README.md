<div align="center">
<h1>Vue-Cookie-Component</h1>
</div>

<div align="center">
<h3> 🛠️ Built With</h3>
<img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"></img>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E"></img>
<img src="https://img.shields.io/badge/SASS-eeeeee?style=for-the-badge&logo=sass&logoColor=cf649a"></img>
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"></img>
</div>


<div align="center">
<h3>✨ Live Version </h3>

### [You can see the live version here.](https://vue-horse-racing-ed.vercel.app)
</div>

<div align="center">
<h2> 🖋️ About</h2>
<p>In this project, I created a cookie component using the vue3 composition api. I have given the relevant information about the use of components below.</p>
</div>

<div align="center" >
    <h2> 🎆 Project Screenshots </h2>
    <img src="https://user-images.githubusercontent.com/72731296/200065112-0cf3d1a8-ee97-4cf7-af32-c031ba4b5234.png"/>
    <img src="https://user-images.githubusercontent.com/72731296/200065210-0002c553-d99c-4d87-a2d6-ecc2a2897e30.png"	/>
    <img src="https://user-images.githubusercontent.com/72731296/200065495-c066b740-eb58-4715-b7a3-94bf31a069da.png"/>
 </div>

### 🛠 **Tech Stack**
 - [Vue3](https://vuejs.org)
 - [Vite](https://vitejs.dev/)
 - [SASS](https://sass-lang.com/guide)


## Usage

```bash
import { ref } from "vue";
import Cookie from "./components/Cookie/Cookie.vue";
```

```bash
const cookieData = ref({
		title: "Default Title",
		description: "Description Here ",
		rejectActive: true,
		privacyPolicy : "Privacy Policy Here"
		cookieSettings : [
			{
				title : "Cookie Settings",
				description : "Cookie Settings Description",
				isActive : false,
			},
		],
	});
```

```bash
<template>
	<div>
		<Cookie :cookieData="cookieData" ></Cookie>
	</div>
</template>
```

| Prop           | Type    | Default                                                                        |
| -------------- | ------- | ------------------------------------------------------------------------------ |
| title          | String  | 'Default Title '                                                               |
| description    | String  | 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'                     |
| rejectActive   | Boolean | true                                                                           |
| privacyPolicy  | String  | 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'                     |
| cookieSettings | Object  | title : "Default Title" , description = "Default Description" , isActive=false |


<div align="center">
<h2> Project Video </h2>

![bandicam-2022-10-17-14-12-08-137](https://user-images.githubusercontent.com/72731296/196166328-e9188556-16fa-498b-9a7a-bc9e8479983c.gif)
</div>

<div align="center">
<h3> ⭐ Support </h3>
<p> If you like the application, do not forget to give a star 😊 </p>
</div>

