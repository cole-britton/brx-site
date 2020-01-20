
<script>
export default {
  name: 'home',
  data() {
    return {
      categories: [
        { label: 'VIDEO', id: 1 },
        { label: 'PROJECTS', id: 2 },
      ],
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
        {
          title: 'Dom & Grace',
          link: 'https://www.youtube.com/embed/uWuvXJKn4jg?controls=0',
        },
        {
          title: 'OAHU - 2018',
          link: 'https://www.youtube.com/embed/XQPee8foF9M?controls=0',
        },
        {
          title: 'The Getty',
          link: 'https://www.youtube.com/embed/fvIQTA0xVs4?controls=0',
        },
        {
          title: 'American Pomade',
          link: 'https://www.youtube.com/embed/IoH2gp9KHlM?controls=0',
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
      <button
      class="text-button"
      v-for="c in categories"
      v-on:click = "selectedCategory = c.id"
      :key="c.id">{{c.label}}</button>
    </div>
    <div v-if="selectedCategory === 1" class="videos-container">
      <div class="video-wrapper" v-for="v in videoData" v-bind:key="v.title">
        <iframe :src="v.link"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen></iframe>
      </div>
    </div>
    <div v-if="selectedCategory === 2" class="projects-container">
      <div>
        Bachelor No More
      </div>
      <div>
        New View
      </div>
    </div>
    <div class="footer-container">
      <div class="the-footer">
        <div class="footer-site-tag">
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
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
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
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 67px;
    margin-top: 20px;
    .video-wrapper {
      margin: 10px 5px;
    }
  }
  .projects-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 67px;
    margin-top: 20px;
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
        z-index: 1;
        font-size: 24px;
        a {
          margin: 0 5px;
        }
      }
      .footer-site-tag {
        z-index: 1;
      }
    }
    .trinket {
      position: absolute;
      bottom: -25px;
      left: 0;
      right: 0;
      z-index: 0;
      img {
        width: 200px;
      }
    }
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
}
@media only screen and (max-width: 900px) {
  .trinket {
    display: none;
  }
}
</style>
