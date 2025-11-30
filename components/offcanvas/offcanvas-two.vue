<template>
  <div :class="`tp-offcanvas-area-2 tp-menu-2 ${isOffCanvasOpen?'opened':''}`">
      <div class="tp-offcanvas-shape">
         <img class="tp-offcanvas-shape-2" src="/images/offcanvas/bg-shape-3.png" alt="">
      </div>
      <div class="tp-offcanvas-circle-1">
         <span></span>
      </div>
      <div class="tp-offcanvas-circle-2">
         <span></span>
      </div>
      <div class="tp-offcanvas-wrapper">
         <div class="tp-offcanvas-top-2 d-flex align-items-center justify-content-between">
            <div class="tp-offcanvas-logo-2" style="height: 40px; overflow: visible;">
               <a href="#">
                  <img src="/images/SOURCE.svg" alt="Logo" style="height: 150px; position: relative; z-index: 10; top: -50px;">
               </a>
            </div>
            <div class="tp-offcanvas-close-2">
               <button @click="closeOffcanvas" class="tp-offcanvas-close-btn-2 tp-offcanvas-open-btn-2">
                  <svg-close/>
               </button>
            </div>
         </div>
         <div class="tp-offcanvas-main-2">
            <div class="tp-offcanvas-content-2">
               <h3 class="tp-offcanvas-content-title-2">Bonjour !</h3>
               <p>Bienvenue sur mon portfolio. N'hésitez pas à me contacter pour discuter de vos projets.</p>
            </div>
            <div class="tp-main-menu-mobile d-lg-none">
               <nav>
                  <offcanvas-menus />
               </nav>
            </div>
            <div class="tp-offcanvas-gallery">
               <div class="row gx-2">
                  <!-- Colonne gauche : InnovShop + DupontCare -->
                  <div class="col-6">
                     <div class="mb-2">
                        <div class="tp-offcanvas-gallery-img fix">
                           <nuxt-link :to="`/portfolio-details/${portfolio_data[0].id}`">
                              <img :src="portfolio_data[0].img" :alt="portfolio_data[0].title" class="gallery-img-small">
                           </nuxt-link>
                        </div>
                     </div>
                     <div class="mb-2">
                        <div class="tp-offcanvas-gallery-img fix">
                           <nuxt-link :to="`/portfolio-details/${portfolio_data[2].id}`">
                              <img :src="portfolio_data[2].img" :alt="portfolio_data[2].title" class="gallery-img-small">
                           </nuxt-link>
                        </div>
                     </div>
                  </div>
                  <!-- Colonne droite : AgencEco (grande image centrée) -->
                  <div class="col-6 d-flex align-items-center">
                     <div class="tp-offcanvas-gallery-img fix w-100">
                        <nuxt-link :to="`/portfolio-details/${portfolio_data[1].id}`">
                           <img :src="portfolio_data[1].img" :alt="portfolio_data[1].title" class="gallery-img-large">
                        </nuxt-link>
                     </div>
                  </div>
               </div>
            </div>
            <div class="tp-offcanvas-contact-2">
               <h3 class="tp-offcanvas-contact-title-2">Contact</h3>

               <ul>
                  <li><a href="mailto:contact@freelance-lm.fr">contact@freelance-lm.fr</a></li>
               </ul>
            </div>
            <div class="tp-offcanvas-social-2">
               <h3 class="tp-offcanvas-contact-title-2">Suivez-moi</h3>
               <ul>
                  <li>
                     <a href="https://github.com/Wandalf-dev" target="_blank">
                        <i class="fa-brands fa-github"></i>
                     </a>
                  </li>
                  <li>
                     <a href="https://www.linkedin.com/in/lou-marche-90b988249" target="_blank">
                        <i class="fa-brands fa-linkedin-in"></i>
                     </a>
                  </li>
                  <li>
                     <a href="mailto:contact@freelance-lm.fr">
                        <i class="fa-solid fa-envelope"></i>
                     </a>
                  </li>
                  <li>
                     <a href="#" target="_blank" class="malt-link">
                        <img src="/images/malt-svgrepo-com.svg" alt="Malt" class="malt-icon">
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import portfolio_data from '@/data/portfolio-data';

withDefaults(defineProps<{isOffCanvasOpen:boolean;}>(),{});
const emit = defineEmits();

const closeOffcanvas = () => {
  emit('closeOffcanvas');
};
</script>

<style scoped>
.malt-icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}

.malt-link:hover .malt-icon {
  filter: brightness(0) invert(0);
}

.gallery-img-small {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.gallery-img-large {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>