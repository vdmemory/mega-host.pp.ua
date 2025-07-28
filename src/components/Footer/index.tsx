"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { configCompany } from "@/lib/configCompany";
import SocialLinks from "@/components/SocialLinks";
import logo from "@/assets/logo.png";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Колонка логотипа и текста */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 flex gap-4 justify-start items-center">
                <Image
                  src={logo.src}
                  alt="logo"
                  width={50}
                  height={50}
                  className="hidden dark:block rounded-full"
                />
                {configCompany.name}
              </Link>
              <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {i18n.language === "en"
                  ? configCompany.infoEng
                  : configCompany.info}
              </p>
              <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {i18n.language === "en"
                  ? configCompany.addressEng
                  : configCompany.address}
              </p>
              <div className="flex items-center justify-start">
                <SocialLinks isLight />
              </div>
            </div>
          </div>

          {/* Ссылки */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                {t("footer.links")}
              </h2>
              <ul>
                <li>
                  <Link
                    href="#blog"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {t("nav.blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Услуги */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                {t("footer.services")}
              </h2>
              <ul>
                <li>
                  <Link
                    href="#features"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Линия */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        {/* Подвал */}
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            © 2025 {configCompany.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* SVG background elements (оставлены без изменений) */}
      {/* ... */}
    </motion.footer>
  );
};

export default Footer;
