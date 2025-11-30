import type { IPortfolioDT } from "@/types/portfolio-d-t";

const  portfolio_data:IPortfolioDT[] = [
  {
    id: 1,
    img: '/images/JzKcier2vm.png',
    title: 'InnovShop',
    category: 'E-commerce',
    description: 'Site e-commerce innovant avec marketplace intégrée.',
    tech: ['React', 'Symfony', 'API Platform'],
    year: '2025',
    url: 'https://innovshopp.alwaysdata.net/',
  },
  {
    id: 2,
    img: '/images/projects/OqvulqpAJi.png',
    title: 'AgencEco',
    category: 'Site Vitrine',
    description: 'Site vitrine d\'agence écologique mettant en avant des projets durables.',
    tech: ['HTML', 'CSS', 'JS', 'API REST'],
    year: '2025',
    url: 'https://agenc-eco.alwaysdata.net/',
  },
  {
    id: 3,
    img: '/images/dwodN79zGN.png',
    title: 'DupontCare',
    category: 'Application Web',
    description: 'Plateforme de gestion de rendez-vous dentaire avec planning dynamique.',
    tech: ['PHP', 'JS', 'MySQL', 'CSS', 'HTML'],
    year: '2025',
    url: 'https://dupontcare.wuaze.com/',
  }
]

export default portfolio_data;