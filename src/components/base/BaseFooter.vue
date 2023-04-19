<template>
		
		<div class="sobre">
			
			<BaseLinks />
			
			<BaseFeedBack />

		</div>

</template>


<script>

	import BaseLinks from './BaseLinks.vue';
	import BaseFeedBack from './BaseFeedBack.vue';

	export default {
		name: "BaseFooter",
		components: {
			BaseLinks,
			BaseFeedBack,
		}
	}
</script>


<style scoped>
	
	.sobre{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 30px 10px;
		margin-top: 50px;
		margin-bottom: 20px;
		border-radius: 50px 10px 50px 10px;
		box-shadow: var(--sombra);
	}

	

	

	@media screen and (min-width: 576px) {
		.sobre{
			flex-direction: row;
			align-items: flex-start;
			justify-content: center;
		}
		
	}

	@media screen and (min-width: 992px) {		
		.sobre{
			padding: 30px 50px;
			border-top: 2px solid var(--verde);
		}
	}

</style>