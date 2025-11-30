<template>
  <section id="tp-sv" class="tp-services-area tp-sv tp-services-bg-text-animation fix">
      <div class="container container-large">
        <div class="tp-services-inner pb-195 p-relative z-index-1">

            <span class="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span class="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div class="row gx-0">
              <div class="col-12">
                  <div class="tp-services-wrapper p-relative pt-100 pr-70">
                    <div class="tp-section-title-wrapper tp_text_anim mb-50">
                        <div class="tp-section-title-inner p-relative">
                          <span class="tp-section-subtitle">Services</span>
                          <h3 class="tp-section-title tp_title_anim">Ce que <br> je propose.</h3>
                        </div>
                        <p>Des solutions web sur-mesure, de la conception à la mise en production.</p>
                    </div>
                  </div>
              </div>
              <div class="col-12">
                  <div class="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative">
                    <div class="accordion" id="accordionExample">
                        <div v-for="(item) in accordion_data" :key="item.id" :class="`accordion-item tp-services-accordion-item ${item.active ? 'active' :''}`">
                          <h2 class="accordion-header" :id="`heading-${item.tab_id}`">
                              <button :class="`accordion-button ${item.active ? '' : 'collapsed'}`" type="button"
                                data-bs-toggle="collapse" :data-bs-target="`#collapse-${item.tab_id}`" :aria-expanded="`${item.active ? 'true' : 'false'}`" :aria-controls="`collapse-${item.tab_id}`">
                                <span>{{`${item.id > 9 ? item.id : `0${item.id}`}`}}</span>
                                {{item.question}}
                              </button>
                          </h2>
                          <div :id="`collapse-${item.tab_id}`" :class="`accordion-collapse collapse ${item.active ? 'show' : ''}`" :aria-labelledby="`heading-${item.tab_id}`" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <p>{{item.answer}} </p>
                                <ul>
                                    <li v-for="(l,i) in item.lists" :key="i">{{l}}</li>
                                </ul>
                              </div>
                          </div>
                          <span class="accordion-item-border"></span>
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
const accordion_data = [
    {
      id: 1,
      tab_id: "one",
      question: "Développement Backend",
      answer: "Conception d'architectures robustes et scalables avec les meilleures pratiques.",
      lists: [
        "API REST / GraphQL",
        "Symfony & PHP",
        "Base de données MySQL",
      ]
    },
    {
      id: 2,
      tab_id: "two",
      active:true,
      question: "Développement Frontend",
      answer: "Interfaces modernes et réactives pour une expérience utilisateur optimale.",
      lists: [
        "React & TypeScript",
        "Vue.js & Nuxt",
        "Tailwind CSS",
      ]
    },
    {
      id: 3,
      tab_id: "three",
      question: "Sites Web & E-commerce",
      answer: "Création de sites vitrines et boutiques en ligne performants.",
      lists: [
        "Sites sur-mesure",
        "WordPress & WooCommerce",
        "Optimisation SEO",
      ]
    },
    {
      id: 4,
      tab_id: "four",
      question: "Maintenance & Évolution",
      answer: "Accompagnement technique et évolution de vos projets existants.",
      lists: [
        "Correction de bugs",
        "Ajout de fonctionnalités",
        "Migration & refactoring",
      ]
    }
  ];
</script>
