<template>
  <span ref="counterRef">{{ count }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  min: number;
  max: number;
}>();

const count = ref(props.min);
const counterRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const isMobile = window.innerWidth < 992;

  // Sur mobile, afficher directement le nombre final sans animation
  if (isMobile) {
    count.value = props.max;
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  if (counterRef.value) {
    observer.observe(counterRef.value);
  }
});

const animateCounter = () => {
  const duration = 2000;
  const steps = 60;
  const increment = (props.max - props.min) / steps;
  const stepDuration = duration / steps;

  let current = props.min;
  const timer = setInterval(() => {
    current += increment;
    if (current >= props.max) {
      count.value = props.max;
      clearInterval(timer);
    } else {
      count.value = Math.floor(current);
    }
  }, stepDuration);
};
</script>
