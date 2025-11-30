<template>
 <section id="about" class="tp-about-area fix">
      <div class="container container-large">
        <div class="tp-about-inner pt-145 pb-80">
            <span class="tp-about-inner-border transition-3"></span>
            <div class="row">
              <div class="col-xl-5 col-lg-5">
                  <div class="tp-about-wrapper">
                    <div class="tp-section-title-wrapper p-relative mb-45">
                        <span class="tp-section-subtitle-bg">À propos</span>
                        <span class="tp-section-subtitle tp-section-subtitle-1 tp-about-subtitle">À propos</span>
                    </div>
                    <div class="tp-about-thumb-wrapper p-relative z-index-1">
                        <div class="tp-about-thumb p-relative z-index-1">
                          <div class="tp-about-thumb-bg-shape include-bg" style="background-image:url(/images/about/shape/about-shape-1.png)"></div>
                          <img src="/images/about/Gemini_Generated_Image_kt9lf8kt9lf8kt9l-removebg-preview.png" alt="">
                        </div>
                    </div>
                  </div>
              </div>
              <div class="col-xl-7 col-lg-7">
                  <div class="tp-about-desc">
                    <div class="tp-about-desc-content mb-40">
                        <p>Salut ! Je suis <span>Lou</span>, développeur web <span>Full Stack Junior</span> passionné par le code. J'adore créer des <span>interfaces frontend</span> élégantes et intuitives, tout en maîtrisant les rouages du <span>backend</span>. Curieux et motivé, je suis toujours prêt à relever de nouveaux défis techniques !</p>
                    </div>
                    <div class="tp-about-fact">
                        <div class="row">
                          <div class="col-md-4 col-sm-6 mb-30">
                              <div class="tp-about-fact-item">
                                <h4><client-only><counter-item :min="0" :max="100" /></client-only>k+</h4>
                                <p>Lignes de code écrites</p>
                              </div>
                          </div>
                          <div class="col-md-4 col-sm-6 mb-30">
                              <div class="tp-about-fact-item">
                                <h4><client-only><counter-item :min="0" :max="500" /></client-only>+</h4>
                                <p>Tasses de café</p>
                              </div>
                          </div>
                          <div class="col-md-4 col-sm-6 mb-30">
                              <div class="tp-about-fact-item">
                                <h4><client-only><counter-item :min="0" :max="999" /></client-only>+</h4>
                                <p>Bugs corrigés</p>
                              </div>
                          </div>
                        </div>
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