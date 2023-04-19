<template>
	<div>
		<ul class="menu">

			<li><form>
				<input type="search" name="" id="" placeholder="Pesquisar...">
				<span class="fa fa-search"> </span>
			</form></li>

			<li> <router-link to="/"><span>Inicio</span><span class="fa fa-home"></span></router-link></li>

			<li> <router-link to="/cadastro"><span>Cadastrar</span><span class="fa fa-edit"></span></router-link></li>

			<li> <router-link to="/portal"><span>Portal</span><span class="fa fa-users"></span></router-link></li>

			<li> <router-link to="/sobre"><span>Sobre</span><span class="fa fa-globe"></span></router-link></li>

		</ul>
	</div>
</template>

<script>
	export default{
		name:"_BaseMenu",
	}
</script>


<style scoped>

	.menu{
		width: 80%;
		height: 95vh;
		position: fixed;
		top: 5.5vh;
		left: 20%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 0 20px;
		background-color: #ffffff;
		opacity: 1;
		animation: animaMenu .8s ease-in-out;
		z-index: 999;
	}

	.menu li{
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15px 0;
	}	

	.menu li a{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 0;
		border-radius: 3px;
		transition: .5s;
	}

	.menu li a:hover{
		/*text-decoration: underline;*/
		background-color: #eee;
	}

	.menu li form{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid var(--azul);
		border-radius: 3px;
		background-color: var(--azul);
	}

	.menu li form input{
		width: 85%;
		font-size: medium;
		padding: 5px;
	}

	.menu li form .fa{
		width: 15%;
		font-size: medium;
		text-align: center;
		color: #fff;
	}

	.menu li a{
		font-size: medium;
		color:  #444;
		font-weight: bold;
	}

	.menu li a .fa{
		font-size: large;
		color: #888;
	}

	@keyframes animaMenu {
		from{
			opacity: 0;
			top: 95vh;
		}

		to{
			opacity: 1;
			top: 5vh;
		}
	}

	@media screen and (min-width: 576px) {
		
		.menu{
			width: 60%;
			top: 8vh;
			left: 40%;
			padding: 0 30px;
			border-left: 2px solid #eee;
			border-right: 2px solid #eee;
		}
		
		.menu li a{
			padding: 10px 10px;
		}
	}

	@media screen and (min-width: 992px) {
		.menu{
			width: 30%;
			top: 8vh;
			left: 70%;
			padding: 0 50px;
		}	

		.menu li a{
			font-size: large;
			padding: 10px 10px;
		}

		.menu li form input{
			font-size: 20px;
		}

		.menu li form .fa{
			font-size: large;
		}

		.menu li a .fa{
			font-size: 20px;
		}
		
	}
	
</style>