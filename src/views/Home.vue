
<script>
export default {
  name: 'home',
  data() {
    return {
      categories: [
        { label: 'VIDEO', id: 1 },
        { label: 'PROJECTS', id: 2 },
        { label: 'MUSIC', id: 3 },
      ],
      selectedCategory: 1,
      videoData: [
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
      playlists: [
        '2EFQpqHJ8WIx3Y5ydzItYq',
        '7rz2d4a7fsZsTmuLYIPRC6',
        '3E3FmE6Nu06NVA2ZZZpB1j',
        '2wcKGdSFA2cYLF32s6dfjT',
        '5andCY8hDKZMRmTIdLXOLt',
        '5cOc0Yrz7deCtjJAbTvDzh',
        '1ku9o6HZoED8LsKUCPmbIG',
        '4r8WdrguOBazDVNFIy9MEa',
        '00InlwyS3pmL47qBb0Zl8d',
        '2gNpldsewDMGAwR5R2fpx8',
        '68PBivmc5Lvb5VGIAfbMqn',
        '6FfPBWgd0RMOHbrl5E29Q8',
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
        default:
          this.showComingSoon = true;
      }
    },
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
        v-on:click="selectedCategory = c.id"
        :class="{ selected: selectedCategory === c.id }"
        :key="c.id"
      >{{c.label}}</button>
    </div>
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
    <div v-if="selectedCategory === 3" class="music-container">
      <div v-for="p in playlists" :key="p" class="playlist-container">
        <iframe
          :src="`https://open.spotify.com/embed/playlist/${p}`"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
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
  .videos-container {
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    margin-bottom: 67px;
    margin-top: 20px;
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
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 67px;
    margin-top: 20px;
    padding: 0 20px;
    .img-container {
      display: table-cell;
      height: 400px;
      vertical-align: middle;
      text-align: center;
      position: relative;
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
  .music-container {
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 67px;
    margin-top: 20px;
    padding: 0 20px;
    .playlist-container {
      margin: 10px 20px;
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
      text-align: center;
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

@media only screen and (max-width: 450px) {
  .text-button-container {
    button {
      font-size: 20px;
      padding-right: 30px;
    }
  }
}

@media only screen and (min-width: 450px) {
  .text-button-container {
    button {
      font-size: 32px;
      padding-right: 50px;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .img-container.nv {
    background-color: white;
    padding: 0 40px;
  }
}
</style>
