<template>
	
	<form @submit.prevent="enviarDados($event)">
			
			<div class="dadosDesa" v-show="primeiroPasso" >		

				<h2>Dados do desaparecido</h2>

				<label for="imageDesa">Foto</label>
				<input type="file" name="imageDesa" @change="onChangeFile" >
				<label for="nomeDesa">Nome</label>
				<input type="text" name="nomeDesa" v-model.trim="dados.nomeDesa" placeholder="Digite o nome completo">
				<label for="idadeDesa">Idade *</label>
				<select name="idadeDesa" v-model="dados.idadeDesa" required>
					<option value="">Selecione a idade</option>
					<option value="bebe">Bebe</option>
					<option value="crianca">Crianca</option>
					<option value="adolescente">Adolescente</option>
					<option value="jovem">Jovem</option>
					<option value="adulto">Adulto</option>
					<option value="idoso">Idoso</option>
				</select>
				<label for="generoDesa">Genero *</label>
				<select name="generoDesa" v-model="dados.generoDesa" required>
					<option value="">Selecione o genero</option>
					<option value="masculino">Masculino</option>
					<option value="femenino">Femenino</option>
				</select>
				<label for="naturalDesa">Naturalidade</label>
				<select name="naturalDesa" v-model="dados.naturalDesa">
					<option value="">Selecione a provincia</option>
					<option value="niassa">Niassa</option>
					<option value="cabo-delgado">Cabo Delgado</option>
					<option value="nampula">Nampula</option>
					<option value="zambezia">Zambezia</option>
					<option value="sofala">Sofala</option>
					<option value="manica">Manica</option>
					<option value="tete">Tete</option>
					<option value="inhambane">Inhambane</option>
					<option value="gaza">Gaza</option>
					<option value="maputo">Maputo</option>
				</select>
				<label for="statusDesa">Situacao *</label>
				<select name="statusDesa" v-model="dados.statusDesa" required>
					<option value="">Selecione o situacao</option>
					<option value="desaparecido">Esta desaparecido/a</option>
					<option value="encontrado">Foi encontrado/a</option>
				</select>
				<button @click="seguinte()">Seguinte</button>

			</div>

			<div class="dadosRes" v-show="passoSeguinte">		

				<h2>Dados do responsavel</h2>
				<button class="anterior" @click="voltar()">Anterior</button>
				<label for="nomeRes">Nome *</label>
				<input type="text" name="nomeRes" v-model.trim="dados.nomeRes" required placeholder="Digite o nome completo">
				<label for="localRes">Localizacao *</label>
				<select v-model="dados.localRes" required>
					<option value="">Selecione a provincia</option>
					<option value="niassa">Niassa</option>
					<option value="cabo-delgado">Cabo Delgado</option>
					<option value="nampula">Nampula</option>
					<option value="zambezia">Zambezia</option>
					<option value="sofala">Sofala</option>
					<option value="manica">Manica</option>
					<option value="tete">Tete</option>
					<option value="inhambane">Inhambane</option>
					<option value="gaza">Gaza</option>
					<option value="maputo">Maputo</option>
				</select>
				<label for="enderecoRes">Endereco *</label>
				<input type="text" v-model.trim="dados.enderecoRes" required placeholder="Distrito, bairro, UC">
				<label for="contacto1">Contacto 1 *</label> 
				<input type="number" name="contacto1" v-model.number="dados.contacto1" required placeholder="Digite o seu numero de telefone" >
				<label for="contacto2">Contacto 2 *</label>
				<input type="number" name="contacto2" v-model.number="dados.contacto2" required placeholder="Numero de telefone alternativo" >
				<label for="contacto3">Contacto 3</label>
				<input type="number" name="contacto3" v-model.number="dados.contacto3" placeholder="Numero de telefone alternativo">
				<button type="submit">Concluido</button>

			</div>


		</form>

</template>

<script>
	export default{
		name: "BaseForm",
		data(){
			return{
				primeiroPasso: true,
				passoSeguinte: false, 
				dados: {
					imageDesa: "",
					nomeDesa: "",
					idadeDesa: "",
					generoDesa: "",
					naturalDesa: "",
					statusDesa: "",

					nomeRes: "",
					localRes: "",
					enderecoRes: "",
					contacto1: "",
					contacto2: "",
					contacto3: ""
				}
			}
		},
		methods: {
			seguinte(){
				if(this.dados.idadeDesa != "" && this.dados.generoDesa != "" && this.dados.statusDesa != ""){
					this.passoSeguinte = true;
					this.primeiroPasso = false;
				}
			},
			voltar(){
				this.passoSeguinte = false;
				this.primeiroPasso = true;
			},
			onChangeFile(event){
				this.dados.imageDesa = event.target.files[0];
			},
			enviarDados(){
				// event.preventDefault();
				console.log(this.tratamentoDados(this.dados));
				console.log(this.dados);
			},
			tratamentoDados(dado){
				let elemento = "";
				for(elemento in dado){
					if(elemento.value === ""){
						return "Campo vazio!";
					}else if(elemento.length < 5){
						return "O campo ter no minimo 5 letras!";
					}else{
						return "Sucesso";
						// return dadosTratados;
					}
				}
			},
		}
	}
</script>

<style scoped>
	form{
		position: absolute;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
		box-shadow: var(--sombra);
		border-radius: 0 50px 0 50px;
	}

	form .dadosDesa{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		margin: 10px 4px;
		transition: .5s;
		animation: fadeOut .4s ease-in-out;
	}

	form .dadosRes{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		margin: 10px 4px;
		transition: .5s;
		animation: fadeIn .6s ease-in-out;
	}


	form  h2{
		margin: 5px 0;
		padding-left: 5px;
		color: #444;
		font-size: large;
		text-transform: uppercase;
		border-left: 4px solid var(--verde);
	}

	form label{
		width: 100%;
		position: relative;
		color: #333;
		font-size: medium;
		margin: 10px 10px 0 10px;
	}

	form input{
		text-transform: capitalize;
	}

	form input, select{
		width: 95%;
		margin-left: 2.5%;
		margin: 0 10px 10px 10px;
		font-size: small;
		font-weight: bold;
		transition: .5s;
		background-color: #fff;
	}

	form input:placeholder, select:placeholder{
		background-color: #fff;
	}

	form input:focus, select:focus{
		width: 100%;
		padding: 10px 0 1px 0;
		font-size: 16px;
		color: #222;
	}

	form input:focus{
		border-bottom: 2px solid var(--verde);
	}

	form button{
		width: 95%;
		margin-left: 2.5%;
		padding: 10px;
		margin-top: 10px;
		color: #fff;
		font-size: medium;
		font-weight: bold;
		border: 1px solid var(--verde);
		background-color: var(--verde);
		transition: .5s;
	}

	form button:hover{
		background-color: transparent;
		color: var(--verde);
	}

	@keyframes fadeOut {
		to{
			transform: scale(.8);
		}
	}
	
	@keyframes fadeIn {
		0%{
			transform: scale(0);
		}

		80%{
			transform: scale(1.2);
		}
		100%{
			transform: scale(1.0);
		}
	}

	@media screen and (min-width: 576px) {
		form{
			width: 80%;
			left: 10%;
			padding: 50px;
			margin: 0 2.5%;
		}

		form h2{
			font-size: x-large;
		}

		form label{
			font-size: 20px;
			margin: 15px 15px 0 15px;
		}

		form input, select{
			margin: 0 15px 15px 15px;
			font-size: small;
		}

		form input:focus, select:focus{
			padding: 15px 0 2px 0;
			font-size: 18px;
		}
	}

	@media screen and (min-width: 992px) {		
		form{
			width: 55%;
			left: 20%;
			margin: 0 2.5%;
			border-radius: 0 100px 0 100px;
		}
	}

</style>