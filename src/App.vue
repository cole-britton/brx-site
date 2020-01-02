<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(223, 223, 223);
}

html {
  background-color: black;
  height: 100%;
}

body {
    margin: 0px;
    min-height: 100%;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: Andale Mono, Source Sans Pro, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    font-size: 12px;
}

a {
  color: white;
  &:hover {
    color: wheat;
  }
}


</style>
