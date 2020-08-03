
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
          id: 10,
          title: 'Andrew & Jessica',
          year: '2020',
          link: 'https://www.youtube.com/embed/_Pt_b3EHTYU?controls=0',
        },
        {
          id: 1,
          title: 'Siclia',
          year: '2019',
          link: 'https://www.youtube.com/embed/MBLN7JN6l88?controls=0',
        },
        {
          id: 2,
          title: 'OAHU',
          year: '2019',
          link: 'https://www.youtube.com/embed/LC8sh12OrsQ?controls=0',
        },
        {
          id: 3,
          title: 'chelon',
          year: '2019',
          link: 'https://www.youtube.com/embed/xQ8lXugtNpY?controls=0',
        },
        {
          id: 4,
          title: 'Canon',
          year: '2018',
          link: 'https://www.youtube.com/embed/GvP_-LXQDUk?controls=0',
        },
        {
          id: 5,
          title: 'Dom & Grace',
          year: '2018',
          link: 'https://www.youtube.com/embed/uWuvXJKn4jg?controls=0',
        },
        {
          id: 6,
          title: 'OAHU',
          year: '2018',
          link: 'https://www.youtube.com/embed/XQPee8foF9M?controls=0',
        },
        {
          id: 7,
          title: 'The Getty',
          year: '2017',
          link: 'https://www.youtube.com/embed/fvIQTA0xVs4?controls=0',
        },
        {
          id: 8,
          title: 'American Pomade',
          year: '2017',
          link: 'https://www.youtube.com/embed/IoH2gp9KHlM?controls=0',
        },
      ],
      showComingSoon: false,
    };
  },
  methods: {
    goTo(page) {
      switch (page) {
        case 'nv':
          window.open('http://livenewview.com/', '_blank');
          break;
        case 'sp':
          window.open('https://open.spotify.com/user/ka0ii7l1uwig1da7cx19mtyop?si=Nb19sgSyS8-guR6d5aWW1g', '_blank');
          break;
        default:
          this.showComingSoon = true;
      }
    },
  },
};
</script>


<template>
  <div class="home">
    <div class="header">
      <div class="logo-container">
        <img alt="My logo" src="../assets/brxttxn-trash-smaller-canvas.png" />
      </div>
      <div class="text-button-container">
        <button
          class="text-button"
          v-for="c in categories"
          v-on:click="selectedCategory = c.id"
          :class="{ selected: selectedCategory === c.id }"
          :key="c.id"
        >{{c.label}}</button>
      </div>
    </div>
    <div class="main">
      <div v-if="selectedCategory === 1" class="videos-container">
        <div class="video-wrapper" v-for="v in videoData" :key="v.id">
          <iframe :src="v.link" frameborder="0" allow="autoplay; encrypted-media"></iframe>
          <div class="video-data">
            <p>{{v.title}}</p>
            <p>{{v.year}}</p>
          </div>
        </div>
      </div>
      <div v-if="selectedCategory === 2" class="projects-container">
        <div>
          <div class="img-container" @click="goTo('bnm')">
            <img alt="BNM" src="../assets/bnm_logo.png" />
            <div v-if="showComingSoon" class="cs">COMING SOON</div>
          </div>
          <p>Bachelor No More</p>
        </div>
        <div>
          <div class="img-container nv" @click="goTo('nv')">
            <img alt="NV" src="../assets/MASTER_logo.png" />
          </div>
          <p>New View</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="the-footer">
        <div class="footer-site-tag">
          <a href="http://www.brxttxn.com">Brxttxn</a>, Copyright &copy; 2020
        </div>
        <div class="footer-links">
          <a @click="goTo('sp')">
            <font-awesome-icon :icon="['fab', 'spotify']" />
          </a>
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
  position:absolute;
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
  .header {
    flex: 0;
    .logo-container {
      max-width: 400px;
      img {
        object-fit: cover;
        width: 100%;
      }
    }
    .img-container {
      max-width: 400px;
      img {
        object-fit: cover;
        width: 100%;
      }
    }
    .text-button-container {
      display: flex;
      padding: 0 20px 20px;
      button {
        display: block;
        background-color: transparent;
        color: white;
        border: 2px solid white;
        margin-right: 16px;
        &:hover {
          color: wheat;
          cursor: pointer;
          border: 2px solid wheat;
        }
        &.selected {
          color: wheat;
          border: 2px solid wheat;
          border-left: 10px solid wheat;
          pointer-events: none;
        }
      }
    }
  }

  .main {
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    .videos-container {
      display: flex;
      flex-wrap: wrap;

      margin-bottom: 67px;
      margin-top: 0;
      .video-wrapper {
        margin: 10px;
      }
      .video-data {
        display: flex;
        justify-content: space-between;
      }
    }
    .projects-container {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-bottom: 67px;
      margin-top: 20px;
      padding: 0 20px;
      .img-container {
        display: table-cell;
        height: 400px;
        vertical-align: middle;
        text-align: center;
        position: relative;
        max-width: 400px;
        img {
          object-fit: cover;
          width: 100%;
        }
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
        .cs {
          position: absolute;
          width: 100%;
          top: calc(50% - 7px);
          text-align: center;
        }
      }
    }
  }

  .footer {
    flex:0;
    width: 100%;
    color: $white;

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
          &:hover {
            cursor: pointer;
          }
        }
      }
      .footer-site-tag {
        z-index: 1;
      }
    }
    .trinket {
      position: absolute;
      bottom: -25px;
      text-align: center;
      left: 0;
      right: 0;
      z-index: 0;
      overflow: hidden;
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
    overflow: hidden;
  }
  .videos-container {
    justify-content: space-around;
  }
}

@media only screen and (min-width: 900px) {
  .videos-container {
    justify-content: flex-start;
    padding: 0 17px;
  }
}

@media only screen and (min-width: 1200px) {
  .img-container.nv {
    background-color: white;
    padding: 0 40px;
  }
}
</style>
