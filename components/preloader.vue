<template>
  <div v-if="loading" class="preloader">
    <div class="preloader-inner">
      <div class="preloader-spinner"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);

onMounted(() => {
  // Court délai pour laisser le CSS se charger
  setTimeout(() => {
    loading.value = false;
  }, 100);
});
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #171C35;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.preloader-inner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(167, 139, 250, 0.2);
  border-top-color: #A78BFA;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
