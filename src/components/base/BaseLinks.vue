<template>
	
	<div class="links-uteis">			

				<ul class="parceiros">
					<h4>Perguntas frequentes</h4>
					<li><router-link to="#">O que e desaparecidos.co.mz?</router-link></li>
					<li><router-link to="#">Como posso funciona?</router-link></li>
					<li><router-link to="#">As buscas sao seguras e confiaveis?</router-link></li>
					<li><router-link to="#">Existe um aplicaivo no PlayStore?</router-link></li>
				</ul>

				<ul class="perguntas">
					<h4>Parceiros de cooperação</h4>
					<li><router-link to="#">Policia da Republica de Mocambique (PRM)</router-link></li>
					<li><router-link to="#">UNICEF - Mocambique</router-link></li>
					<li><router-link to="#">Universidade Rovuma - Nampula</router-link></li>
				</ul>

			</div>

</template>

<script>
	
	export default {
		name: "BaseLinks",
	}

</script>

<style scoped>
	
	.links-uteis{
		width:  100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.links-uteis ul{
		width: 100%;
		margin: 20px 0;
	}

	.links-uteis ul h4{
		border-left: 4px solid var(--verde);
		padding: 0 5px;
		color: #444;
		text-transform: uppercase;
	}

	.links-uteis ul li{
		padding: 10px;
	}

	.links-uteis ul li a{
		color: #555;
		transition: .5s;
		text-decoration: underline;
	}

	.links-uteis ul li a:hover{
		color: #111;
	}

	@media screen and (min-width: 576px) {
		
		
	}

</style>