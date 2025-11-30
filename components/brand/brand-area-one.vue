<template>
  <section class="tp-brand-area p-relative">
      <span class="tp-brand-border transition-3"></span>
      <div class="container container-large">
        <div class="tp-brand-inner p-relative">
            <span class="tp-brand-inner-border left tp-vertical-line"></span>
            <span class="tp-brand-inner-border right tp-vertical-line"></span>

            <div class="row align-items-center">
              <div class="col-xl-3 col-lg-3 col-md-5">
                  <h3 class="tp-brand-title">Technologies <br> que j'utilise</h3>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-7">
                  <div class="tp-brand-slider">
                    <div class="tp-brand-slider-active swiper-container fix">
                        <swiper v-bind="slider_setting" class="swiper-wrapper align-items-center">
                          <swiper-slide v-for="(b,i) in brands" :key="i" class="tp-brand-item">
                              <a href="#" class="brand-icon-wrapper">
                                <img :src="b" alt="brand" class="brand-icon">
                              </a>
                          </swiper-slide>
                        </swiper>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import {Swiper,SwiperSlide} from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

const brands = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg',
];

const slider_setting = {
  modules: [Autoplay],
  slidesPerView: 5,
  spaceBetween: 64,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".tp-brand-slider-button-next",
    prevEl: ".tp-brand-slider-button-prev",
  },
  pagination: {
    el: ".tp-brand-slider-dot",
    clickable: true,
  },
  breakpoints: {
    '1400': {
      slidesPerView: 5,
      spaceBetween: 64,
    },
    '1200': {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    '992': {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    '768': {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    '576': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '0': {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
};
</script>

<style scoped>
.tp-brand-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
}

.brand-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
</style>