import type { IMenuDT } from "@/types/menu-d-t";

// menu data
const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "Accueil",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "À propos",
    link: "/#about",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Projets",
    link: "/#projets",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Compétences",
    link: "/#competences",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Contact",
    link: "/#contact",
    has_dropdown: false,
  },
];
export default menu_data;