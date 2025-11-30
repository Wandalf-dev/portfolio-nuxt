<template>
  <section id="projets" class="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix">
      <div class="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center">
        <p>Projets</p>
        <p>Projets</p>
        <p>Projets</p>
        <p>Projets</p>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="tp-portfolio-wrapper pr-30 pt-55">
                  <div class="tp-section-title-wrapper mb-60">
                    <div class="tp-section-title-inner tp_title_anim p-relative">
                        <span class="tp-section-subtitle tp-portfolio-subtitle">Portfolio</span>
                        <h3 class="tp-section-title tp_title_anim">Mes <br> projets</h3>
                    </div>
                  </div>

                  <div class="tp-portfolio-item-wrapper">
                    <!-- portfolio item -->
                    <portfolio-item :item="portfolio_items[0]" />
                  </div>

                  
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="tp-portfolio-item-wrapper pl-50">
                  <!-- portfolio item -->
                  <portfolio-item v-for="item in portfolio_items.slice(1,3)" :key="item.id" :item="item" />
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import portfolio_data from '@/data/portfolio-data';
const portfolio_items = [...portfolio_data].slice(0,3);

</script>