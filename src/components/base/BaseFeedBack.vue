<template>
	<div class="feedback">
		<h4>Ajude-nos a melhorar</h4>
		<form >
			<input type="email" placeholder="Digite o seu e-mail">
			<textarea cols="10" rows="5" placeholder="Digite sua menssgem" />
			<button>Enviar</button>
		</form>
		<small>&copy;{{ currentDate() }} OneBit Inc.</small>
	</div>
</template>

<script>
	export default {
		name: "BaseFeedBack",
		data(){
			return{
				currentYear: null
			}
		},
		methods: {
			currentDate(){
				let data = new Date();
				return this.currentYear = data.getFullYear();
			}
		}
	}
</script>


<style scoped>

	small{
		color: var(--cinza);
		text-align: center !important;
		margin-top: 20px;
	}
	
	.feedback{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		margin-top: 20px;
	}

	.feedback h4{
		padding: 0 4px;
		margin-bottom: 10px;
		color: #444;
		border-left: 4px solid var(--verde);
		text-transform: uppercase;
	}
	.feedback form{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.feedback form input{
		border-radius: 3px;
		width: 100%;
		padding: 15px 10px;
		margin: 10px 0;
		font-size: medium;
		box-shadow: var(--sombra);
	}

	.feedback form textarea{
		border-radius: 3px;
		width: 100%;
		padding: 15px 10px;
		margin: 15px 0;
		font-size: medium;
		box-shadow: var(--sombra);
	}

	.feedback form button{
		width: 100%;
		background-color: var(--verde);
		padding: 10px;
		border: 1px solid var(--verde);
		font-weight: bold;
		font-size: medium;
		margin-top: 5px;
		color: #fff;
		border-radius: 3px;
		transition: .5s;
		cursor: pointer;
	}

	.feedback form button:hover{
		background-color: transparent;
		color: #555;
	}

</style>