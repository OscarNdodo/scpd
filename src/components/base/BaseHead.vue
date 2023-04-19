<template>

	<div class="nav-bar">
		<div class="desaparecidos">
			<router-link to="/">desaparecidos.co.mz</router-link>
		</div>
		<div v-if="showMenu">
			<BaseMenu />
		</div>
		<div class="icon-menu">
			<span :class="navIcon" @click="openMenu()"></span>
		</div>

	</div>

</template>




<script>

import BaseMenu from "./BaseMenu.vue"

	export default {
		name: "_BaseHead",
		components: {
			BaseMenu
		},
		data(){
			return{
				menu: false,
				navIcon: "fa fa-navicon",
				showMenu: false,
			}
		},
		mounted() {
			document.onreadystatechange = () => {
				if(document.readyState == "complete"){
					this.navBar = "nav-bar"
				}
			}
			// this.navBar = ""
		},
		methods: {
			openMenu(){
				if(this.navIcon === "fa fa-navicon"){
					this.navIcon = "fa fa-close";
					this.showMenu = true;
				}else{
					this.navIcon = "fa fa-navicon";
					this.showMenu = false;
				}
			}
		}
	}
</script>




<style scoped>
	
	.nav-bar{
		width: 100%;
		position: fixed;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #ffffff;
		padding: 10px 15px;
		box-shadow:var(--sombra);
		border-top: 2px solid var(--azul);
		z-index: 999;
	}

	.nav-bar .desaparecidos a{
		color: #333;
		font-size: medium;
	}
	.icon-menu .fa{
		font-size: medium;
		padding: 1px 5px;
		color: #333;
		cursor: pointer;
	}
	.icon-menu .fa-close{
			color: red;
		}

	@media screen and (min-width: 576px) {
		
		.nav-bar{
			padding: 15px 30px;
		}

		.desaparecidos a{
			color: #222222;
			font-size: large;
		}

		.icon-menu .fa{
			padding: 2px 5px;
			font-weight: 100;
		}

	}

	@media screen and (min-width: 576px) {
		
		.nav-bar{
			padding: 15px 50px;
		}

		.nav-bar .desaparecidos a{
			font-size: large;
		}

		.icon-menu .fa{
			padding: 2px 5px;
			font-size: large;
		}

	}

	@media screen and (min-width: 992px) {
		
		.nav-bar .desaparecidos a{
			font-size: large;
		}

		.icon-menu .fa{
			padding: 5px 10px;
			font-size: x-large;
		}

	}


</style>
