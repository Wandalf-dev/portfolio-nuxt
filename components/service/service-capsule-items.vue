<template>
  <div class="tp-services-capsule-item-wrapper">
    <p v-for="(s, i) in services" :key="i" data-tp-throwable-el="">
      <span
        class="tp-services-capsule-item"
        :data-bg-color="s.bgColor"
        :data-text-color="`${s.textColor ? s.textColor : ''}`"
        :style="{ backgroundColor: s.bgColor, color: s.textColor }"
      >
        {{ s.name }}
      </span>
    </p>
    <p data-tp-throwable-el="">
      <span>
        <img src="/images/services/shape/services-shape-1.png" alt="" />
      </span>
    </p>
    <p data-tp-throwable-el="">
      <span>
        <img src="/images/services/shape/services-shape-2.png" alt="" />
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
const services = [
  { name: "Symfony", bgColor: "#00CC97" },
  { name: "React", bgColor: "#19B3F1" },
  { name: "API REST", bgColor: "#FF759C" },
  { name: "TypeScript", bgColor: "#FFDB59", textColor: "#121212" },
  { name: "MySQL", bgColor: "#00CC97" },
  { name: "Docker", bgColor: "#19B3F1" },
  { name: "Tailwind CSS", bgColor: "#FF759C" },
  { name: "WordPress", bgColor: "#FFDB59", textColor: "#121212" },
];
</script>
