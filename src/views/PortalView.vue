<template>
    <div class="main-others">
	<BaseContainerImage />
    <BaseFooter />
    </div>
</template>

<script>

    import BaseContainerImage from '../components/base/BaseContainerImage.vue';
    import BaseFooter from '../components/base/BaseFooter.vue';

    export default {
        name: 'PortalView',
        components: {
            BaseFooter,
            BaseContainerImage
        }

    }

</script>

<style scoped>
    
    .main-others{
        margin-top: 10vh;
    }

    @media screen and (min-width:  2024px){
        .main-others{
            padding: 0 50px;
        }
    }

   

</style>