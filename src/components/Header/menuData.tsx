import { useTranslation } from "react-i18next";
import { Menu } from "@/types/menu";

const useMenuData = () => {
  const { t } = useTranslation();

  return [
    {
      id: 2,
      title: t('nav.about'),
      key: "#about",
    },
    {
      id: 1,
      title: t('nav.services'),
      key: "#services",
    },
    {
      id: 3,
      title: t('nav.blog'),
      key: "#blog",
    },
    {
      id: 4,
      title: t('nav.contact'),
      key: "#contact",
    },
  ];
};

export default useMenuData;
