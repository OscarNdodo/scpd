<template>
	<div class="card-image">
		<span class="id">{{ id }}</span>
		<img :src="imageDesa" :alt="imageNome">
		<h4>{{ imageNome }}</h4>
		<button @click="btnClicked($event)">Detalhes</button>
	</div>
</template>


<script>
	export default {
		name: "BaseCardImage",
		props: {
			id: String,
			imageDesa: {
				type: String,
				default: "/img/padrao.jpg"
			},
			imageNome: {
				type: String,
				default: "Imagem do desparecido"
			}
		},
		methods: {
			btnClicked(){
				// const id  = event.target.parentNode.children[0];
				this.$emit("openDetalhes");
			}
		}
	}
</script>

<style scoped>

	.id{
		color: transparent;
		font-size: 0px;
	}
	
	.card-image{
		width: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: var(--sombra);
		padding: 10px;
		margin: 10px 10px 30px 10px;
		border-radius: 3px;
	}

	.card-image img{
		position: relative;
		width: 300px;
		height: 330px;
		margin: 10px;
		border-radius: 3px;
		background-color: #aaa;
	}

	.card-image h4{
		position: relative;
		width: 300px;
		font-size: medium;
		margin-top: -60px;
		padding: 15px;
		text-align: center;
		color: #222;
		/*border-top: 2px solid #eee;*/
		background-color: #ffffff44;
	}

	.card-image button{
		position: relative;
		width: 300px;
		padding: 12px;
		margin-bottom: 10px;
		border-radius: 0 0 3px 3px;
		font-size: medium;
		border: 1px solid var(--amarelo);
		background-color: var(--amarelo);
		color: #111;
		font-weight: bold;
		transition: .5s;
		cursor: pointer;
	}

	.card-image button:hover{
		background-color: #fff;
		color: var(--/*amarelo*/);
	}

	@media screen and (min-width:  992px) {
		.card-image h4{
			font-size: large;
		}

		.card-image button{
			font-size: large;
		}
	}

</style>