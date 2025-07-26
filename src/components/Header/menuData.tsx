import { useTranslation } from "react-i18next";
import { Menu } from "@/types/menu";

const useMenuData = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: t('nav.home'),
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: t('nav.about'),
      path: "/about",
      newTab: false,
    },
    {
      id: 33,
      title: t('nav.blog'),
      path: "/blog",
      newTab: false,
    },
    {
      id: 3,
      title: t('nav.contact'),
      path: "/contact",
      newTab: false,
    },
    {
      id: 4,
      title: t('nav.pages'),
      newTab: false,
      submenu: [
        {
          id: 41,
          title: "About Page",
          path: "/about",
          newTab: false,
        },
        {
          id: 42,
          title: "Contact Page",
          path: "/contact",
          newTab: false,
        },
        {
          id: 43,
          title: "Blog Grid Page",
          path: "/blog",
          newTab: false,
        },
        {
          id: 44,
          title: "Blog Sidebar Page",
          path: "/blog-sidebar",
          newTab: false,
        },
        {
          id: 45,
          title: "Blog Details Page",
          path: "/blog-details",
          newTab: false,
        },
        {
          id: 46,
          title: "Sign In Page",
          path: "/signin",
          newTab: false,
        },
        {
          id: 47,
          title: "Sign Up Page",
          path: "/signup",
          newTab: false,
        },
        {
          id: 48,
          title: "Error Page",
          path: "/error",
          newTab: false,
        },
      ],
    },
  ];
};

export default useMenuData;
