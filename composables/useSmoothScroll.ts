import { gsap } from "gsap";

export default function useSmoothScroll() {
  // Désactiver smooth scroll sur mobile (< 992px)
  const isMobile = window.innerWidth < 992;
  const isSmoothScroll = ref<boolean>(!isMobile);

  const { $ScrollSmoother, $ScrollTrigger } = useNuxtApp();
  gsap.registerPlugin($ScrollTrigger as any, $ScrollSmoother as any);

  if (isSmoothScroll.value) {
    const smother = $ScrollSmoother as any;
    smother.create({
      smooth: 1.35,
      effects: true,
      smoothTouch: false,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });
  }
}