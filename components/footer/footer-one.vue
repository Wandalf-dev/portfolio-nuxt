<template>
 <footer>

  <div id="contact" :class="`tp-footer-bg ${cls}`"  :style="`background-image: url(${bgImg});`">
    <div class="tp-footer-circle-1">
        <span></span>
    </div>
    <div class="tp-footer-circle-2">
        <span></span>
    </div>
    <div class="tp-footer-circle-3" data-speed=".7">
        <span></span>
    </div>
    <!-- footer area start -->
    <div :class="`tp-footer-area ${style_2?'tp-footer-inner__customize':''} pt-120 pb-80`">
        <div class="container">
          <div class="row">
              <div class="col-xl-12">
                <div class="tp-footer-content text-center">
                    <h3 :class="`tp-footer-title ${style_2?'':'big'} tp_title_anim`">Discutons de votre <br> prochain projet</h3>
                </div>
              </div>
          </div>
          <div class="tp-footer-btn-box">
              <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-6 col-md-8">
                    <div class="tp-footer-btn text-center ">
                      <a :class="`${style_2?'tp-btn-white-xl':'tp-btn-green'} w-100`" href="mailto:contact@freelance-lm.fr">
                          <div>
                            <span>Envoyer un message</span>
                          </div>
                      </a>
                    </div>
                </div>
              </div>
          </div>
          <div class="row gx-50">
              <footer-social />
          </div>
        </div>
    </div>
    <!-- footer area end -->

    <!-- copyright area start -->
    <div class="tp-copyright-area pb-20">
        <div class="container">
          <div class="row">
              <div class="col-xl-6 col-md-6">
                <div class="tp-copyright-content-left text-center text-md-start">
                    <p>{{new Date().getFullYear()}} Lou Marche, Tous droits réservés</p>
                </div>
              </div>
              <div class="col-xl-6 col-md-6">
                <div class="tp-copyright-content-right text-center text-md-end">
                    <span>{{new Date().getFullYear()}} Portfolio</span>
                </div>
              </div>
          </div>
        </div>
    </div>
    <!-- copyright area end -->
  </div>

</footer>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{cls?:string;style_2?:boolean}>(),{
  cls:'tp-footer-bg-light p-relative fix z-index-1 theme-bg-2',
  style_2:false
});
const bgImg = ref<string>(props.style_2 ? '/images/footer/overly-bg-2.png' : '/images/skill/bg-distort.png');
</script>