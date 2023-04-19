<template>
	
	<div class="content">
	
		<h1 class="titulo"> 
				Casos de
				<span>desaparecimentos </span>
				<span>em Moçambique</span>
		</h1>
	
		<div class="descricao">
			<p>
				Cerca de <strong>60 crianças</strong> são dadas como desaparecidas anualmente só na <strong>cidade de Maputo.</strong> Algumas dessas crianças, menores de idade, são acolhidos em orfanatos.
				<br>
				A <strong>nível mundial</strong>, a UNICEF estima que <strong>1.2 milhão</strong> de crianças desaparecem anualmente.
				<br/> 
				O <strong>desaparecidos.co.mz</strong> e uma ferramenta online que busca por pessoas desaparecidas, com a missão de ajudar a reunir familias e seus ente queridos que estam desaparecidos.

			</p>
	
			<BaseButtons />
		
		</div>
	</div>

</template>

<script>

	import BaseButtons from './BaseButtons.vue';

	export default {
		name: "BaseIntro",
		components: {
			BaseButtons,
		}
	}


</script>

<style scoped>
	
	.content{
		position: static;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 40px 10px;
		margin-top: 90px;
		margin-bottom: 50px;
		box-shadow: var(--sombra);
		border-radius: 10px  10px 10px 50px;
		background-color: #fff;
	}

	.content .titulo{
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
		padding-left: 5px;
		font-size: 26px;
		border-left: 4px solid var(--azul);
		color: #333;
	}

	.content .descricao{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.content .descricao p{
		color: #333;
		font-size: medium;
		line-height: 20px;
		margin-bottom: 25px;
	}

	@media screen and (min-width: 576px) {
		
		.content{
			padding: 30px 40px;
			margin-top: 100px;
			border-radius: 10px 10px 10px 100px;
		}
		.content .titulo{
			font-size: 32px;padding-left: 10px;
		}
		.content .descricao p{
			font-size: large;
			line-height: 22px;
		}

	}

	@media screen and (min-width: 992px) {

		.content{
			flex-direction: row;
			align-items: center;
			padding: 50px;
			margin-top: 130px;
			margin-bottom: 50px;
			border-right: 2px solid var(--azul);
		}

		.content .titulo{
			width: 40%;
			padding-left: 15px;
			font-size: 36px;
			border-left: 5px solid var(--azul);
		}

		.content .descricao{
			width: 60%;
		}

		.content .descricao p{
			line-height: 25px;
			font-size: 18px;
		}

	}


</style>


