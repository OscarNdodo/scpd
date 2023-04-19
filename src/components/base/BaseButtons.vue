<template>
	
	<div class="btn">
		<button><router-link to="/portal">Quero procurar alguém </router-link></button>
		<button><router-link to="/cadastro" class="cadastro">Quero cadastrar alguém </router-link></button>
	</div>

</template>

<script>
	export default {
		name: "BaseButtons",
	}
</script>

<style>
	
	.btn{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.btn button{
		width: 100%;
		display: flex;
		text-align: center;
		justify-content: center;
		background-color: #fff;
	}

	.btn button a{
		width: 100%;
		padding: 10px 0;
		border-radius: 3px;
		font-size: medium;
		margin-bottom: 20px;
		border: 1px solid var(--azul);
		color: #fff;
		background-color: var(--azul);
		cursor: pointer;
		transition: .5s;
	}

	.btn button a:hover{
		box-shadow: 0 0 8px var(--azul);
	}

	.btn button .cadastro{
		background-color: #fff;
		color: var(--azul);
	}

	@media screen and (min-width: 576px) {
		.btn{
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
		}

		.btn button a{
			width: 90%;
			font-size: large;
		}
	}

	
</style>