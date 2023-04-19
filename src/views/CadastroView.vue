<template>
	<div class="main">

		<BaseForm />

	</div>
</template>

<script>

	import BaseForm from '../components/base/BaseForm.vue'

	export default {
		name: "_Cadastro",
		components: {
			BaseForm
		}
	}

</script>

<style scoped>
    
    .main{
        margin-top: 12vh;
        /*margin-bottom: 150px;*/
    }

    @media screen and (min-width: 576px) {
		.main{
			margin-top: 100px;
		}
    }
    @media screen and (min-width: 992px) {
		.main{
			margin-top: 120px;
		}
    }

    @media screen and (min-width:  2024px){
        .main{
            padding: 0 50px;
        }
    }

   

</style>