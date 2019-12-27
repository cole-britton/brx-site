
<script>
export default {
  name: 'home',
  data() {
    return {
      categories: ['VIDEO', 'PROJECTS', 'TALK TO ME'],
    };
  },
};
</script>


<template>
  <div class="home">
    <div class="img-container">
      <img alt="My logo" src="../assets/brxttxn-trash-smaller-canvas.png" />
    </div>
    <div>
      <button v-for="c in categories" :key="c">{{c}}</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-container {
  max-width: 1400px;
  img {
    object-fit: cover;
    width: 100%;
  }
}
</style>
