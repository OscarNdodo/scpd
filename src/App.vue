<template>

  <div>

    <BaseLoad v-if="!isLoading" />
    <BaseHead />
    <BaseFooter />

  </div>


  <router-view/>
</template>

<script>
  import BaseHead from './components/base/BaseHead.vue';
  import BaseLoad from './components/base/BaseLoad.vue'

  export default {
    name: "App",
    components: {
      BaseHead,
      BaseLoad
    },
    data(){
      return{
        isLoading: false
      }
    },
    mounted(){
      document.onreadystatechange = () =>{
        if(document.readyState == "complete"){
          this.isLoading = true;
        }
      }
    }
  }
</script>
