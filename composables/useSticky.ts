import { ref, onMounted, onUnmounted } from 'vue';

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

const useSticky = () => {
  const sticky = ref<boolean>(false);
  const isStickyVisible = ref<boolean>(false);

  let lastScrollTop = 0;
  let scrollHandler: EventListener | null = null;

  const handleScroll = (): void => {
    const headerElement = document.getElementById('sticky-header');
    const headerHeight = headerElement?.offsetHeight || 0;

    const windowTop = window.scrollY;

    if (windowTop >= headerHeight) {
      sticky.value = true;
    } else {
      sticky.value = false;
      isStickyVisible.value = false;
    }

    if (sticky.value) {
      if (windowTop < lastScrollTop) {
        isStickyVisible.value = true;
      } else {
        isStickyVisible.value = false;
      }
    }

    const currentScrollTop = windowTop;
    if (currentScrollTop <= 500) {
      document.querySelector('.tp-int-menu')?.classList.remove('tp-header-pinned');
    }
    lastScrollTop = windowTop;
  };

  onMounted(() => {
    const isMobile = window.innerWidth < 992;
    // Throttle à 100ms sur mobile pour réduire les lags
    scrollHandler = isMobile
      ? throttle(handleScroll, 100) as EventListener
      : handleScroll;
    window.addEventListener('scroll', scrollHandler, { passive: true });
  });

  onUnmounted(() => {
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler);
    }
  });

  return {
    sticky,
    isStickyVisible,
  };
};

export default useSticky;
