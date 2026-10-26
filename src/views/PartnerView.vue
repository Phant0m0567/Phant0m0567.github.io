<script setup lang="ts">
  //
</script>

<template>
  <div class="container">
    <div class="box">
      <p class="box-title">my partners</p>
        <div class="box-content">
          <p class="subtitle">sites i've partnered with</p>
          <div class="partner-list">
            <a href="https://discord.gg/nowgg" target="_blank" rel="noopener noreferrer" class="partner-item">
              <img src="https://cdn.discordapp.com/icons/1268087040835321897/8f50d20f0c74079bc3e1d7af9a676c9d.webp?size=1280" class="partner-image" />
              <div class="partner-info">
                <span class="partner-label">Velara</span>
                <span class="partner-value">a really cool proxy</span>
              </div>
              <icon-lucide-external-link class="contact-arrow" />
            </a>
            <a href="https://discord.gg/EAmRAAcSVx" target="_blank" rel="noopener noreferrer" class="partner-item">
              <img src="https://iili.io/nkWZPkB.png" class="partner-image" />
              <div class="partner-info">
                <span class="partner-label">Re:Vault</span>
                <span class="partner-value">dont tell them but i've never used their site</span>
              </div>
              <icon-lucide-external-link class="contact-arrow" />
            </a>
            <a href="https://discord.gg/ahcroma" target="_blank" rel="noopener noreferrer" class="partner-item">
              <img src="https://cdn.discordapp.com/icons/1553524448483868752/a_d816051352b4ec330d586c5f6b72bc8f.webp?size=80" class="partner-image" />
              <div class="partner-info">
                <span class="partner-label">Achroma</span>
                <span class="partner-value">relatively large site</span>
              </div>
              <icon-lucide-external-link class="contact-arrow" />
            </a>
            <a href="https://discord.gg/NuscNmGE2J" target="_blank" rel="noopener noreferrer" class="partner-item">
              <img src="https://cdn.discordapp.com/icons/1489552565950480416/9beb850d7b73592ad4ec6e3ff2d90455.webp?size=80" class="partner-image" />
              <div class="partner-info">
                <span class="partner-label">Singularity</span>
                <span class="partner-value">they like fucking blockers</span>
              </div>
              <icon-lucide-external-link class="contact-arrow" />
            </a>
            <a href="https://discord.gg/rzbKef5aQK" target="_blank" rel="noopener noreferrer" class="partner-item">
              <img src="https://cdn.discordapp.com/icons/1491470389979648290/0ceea3ddabb08a35cdbe857de05bec60.webp?size=80" class="partner-image" />
              <div class="partner-info">
                <span class="partner-label">CatClass</span>
                <span class="partner-value">i like cats</span>
              </div>
              <icon-lucide-external-link class="contact-arrow" />
            </a>
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
.partner-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.partner-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border: 1px solid rgb(150 114 255 / 0.15);
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}

.partner-item:hover {
  border-color: rgb(150 114 255 / 0.35);
  background: rgb(150 114 255 / 0.06);
}


.partner-image {
  width: 60px;
  height: 60px;
  border-radius: 4px;
}

.partner-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.partner-label {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

.partner-value {
  font-size: 13px;
  color: rgb(200 190 220 / 0.7);
}


.box-content p.subtitle {
  margin: 0 0 16px;
  font-size: 14px;
  line-height: normal;
  color: rgb(200 190 220 / 0.7);
}

.box {
  border: 1px solid rgb(150 114 255 / 0.15);
  border-radius: 5px;
  overflow: hidden;
}

.box-title {
  margin: 0;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(150 114 255 / 0.7);
  border-bottom: 1px solid rgb(150 114 255 / 0.1);
}

.box-content {
  padding: 15px;
}

.box-content h1 {
  margin: 0 0 12px;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
}

.box-content h2 {
  font-size: 16px;
  font-weight: 600;
  color: rgb(150 114 255 / 0.8);
}

.box-content h2:first-child {
  margin-top: 0;
}

.box-content p {
  margin: 0;
  line-height: 1.7;
  font-size: 15px;
  color: rgb(200 190 220 / 0.85);
}

.box-content a {
  color: #9b6dff;
  text-decoration: none;
  transition: color 0.2s;
}

.box-content a:hover {
  color: #b99aff;
}

section {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
}

section:last-child {
  margin-bottom: 0;
}

section h2 {
  width: 100%;
  margin-bottom: 0;
}
</style>