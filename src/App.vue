<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./utilities/_variables.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
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
  font-family: Andale Mono, Source Sans Pro, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  font-size: 12px;
  min-width: 320px;
}

a {
  color: white;
  &:hover {
    color: wheat;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  body {
    background-color: $alt1;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  body {
    background-color: $alt2;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  body {
    background-color: $alt3;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  body {
    background-color: $alt4;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  body {
    background-color: $black;
  }
}
</style>
