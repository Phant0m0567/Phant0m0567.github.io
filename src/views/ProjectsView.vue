<script setup lang="ts">
//
</script>
<template>
  <div class="container">
    <div class="project-grid">

      <div class="project-card">
        <div class="project-image-wrapper">
          <img src="/projects/global-unblocking.png" alt="global unblocking bot" class="project-image" />
          <div class="image-fade" />
        </div>
        <div class="project-info">
          <h2>Global Unblocking²</h2>
          <p>The BEST discord bot for cross-server chatting, comes with AutoMod :D</p>
          <div class="project-footer">
            <div class="project-icons">
              <icon-simple-icons-nodedotjs />
              <icon-simple-icons-javascript />
              <icon-simple-icons-discorddotjs />
            </div>
            <a href="https://discord.com/oauth2/authorize?client_id=1530760545752584252" target="_blank" rel="noopener noreferrer" class="visit-btn mono">
              <icon-lucide-external-link class="visit-icon" />
              visit
            </a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image-wrapper">
          <img src="/projects/bio.png" alt="Bio image" class="project-image" />
          <div class="image-fade" />
        </div>
        <div class="project-info">
          <h2>Phant0m0565.pages.dev</h2>
          <p>My portfolio, hosted on Cloudflare Pages. Forked from abovescore's portfolio and editted alot</p>
          <div class="project-footer">
            <div class="project-icons">
              <icon-simple-icons-nodedotjs />
              <icon-simple-icons-vuedotjs />
              <icon-simple-icons-vite />
              <icon-simple-icons-typescript />
            </div>
            <a href="https://phant0m0565.pages.dev/" target="_blank" rel="noopener noreferrer" class="visit-btn mono">
              <icon-lucide-external-link class="visit-icon" />
              visit
            </a>
          </div>
        </div>
      </div>
      <div class="project-card">
        <div class="project-image-wrapper">
          <img src="/projects/hoppy.png" alt="Hoppy image" class="project-image" />
          <div class="image-fade" />
        </div>
        <div class="project-info">
          <h2>Hoppy</h2>
          <p>A discord bot that automates generating FreeDNS and Bunny.net subdomains</p>
          <div class="project-footer">
            <div class="project-icons">
              <icon-simple-icons-python />
              <icon-simple-icons-discorddotjs />
              <icon-simple-icons-javascript />
              <icon-simple-icons-nodedotjs />
            </div>
            <a href="https://discord.com/oauth2/authorize?client_id=1559323303003553973" target="_blank" rel="noopener noreferrer" class="visit-btn mono">
              <icon-lucide-external-link class="visit-icon" />
              visit
            </a>
          </div>
        </div>
      </div>
      <div class="project-card">
        <div class="project-image-wrapper">
          <img src="/projects/aurelium.png" alt="Aurelium image" class="project-image" />
          <div class="image-fade" />
        </div>
        <div class="project-info">
          <h2>Aurelium</h2>
          <p>my UBG proxy site, has over 1.5k games, a proxy, a chatbot, and an unblocked youtube player. (still in development)</p>
          <div class="project-footer">
            <div class="project-icons">
              <icon-simple-icons-html5 />
              <icon-simple-icons-css3 />
              <icon-simple-icons-javascript />
              <icon-simple-icons-nodedotjs />
            </div>
            <a href="https://discord.gg/bMeRzKXT5r" target="_blank" rel="noopener noreferrer" class="visit-btn mono">
              <icon-lucide-external-link class="visit-icon" />
              visit
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 40px 0;
  color: #e0daf0;
}

.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.project-card {
  width: calc(50% - 6px);
  box-sizing: border-box;
  border: 1px solid rgb(150 114 255 / 0.15);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.project-card:hover {
  border-color: rgb(150 114 255 / 0.35);
}

.project-image-wrapper {
  position: relative;
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center;
  display: block;
}

.image-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  background: linear-gradient(transparent, #0c0b19);
  pointer-events: none;
}

.project-info {
  padding: 16px;
}

.project-info h2 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.project-info p {
  margin: 0 0 14px;
  font-size: 14px;
  line-height: 1.6;
  color: rgb(200 190 220 / 0.85);
}

.project-footer {
  display: flex;
  align-items: center;
  gap: 8px;
}

.project-footer .project-icons {
  margin-right: auto;
}

.project-icons {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: #9b6dff;
}

.custom-icon {
  width: 1.2em;
  height: 1.2em;
}

.visit-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 13px;
  color: #9b6dff;
  border: 1px solid rgb(150 114 255 / 0.25);
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
}

.visit-btn:hover {
  background: rgb(150 114 255 / 0.1);
  border-color: rgb(150 114 255 / 0.4);
}

.visit-icon {
  font-size: 14px;
}
</style>
