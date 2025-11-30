<template>
  <div class="back-to-top-wrapper">
      <button id="back_to_top" type="button" class="back-to-top-btn">
         <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
               stroke-linejoin="round" />
         </svg>
      </button>
   </div>
</template>

<script setup lang="ts">
// Throttle helper pour limiter les appels sur mobile
const throttle = (func: Function, limit: number) => {
  let inThrottle = false;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

onMounted(() => {
  const result = document.querySelector(".back-to-top-wrapper");
  if (result) {
    const isMobile = window.innerWidth < 992;

    const handleScroll = () => {
      if (window.scrollY > 200) {
        result.classList.add("back-to-top-btn-show");
      } else {
        result.classList.remove("back-to-top-btn-show");
      }
    };

    // Throttle à 150ms sur mobile pour réduire les lags
    const scrollHandler = isMobile ? throttle(handleScroll, 150) : handleScroll;
    document.addEventListener("scroll", scrollHandler, { passive: true });

    result.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
</script>