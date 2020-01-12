
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
    <!-- <div class="video">
        <img alt="video" src="../assets/hawaii_brx_gif.gif" />
    </div> -->
    <div class="footer-container">
      <div class="the-footer">
        <div>
          <a href="http://www.brxttxn.com">Brxttxn</a>, Copyright &copy; 2020
        </div>
        <div class="footer-links">
          <a href="https://instagram.com/brxttxn">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="https://www.youtube.com/channel/UCRQVG-oyoYThHHjzLbpwcvQ">
            <font-awesome-icon :icon="['fab', 'youtube-square']" />
          </a>
        </div>
      </div>
      <div class="trinket">
        <img alt="palette" src="../assets/palette-trash.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  .img-container {
    max-width: 400px;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  button {
    font-size: 32px;
    background-color: transparent;
    color: white;
    &:hover {
      color: wheat;
      cursor: pointer;
    }
  }
  .footer-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;
    overflow: hidden;
    .the-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      .footer-links {
        font-size: 24px;
        a {
          margin: 0 5px;
        }
      }
    }
    .trinket {
    position: absolute;
    bottom: -25px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
      img {
        width: 200px;
      }
    }
  }
}
</style>
