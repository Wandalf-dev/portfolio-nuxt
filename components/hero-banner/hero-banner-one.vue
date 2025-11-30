<template>
  <section class="tp-hero-area p-relative tp-btn-trigger z-index-1 fix theme-bg-2">
      <div class="tp-hero-social-wrapper">
        <span class="tp-hero-social-bar"></span>
        <div class="tp-hero-social">
            <a href="https://github.com/Wandalf-dev" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/lou-marche-90b988249" target="_blank">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="mailto:contact@freelance-lm.fr">
              <svg-email/>
            </a>
        </div>
      </div>
      <div class="tp-hero-shape">
        <div class="tp-hero-shape-1 background-white-mode" style="background-image:url(/images/hero/hero-overlay.png)"></div>
        <div class="tp-hero-shape-1 background-dark-mode" style="background-image:url(/images/hero/hero-overlay-2.png)"></div>
        <span class="tp-hero-shape-2"></span>
      </div>
      <div class="tp-hero-bottom-text-wrapper">
        <div class="tp-hero-bottom-text">
            <p>Développeur Full-Stack</p>
            <p>Développeur Full-Stack</p>
        </div>
        <div class="tp-hero-bottom-text">
            <p>Symfony & React</p>
            <p>Symfony & React</p>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-end">
            <div class="col-xl-12 col-lg-12 col-md-12">
              <div class="tp-hero-left-wrapper">
                  <div class="tp-hero-content tp_text_anim p-relative z-index-1">
                    <span>Lou Marche</span>
                    <h3 class="tp-hero-title cd-headline clip tp_title_anim">
                        Développeur <br>
                        <span class="cd-words-wrapper">
                          <b class="is-visible">Full-Stack</b>
                          <b class="app">Backend</b>
                          <b>Frontend</b>
                        </span>
                    </h3>

                    <p>Je conçois des architectures web robustes et des interfaces immersives. <br> Spécialisé en écosystèmes Symfony & React.</p>

                    <div class="tp-hero-btn wrap ">
                        <div class="tp-hover-btn-wrapper tp-btn-bounce">
                          <nuxt-link href="/#contact" class="tp-hover-btn tp-hover-btn-item tp-btn-circle square d-none d-md-flex">
                              <span class="tp-btn-circle-text">
                                Me <br> Contacter
                              </span>
                              <span class="tp-btn-circle-arrow">
                                <svg-circle/>
                              </span>
                              <i class="tp-btn-circle-dot"></i>
                          </nuxt-link>
                        </div>
                        <!-- Bouton classique pour mobile -->
                        <nuxt-link href="/#contact" class="tp-hero-contact-btn d-md-none">
                          <span class="btn-text">Me Contacter</span>
                          <span class="btn-icon">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 13L13 1M13 1H1M13 1V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </span>
                        </nuxt-link>
                    </div>
                    <div class="tp-hero-scroll smooth">
                        <nuxt-link to="#tp-sv">
                          <span class="tp-hero-scroll-bar"></span>
                          <span class="tp-hero-scroll-mouse"></span>
                        </nuxt-link>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">

</script>