
<script>
export default {
  name: 'home',
  data() {
    return {
      categories: ['VIDEO', 'PROJECTS'],
      selectedCategory: 1,
      videoData: [
        {
          title: 'Canon',
          link: 'https://www.youtube.com/embed/GvP_-LXQDUk?controls=0',
        },
        {
          title: 'Siclia',
          link: 'https://www.youtube.com/embed/MBLN7JN6l88?controls=0',
        },
        {
          title: 'OAHU - 2019',
          link: 'https://www.youtube.com/embed/LC8sh12OrsQ?controls=0',
        },
        {
          title: 'chelon',
          link: 'https://www.youtube.com/embed/xQ8lXugtNpY?controls=0',
        },
      ],
    };
  },
};
</script>


<template>
  <div class="home">
    <div class="img-container">
      <img alt="My logo" src="../assets/brxttxn-trash-smaller-canvas.png" />
    </div>
    <div class="text-button-container">
      <button class="text-button" v-for="c in categories" :key="c">{{c}}</button>
    </div>
    <div class="videos-container">
      <div class="videoWrapper" v-for="v in videoData" v-bind:key="v.title">
        <iframe
          :src=v.link
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </div>
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
@import "../utilities/_variables.scss";
.home {
  .img-container {
    max-width: 400px;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .text-button-container {
    display: flex;
    padding: 0 22px;
    button {
      padding-right: 50px;
      display: block;
      font-size: 32px;
      background-color: transparent;
      color: white;
      border: 2px solid white;
      margin-right: 16px;
      &:hover {
        color: blue;
        cursor: pointer;
        border: 2px solid blue;
      }
    }
  }
  .videos-container {
    padding: 40px 0;
    display: flex;
    justify-content: space-around;
  }
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .footer-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: $white;
    overflow: hidden;

    min-width: 320px;
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
@media only screen and (max-width: 900px) {
  .trinket {
    display: none;
  }
}
</style>
