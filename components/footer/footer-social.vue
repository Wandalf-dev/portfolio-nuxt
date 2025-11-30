<template>
  <template v-if="!style_2">
    <div
      v-for="item in footer_social"
      :key="item.id"
      class="col-xl-4 col-lg-4 col-md-6 mb-30"
    >
      <a :href="item.link" target="_blank">
        <div
          class="tp-footer-social-item d-flex align-items-center justify-content-between"
        >
          <span class="tp-footer-anim-border"></span>
          <div class="tp-footer-social-text z-index-1">
            <span class="child-1">{{ item.name }}</span>
            <span class="child-2">{{ item.title }}</span>
          </div>
          <div class="tp-footer-social-icon z-index-1">
            <span v-html="item.icon"></span>
          </div>
        </div>
      </a>
    </div>
  </template>

  <div v-if="style_2" class="tp-footer-4__social">
    <a v-for="s in social_2" :key="s.id" :href="s.link" target="_blank">
      <span v-html="s.icon"></span>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{ style_2?: boolean }>();
const footer_social = [
  {
    id: 1,
    name: "GitHub",
    title: "@Wandalf-dev",
    link: "https://github.com/Wandalf-dev",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  },
  {
    id: 2,
    name: "LinkedIn",
    title: "Lou Marche",
    link: "https://www.linkedin.com/in/lou-marche-90b988249",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    id: 3,
    name: "Malt",
    title: "Freelance",
    link: "https://www.malt.fr/profile/loumarche",
    icon: `<svg width="18" height="18" viewBox="0 0 512 512" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><path d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"/></svg>`,
  },
];

const social_2 = [
  {
    id: 1,
    link: "https://www.behance.net",
    icon: `<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.25 13.75H4.75C2.5 13.75 1 12.625 1 10V4.75C1 2.125 2.5 1 4.75 1L12.25 1C14.5 1 16 2.125 16 4.75V10C16 12.625 14.5 13.75 12.25 13.75Z" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> <path d="M12.25 5.12488L9.9025 6.99988C9.13 7.61488 7.8625 7.61488 7.09 6.99988L4.75 5.12488" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10"  stroke-linecap="round" stroke-linejoin="round" /></svg>`,
  },
  {
    id: 2,
    link: "https://www.dribbble.com",
    icon: `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.50589 12.2494C4.57662 15.836 9.16278 17.0648 12.7494 14.9941C14.2113 14.15 15.2816 12.888 15.8962 11.4461C16.7895 9.35066 16.7208 6.87526 15.4941 4.75063C14.2674 2.62599 12.1581 1.32872 9.89669 1.05462C8.34063 0.866 6.71259 1.16183 5.25063 2.00589C1.66403 4.07662 0.435172 8.66278 2.50589 12.2494Z" stroke="currentcolor" stroke-width="1.5" /> <path d="M12.712 14.9291C12.712 14.9291 12.0079 9.98655 10.5004 7.37547C8.99289 4.76439 5.28862 2.07143 5.28862 2.07143M5.68375 15.1123C6.79479 11.7605 12.3392 8.04512 16.3967 8.93525M12.3103 1.90808C11.1945 5.22332 5.75659 8.88441 1.71802 8.08903" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" /> </svg>`,
  },
  {
    id: 3,
    link: "mailto:xyz@example.com",
    icon: `<svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 5.50008H6.25009C7.52511 5.50008 8.50013 6.47509 8.50013 7.75012C8.50013 9.02514 7.52511 10.0002 6.25009 10.0002H1.75001C1.30001 10.0002 1 9.70015 1 9.25014V1.75001C1 1.30001 1.30001 1 1.75001 1H5.50008C6.7751 1 7.75012 1.97502 7.75012 3.25004C7.75012 4.52506 6.7751 5.50008 5.50008 5.50008H1Z" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" /> <path d="M9.99988 7.00005H16C16 5.35002 14.65 4 12.9999 4C11.3499 4 9.99988 5.35002 9.99988 7.00005ZM9.99988 7.00005C9.99988 8.65008 11.3499 10.0001 12.9999 10.0001H14.275" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> <path d="M14.1249 2.125H11.8749" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> </svg>`,
  },
  {
    id: 4,
    link: "https://www.youtube.com",
    icon: `<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.75 13H5.25C3 13 1.5 11.5 1.5 9.25V4.75C1.5 2.5 3 1 5.25 1H12.75C15 1 16.5 2.5 16.5 4.75V9.25C16.5 11.5 15 13 12.75 13Z" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> <path d="M8.70822 5.14898L10.802 6.40526C11.5558 6.90777 11.5558 7.66154 10.802 8.16405L8.70822 9.42033C7.8707 9.92285 7.20068 9.50409 7.20068 8.58281V6.07025C7.20068 4.98147 7.8707 4.64646 8.70822 5.14898Z" fill="currentcolor" /> </svg>`,
  },
];
</script>
