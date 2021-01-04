<template>
  <div class="con"> 
    <!-- <Dashboard /> -->
    <router-view class="rout"/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    //Dashboard
  }
}
</script>

  <style>

      .rout{
        /* border: 3px orange solid; */
      }
      .con{
      background-color: black;
      height: 100%;
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  </style>