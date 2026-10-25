<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import dayjs from "dayjs";

const startDate = dayjs("2011-7-21");
const yearsSince = ref("0.000000000");

function updateDate() {
  const now = dayjs();
  yearsSince.value = now.diff(startDate, "year", true).toFixed(9);
}
let interval: any;

onMounted(() => {
  updateDate();
  interval = setInterval(updateDate, 50);
});

onUnmounted(() => {
  clearInterval(interval);
});

const embedCode = `<a href="https://phant0m0567.github.io/" target="_blank"><img src="https://phant0m0567.github.io/88x31.gif" alt="phant0m0567.github.io" /></a>`
const copied = ref(false)

function copyCode() {
  navigator.clipboard.writeText(embedCode)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1000)
}
</script>

<template>
  <div class="container">
    <div class="box">
      <p class="box-title">about me</p>
      <div class="box-content">
        <h1>hi, i'm Phant0m</h1>
        <p>
          I'm a <span class="mono age">{{ yearsSince }}</span> y/o frontend developer
          from the United States.<br />
          I primarily work in the UBG community, and I'm decently known.<br />
          I use MacOS Tahoe as my primary operating system, my favorite language is CSS, aswell as HTML and JS.<br />
          I own 2 proxies, and I own Global Unblocking², I also work as a developer for some other proxies too.<br>
          You can find some of my projects
          <RouterLink to="/projects">here.</RouterLink><br />
        </p>
      </div>
    </div>
    <div class="box">
      <p class="box-title">my button</p>
      <div class="box-content">
        <p class="subtitle">put this on your site please</p>
        <div class="button-row">
        <img src="/88x31.gif" alt="phant0m0567.github.io" class="web-badge button-preview" />
        <div class="btn-code">
          <code class="mono"><span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-str">"https://phant0m0567.github.io/"</span> <span class="hl-attr">target</span>=<span class="hl-str">"_blank"</span><span class="hl-tag">&gt;</span><span class="hl-tag">&lt;img</span> <span class="hl-attr">src</span>=<span class="hl-str">"https://phant0m0567.github.io/88x31.gif"</span> <span class="hl-attr">alt</span>=<span class="hl-str">"phant0m0567.github.io"</span> <span class="hl-tag">/&gt;</span><span class="hl-tag">&lt;/a&gt;</span></code>
          <button class="copy" @click="copyCode">
            <icon-lucide-check v-if="copied" />
            <icon-lucide-copy v-else />
          </button>
        </div>
        </div>
      </div>
    </div>

    <div class="box">
      <p class="box-title">my preferences</p>
      <div class="box-content">
        <section>
          <h2>IDE</h2>
          <div class="tool-pill">
            <icon-simple-icons-visualstudiocode class="tool-icon" />
            <p>VS Code</p>
          </div>
        </section>

        <section>
          <h2>Languages</h2>
          <div class="tool-pill">
            <icon-simple-icons-html5 class="tool-icon" />
            <p>HTML</p>
          </div>
          <div class="tool-pill">
            <icon-simple-icons-javascript class="tool-icon" />
            <p>JavaScript</p>
          </div>
          <div class="tool-pill">
            <icon-simple-icons-css3 class="tool-icon" />
            <p>CSS</p>
          </div>
          <div class="tool-pill">
            <icon-simple-icons-react class="tool-icon" />
            <p>React</p>
          </div>
          <div class="tool-pill">
            <icon-simple-icons-tailwindcss class="tool-icon" />
            <p>Tailwind</p>
          </div>
        </section>

        <section>
          <h2>Operating Systems</h2>
          <div class="tool-pill">
            <icon-simple-icons-apple class="tool-icon" />
            <p>MacOS Tahoe</p>
          </div>
          <div class="tool-pill">
            <icon-simple-icons-windows class="tool-icon" />
            <p>Windows 11</p>
          </div>
        </section>

        <section>
          <h2>Runtimes</h2>
          <div class="tool-pill">
            <icon-simple-icons-nodedotjs class="tool-icon" />
            <p>NodeJS</p>
          </div>
          <div class="tool-pill">
            <icon-simple-icons-dotnet class="tool-icon" />
            <p>.NET</p>
          </div>
          <div class="tool-pill">
            <icon-simple-icons-docker class="tool-icon" />
            <p>Docker</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px 0;
  color: #e0daf0;
}

.web-badge {
  display: block;
  width: 88px;
  height: 31px;
  image-rendering: pixelated;
}



.hl-tag {
  color: #e06c75;
}

.hl-attr {
  color: #d19a66;
}

.hl-str {
  color: #98c379;
}

.button-row {
  display: flex;
  align-items: center;
  gap: 12px;
}


.button-preview {
  flex-shrink: 0;
}

.btn-code {
  flex: 1;
  min-width: 0;
  position: relative;
  padding: 10px 40px 10px 14px;
  border: 1px solid rgb(150 114 255 / 0.15);
  border-radius: 6px;
  background: rgb(150 114 255 / 0.04);
  overflow: hidden;
}

.btn-code code {
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
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

.copy {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  outline: none;
  border-radius: 5px;
  background: transparent;
  color: #9b6dff;
  cursor: pointer;
  transition: background 0.2s;
}

.copy:hover {
  background: rgb(150 114 255 / 0.15);
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
  text-decoration: underline;
}

.age {
  font-variant-numeric: tabular-nums;
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

.tool-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 8px;
  border: 1px solid rgb(150 114 255 / 0.15);
  background: rgb(150 114 255 / 0.06);
  transition:
    border-color 0.2s,
    background 0.2s;
}

.tool-pill:hover {
  border-color: rgb(150 114 255 / 0.35);
  background: rgb(150 114 255 / 0.1);
}

.tool-pill p {
  margin: 0;
  font-size: 14px;
  color: #d0c8e8;
}

.tool-icon {
  font-size: 18px;
  color: #9b6dff;
}
</style>