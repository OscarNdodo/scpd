<template>
			<div class="instituicoes">
			<h2>Procurar nas instituicoes de urgência e/ou acolhimento</h2>
			<div class="cards">
				
				<BaseCard :link="link"> 
					<template v-slot:logo>PP</template>
					<template v-slot:titulo>Policia</template>
					<template v-slot:descricao>
						Casos de desaparecimentos regitrados pelas autoridade policiais (PRM) em varios cantos do pais. <br> 
						Entre para ver a lista de desaparecidos na tua cidade.
					</template>
				</BaseCard>
				
				<BaseCard> 
					<template v-slot:logo>HH</template>
					<template v-slot:titulo>Hospital</template>
					<template v-slot:descricao>
						Casos de desaparecimentos regitrados pelas postos hopitalares em varios cantos do pais. <br> 
						Entre para ver a lista de desaparecidos na tua cidade.
					</template>
				</BaseCard>

				<BaseCard> 
					<template v-slot:logo>OO</template>
					<template v-slot:titulo>Outros</template>
					<template v-slot:descricao>
						Casos de desaparecimentos regitrados por instituicoes de acolhimento existentes em varios cantos do pais. <br> 
						Entre para ver a lista de desaparecidos na tua cidade.
					</template>
				</BaseCard>
				
			</div>
		</div>	

</template>


<script>
	
	import BaseCard from "./BaseCard.vue";

	export default{
		name: "BaseServices",
		components: {
			BaseCard,
		},
		data(){
			return{
				link: "/portal"
			}
		}
	}

</script>

<style scoped>
	.instituicoes{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: flex-start;
		padding: 30px 10px;
		margin: 50px 0;
		box-shadow: var(--sombra);
		border-radius: 0 50px 0 0 ;
	}

	.instituicoes h2{
		text-transform: uppercase;
		border-left: 4px solid var(--amarelo);
		padding-left: 5px;
		font-size: large;
		color: #333;
	}

	.instituicoes .cards{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 30px 0;
	}

	@media screen and (min-width: 576px) {
		
		.instituicoes{
			padding: 30px 40px;
			margin: 60px 0;
			border-radius: 10px 100px 10px 10px ;
		}

	}

	@media screen and (min-width: 992px) {

		.instituicoes{
			padding: 60px 50px;
			margin: 60px 0;
			border-left: 2px solid var(--amarelo);
		}


		.instituicoes h2{
			border-left: 5px solid var(--amarelo);
			padding-left: 15px;
		}

		.instituicoes .cards{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			margin: 20px 0;
		}
		
	}


</style>