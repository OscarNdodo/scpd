<template>
	<div class="load">
		<div class="loading"></div>
	</div>
</template>

<style scoped>
	
	.load{
		position: fixed;
		top: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 99999;
		background-color: #eeeeee55;
	}

	.load .loading{
		padding: 20px;
		border-radius: 50%;
		/*border-top: 6px solid var(--amarelo);*/
		/*border-left: 5px solid var(--azul);*/
		/*border-right: 5px solid var(--cinza);*/
		border-bottom: 4px solid var(--verde);

		animation: animLoad .6s ease-in-out infinite ;
	}

	@keyframes animLoad {
		to{
			transform: rotate(360deg);
		}
	}

</style>