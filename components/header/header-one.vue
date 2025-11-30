<template>
  <div>
    <header>
      <div class="tp-header-area tp-header-mob-space tp-header-transparent p-relative">
        <span class="tp-header-border" style="width: 100%"></span>
        <div class="container container-large">
          <div class="tp-header-box p-relative">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-2 col-md-5 col-6">
                <div class="logo" style="position: relative; height: 50px;">
                  <nuxt-link href="/">
                    <img src="/images/SOURCE.svg" alt="Logo" style="height: 100px; width: auto; position: absolute; top: -20px" />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xl-6 col-lg-7 d-none d-lg-block">
                <div class="main-menu">
                  <nav class="tp-main-menu-content">
                    <!-- header nav -->
                    <header-nav />
                    <!-- header nav -->
                  </nav>
                </div>
              </div>
              <div class="col-xl-4 col-lg-3 col-md-7 col-6">
                <div class="tp-header-right d-flex align-items-center justify-content-end">
                  <div class="tp-header-cv d-none d-md-block">
                    <a class="tp-header-cv-btn" href="/cv/cv-lou-marche.pdf" download="CV-Lou-Marche.pdf">
                      <svg-download />
                    </a>
                  </div>
                  <div class="tp-header-hamburger ml-20">
                    <button
                      @click="handleOffCanvas"
                      class="tp-hamburger-btn tp-hamburger-btn-white tp-menu-bar tp-offcanvas-open-btn-2"
                      type="button"
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header area end -->

    <!-- header area start -->
    <header>
      <div id="sticky-header" :class="`tp-header-area tp-header-mob-space tp-header-transparent p-relative tp-int-menu tp-header-sticky-cloned ${isStickyVisible && sticky?'tp-header-pinned':''}`">
        <div class="container container-large">
          <div class="tp-header-box p-relative">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-2 col-md-5 col-6">
                <div class="logo" style="position: relative; height: 50px;">
                  <nuxt-link href="/">
                    <img src="/images/SOURCE.svg" alt="Logo" style="height: 100px; width: auto; position: absolute; top: -20px" />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xl-6 col-lg-7 d-none d-lg-block">
                <div class="main-menu">
                  <nav class="tp-main-menu-content">
                    <!-- header nav -->
                    <header-nav />
                    <!-- header nav -->
                  </nav>
                </div>
              </div>
              <div class="col-xl-4 col-lg-3 col-md-7 col-6">
                <div class="tp-header-right d-flex align-items-center justify-content-end">
                  <div class="tp-header-cv d-none d-md-block">
                    <a class="tp-header-cv-btn" href="/cv/cv-lou-marche.pdf" download="CV-Lou-Marche.pdf">
                      <svg-download />
                    </a>
                  </div>
                  <div class="tp-header-hamburger ml-20">
                    <button
                      @click="handleOffCanvas"
                      class="tp-hamburger-btn tp-hamburger-btn-white tp-menu-bar tp-offcanvas-open-btn-2"
                      type="button"
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header area end -->
  </div>

  <!-- offcanvas area start -->
  <offcanvas-two :isOffCanvasOpen="isOffCanvasOpen" @close-offcanvas="handleOffCanvas"/>
  <!-- offcanvas area end -->
</template>

<script setup lang="ts">
const {sticky,isStickyVisible} = useSticky();

const isOffCanvasOpen = ref<boolean>(false);

const handleOffCanvas = () => {
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};
</script>
