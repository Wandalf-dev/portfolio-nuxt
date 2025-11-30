<template>
  <div>
    <nuxt-layout name="layout-one">
      
    <!-- hero banner -->
    <hero-banner-one />
    <!-- hero banner -->

    <!-- brand area -->
    <brand-area-one />
    <!-- brand area -->

    <!-- service area -->
    <service-area-one />
    <!-- service area -->

    <!-- about area -->
    <about-area-one />
    <!-- about area -->

    <!-- portfolio area -->
    <portfolio-area />
    <!-- portfolio area -->

    <!-- skill area -->
    <skill-area />
    <!-- skill area -->

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Lou Marche - Développeur Full-Stack" });
definePageMeta({ layout: false });
import {animatedHeadline} from '@/utils/animatedHeadline';
import {buttonAnimation} from '@/utils/buttonAnimation';

onMounted(() => {
  useSmoothScroll();
  
  setTimeout(() => {
    animatedHeadline();
    useAnimationTitle();
    buttonAnimation();
    useScrollTextAnimation();
  },0)
})
</script>
