<template>
	<div class="container-image">

		<div class="detalhes-image" v-if="showDetalhes">

			<h4>Dados do desaparecido</h4>
			<p>Nome: <span>Geronimo Chaves</span></p>
			<p>Idade: <span>42 anos</span></p>
			<p>Natural: <span>Nampula</span></p>
			<h4>Contactos do responsavel</h4>
			<div class="contactos">
				<p>Nome: <span>Chaves McMarph</span></p>
			<p>Endereco: <span>Nampula, Namicopo</span></p>
				<p>Contacto 1: <span>+258844444467</span></p>
				<p>Contacto 2: <span>+25884444474</span></p>
				<p>Contacto 3: <span>+258844444490</span></p>
			</div>
			<button @click="closeDetalhes()">Fechar</button>
	
		</div>
		
		<div class="image-desaparecidos">
			<h2>Pessoas desaparecidas</h2>
			<div class="images" >	
				<BaseCardImage v-for="person in desaparecidos" :key="person.id" :id="person.id" :imageDesa="person.imageDesa" :imageNome="person.imageNome" @openDetalhes="detalhes()" />
			</div>
		</div>

		<div class="image-encontrados">
			<h2>Pessoas encontrdas</h2>
			<div class="images">
				<BaseCardImage v-for="person in encontrados" :key="person.id" :imageDesa="person.imageDesa" :imageNome="person.imageNome" @openDetalhes="detalhes()" />
			</div>
		
		</div>
	</div>
</template>

<script>
	import BaseCardImage from './BaseCardImage.vue';

	export default {
		name: "BaseContainerImage",
		components: {
			BaseCardImage
		},
		data(){
			return{
				showDetalhes: false,
				desaparecidos: [
					{
						id: 1,
						imageDesa: "/img/me.jpg",
						imageNome: "Geronimo Chaves",
						status: "desaparecido"
					},
					{
						id: 4,
						imageDesa: "/img/padrao.jpg",
						imageNome: "Geronimo Chaves",
						status: "desaparecido"
					},
					{
						id: 5,
						imageDesa: "/img/01.jpg",
						imageNome: "Ellena Chaves",
						status: "desaparecido"
					}
				],
				encontrados: [
					{
						id: 2,
						imageDesa: "/img/01.jpg",
						imageNome: "Ellena Chaves",
						status: "encontrado"
					},
					{
						id: 3,
						imageDesa: "/img/padrao.jpg",
						imageNome: "Geronimo Chaves",
						status: "encontrado"
					},
				]
			}
		},
		methods: {
			detalhes(){
				console.log()
				this.showDetalhes = true;
			},
			closeDetalhes(){
				this.showDetalhes = false;
			}
		}
	}
</script>

<style scoped>

	.container-image{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: var(--sombra);
		border-radius: 50px 0 50px 0;
		padding: 20px;
	}

	.container-image .image-encontrados .images{
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;

	}

	.container-image .image-desaparecidos .images{
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.container-image .image-desaparecidos h2{
       color: #333;
       font-size: medium;
       text-transform: uppercase;
       border-left: 4px solid var(--amarelo);
       padding-left: 10px;
       margin:  15px 25px;
    }
    .container-image .image-encontrados h2{
       color: #333;
       font-size: medium;
       text-transform: uppercase;
       border-left: 4px solid var(--azul);
       padding-left: 10px;
       margin:  15px 25px;
    }

   .detalhes-image{
		position: fixed;
		top: 20vh;
		max-width: 600px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		box-shadow: var(--sombra);
		background-color: #ffffffbb;
		padding: 20px;
		border-radius: 3px;
		z-index: 9999;
    }

   .detalhes-image h4{
		color: #222;
		text-transform: uppercase;
		padding: 15px 0;
    }

   .detalhes-image p{
		color: #444;
		padding: 3px 0;
    }

   .detalhes-image p span{
		color: var(--amarelo);
		color: #222;
		font-weight: bold;
		padding: 0 10px;
		text-decoration: underline;
    }

   .detalhes-image button{
		width: 100%;
		padding: 10px 20px;
		background-color: #ee4444 ;
		font-size: medium;
		color: #eee;
		font-weight: bold;
		margin: 10px 0;
		cursor: pointer;
    }

	
	@media screen and (min-width: 992px) {		
		.container-image{
			border-radius: 100px 0 100px 0;
			margin: 140px 0 80px 0;
		}

		.container-image .image-desaparecidos h2,
		.container-image .image-encontrados h2{
			font-size: 22px;
		}
	}


</style>