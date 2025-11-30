<template>
 <section id="competences" class="tp-skill-area pt-115 pb-105 p-relative z-index-1 fix theme-bg-2"
       style="background-image: url(/images/skill/bg-distort.png);">
      <div class="tp-skill-shape">
        <span class="tp-skill-shape-1"></span>
        <span class="tp-skill-shape-2"></span>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-xl-12">
              <div class="tp-skill-section-title">
                  <div class="tp-section-title-wrapper tp_text_anim mb-30 text-center">
                    <div class="tp-section-title-inner tp_title_anim p-relative">
                        <span class="tp-section-subtitle">Stack Technique</span>
                        <h3 class="tp-section-title">Compétences</h3>
                    </div>
                    <p>Les technologies que je maîtrise au quotidien.</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
              <div class="tp-skill-tab tp-tab d-flex align-items-center justify-content-center mb-70">
                  <nav>
                    <div class="nav nav-tabs tp-marker-tab" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-tech-tab" data-bs-toggle="tab"
                          data-bs-target="#nav-tech" type="button" role="tab" aria-controls="nav-tech"
                          aria-selected="true">Backend</button>
                        <button class="nav-link" id="nav-design-tab" data-bs-toggle="tab"
                          data-bs-target="#nav-design" type="button" role="tab" aria-controls="nav-design"
                          aria-selected="false">Frontend & Outils</button>
                        <span id="lineMarker"></span>
                    </div>
                  </nav>
                                            
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
              <div class="tab-content" id="nav-tabContent">
                  <div v-for="(item,i) in skill_data" :key="i" :class="`tab-pane fade ${item.active ? 'show active' : ''}`" :id="`nav-${item.tab_id}`" role="tabpanel" :aria-labelledby="`nav-${item.tab_id}-tab`"
                    tabindex="0">
                    <div class="tp-skill-tab-content tp-skill-radius">
                        <div class="row">
                          <div v-for="(s,i) in item.items" :key="i" class="col-xl-2 col-lg-3 col-md-3 col-6">
                              <div class="tp-skill-item text-center">
                                <div
                                    class="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                                    <div class="tp-skill-icon">
                                      <span>
                                          <img :src="s.img" alt="" style="width: 60px; height: 60px;">
                                      </span>
                                    </div>
                                    <h3 class="tp-skill-count">
                                      <span>{{s.percent}}</span>%
                                    </h3>
                                </div>
                                <div class="tp-skill-content">
                                    <h3 class="tp-skill-title">{{s.title}}</h3>
                                </div>
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
const {tpTabLine2} = useTabLine();
const skill_data = [
  {
    tab_id: "tech",
    active: true,
    items: [
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg',
        title: "Symfony",
        percent: 95
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        title: "React",
        percent: 85
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        title: "TypeScript",
        percent: 80
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
        title: "PHP",
        percent: 95
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        title: "MySQL",
        percent: 85
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg',
        title: "WordPress",
        percent: 90
      }
    ],
  },
  {
    tab_id: "design",
    items: [
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
        title: "Vue.js",
        percent: 85,
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg',
        title: "Nuxt",
        percent: 80,
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        title: "Figma",
        percent: 80,
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        title: "Tailwind CSS",
        percent: 95
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
        title: "Docker",
        percent: 75
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        title: "Git",
        percent: 90
      }
    ],
  }
];

onMounted(() => {
  tpTabLine2();
})
</script>