
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
};
</script>


<template>
  <div class="home">
    <div class="img-container">
      <img alt="My logo" src='../assets/brxttxn-trash.png' />
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .img-container {
    max-width: 400px;
    background-color: black;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
</style>
