new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Em là Nhất",
          artist: "Vịt Cute",
          cover: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/298451884_780441443097811_1371363543671383579_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=T55PiZ23f5QAX_4K44H&_nc_ht=scontent.fhan2-5.fna&oh=00_AfD_ZNJy9zXvyrwn8VSFmuO9ePNXuwPTyasGJFT0VvTDfQ&oe=63702CC6",
          source: "mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=J3RhbVkVdbU",
          favorited: false
        },
        {
          name: "Lạc Vào Trong Mơ",
          artist: "Hoàng Quỳnh Duyên",
          cover: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/309619376_820436142431674_5994492611506892358_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=CA0ZfQ2eXoYAX9Aiq6r&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDfcQ5mdQ_6vaNJ-AAPZziav3H0PeFC1WGrxsIk3x_c4A&oe=63703A69",
          source: "mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=38HBleFX03w",
          favorited: true
        },
        {
          name: "Precious",
          artist: "Vịt Cute",
          cover: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/279458391_714217559720200_6201703655697209364_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Dddu9MuGHr4AX-_oaUw&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBUUXX6liN-xa93ocybLBEXIM1tG0wA-8coDiKix9o4zg&oe=6370233E",
          source: "mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=0KVJZQxVsIw",
          favorited: false
        },
        {
          name: "Gu",
          artist: "Hoàng Quỳnh Duyên",
          cover: "https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/277536627_693086531833303_6194651882369950367_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RMHmyiVzEKYAX8ZLCDE&_nc_oc=AQmSapb3LMHPur2WyemWMbE-t7zna1-RwfftP2ttEFYzdfSMayr-36WcO_l40qUqIa0&_nc_ht=scontent.fhan2-1.fna&oh=00_AfC29fPvD7U79yIdJ7VncVNtgGiDHsaDRsKN5Iz8MPF3Qg&oe=636FCD8C",
          source: "mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=VI47bTJaMe4",
          favorited: false
        },
        {
          name: "See Tình",
          artist: "Vịt Cute",
          cover: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/312830625_832728901202398_7930638892964703309_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9gjP0mexQnMAX_XegVH&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDkAfXVuiK3wl5i-B37oo4WH72t5WoWAU92g2w17rUzzw&oe=636FF37E",
          source: "mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=tVTRY6851Ug",
          favorited: true
        },
        {
          name: "Giấc Mơ Rất Thơ",
          artist: "Hoàng Quỳnh Duyên",
          cover: "https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/311569931_826463808495574_2424269960673908212_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fdO9SEdnKrsAX8j5eGD&_nc_ht=scontent.fhan2-1.fna&oh=00_AfCq1qXHzhdcCmzaRC-dsuVGpq-__yYY_vq0Y5HJ4G1Q-w&oe=6370B4A5",
          source: "mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=zsNuaZ5eHAU",
          favorited: false
        },
        {
          name: "Thiên Thần Tình Yêu",
          artist: "Vịt Cute",
          cover: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/311909110_824680168673938_3468773038033817974_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=APX_zuMdhrcAX-yrKNW&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAPtfF-sV0kTK3OWboKHttsAt-zu9U-uW9OkbENqr12eA&oe=63704E51",
          source: "mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=9kBSWiWbkY4",
          favorited: true
        },
        {
          name: "Lời Có Cánh",
          artist: "Hoàng Quỳnh Duyên",
          cover: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/296456392_774484697026819_6883349422170973175_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Q4uSa50ab5MAX-3HUcW&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAE_Vw9BkZOVxKwzjOVlgYbhS6vNYcWKmDOwu3V1sxV7g&oe=637175C4",
          source: "mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=V3OCo4fM-ps",
          favorited: false
        },
        {
          name: "23 Con Mực",
          artist: "Vịt Cute",
          cover: "https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/277751953_698447204630569_1941010923008315843_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eSXBtqxVayIAX-N1syN&_nc_ht=scontent.fhan2-1.fna&oh=00_AfAFCaXmuvgwGiS4OCfs3TpPqcWefWDPAAWuRjcV-pxGQQ&oe=6370D08D",
          source: "mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=_yFGJ6qIKnE",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
