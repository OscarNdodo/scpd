<template>
    <div>
      
        <BaseIntro />

        <BaseServices />

        <BaseFooter />

    </div>
</template>

<script>

    import BaseIntro from '../components/base/BaseIntro.vue';
    import BaseServices from '../components/base/BaseServices.vue';
    import BaseFooter from '../components/base/BaseFooter.vue';


    export default {
        name: 'HomeView',
        components: {
            BaseIntro,
            BaseServices,
            BaseFooter
        }

    }

</script>


<style scoped>

    @media screen and (min-width:  992px){
        div{
            padding: 0 50px;
        }
    }
    
</style>