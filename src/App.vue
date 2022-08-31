<template>
    <HeaderNav/>
    <router-view/>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
export default {
  name: 'App',
  components: {
  HeaderNav,
  } 
}
</script>

<style>
#app {
  font-family: Rajdhani, Arial, sans-serif;
  background-color: white;
  color: #0c0c0c;
  justify-content: center;
  margin-right: 5%;
  margin-left: 5%;
}

</style>
