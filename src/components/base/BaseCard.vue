<template>
	
	<div class="card policia">
		<span><slot name="logo"></slot></span>
		<h4><slot name="titulo"></slot></h4>
		<p>
			<slot name="descricao"></slot>
		</p>
		<button><router-link :to="link">Verificar</router-link></button>
	</div>

</template>

<script>
	
	export default {
		name: "BaseCard",
		data() {
			return{
				link: "/portal"
			}
		}
	}
</script>

<style scoped>
	.card{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 50px;
		box-shadow: var(--sombra);
		padding: 30px 20px;
		margin-top: 30px;
		border-radius: 5px;
		background-color: #fff;
	}

	.card span{
		font-size: medium;
		font-weight: bold;
		color: var(--amarelo);
		padding: 10px;
		border-radius: 4px;
		border: 1px solid #222;
	}

	.card h4{
		margin: 15px 0;
		font-weight: bold;
		font-size: 20px;
		color: #333;
	}

	.card p{
		font-size: medium;
		line-height: 20px;
		color: #444;
		text-align: center;
	}

	.card button{
		padding-top: 30px;
		/*padding-bottom: 5px;*/
		background-color: #fff;
	}

	.card button a{
		padding: 10px 80px;
		background-color: var(--amarelo);
		color: #222;
		border-radius: 4px;
		border: 1px solid var(--amarelo);
		font-size: 12px;
		text-transform: uppercase;
		transition: .5s;
	}

	.card button a:hover{
		background-color: transparent;
		color: #111;
	}

	@media screen and (min-width: 576px) {


		.card h4{
			margin: 20px 0;
		}

		.card p{
			font-size: 18px;
			line-height: 22px;
			margin: 0 10px;
		}

		.card button a{
			font-size: 14px;
		}

	}

	@media screen and (min-width: 992px) {

		.card{
			margin: 0 35px;
		}
		
	}

</style>