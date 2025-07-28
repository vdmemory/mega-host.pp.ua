"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSectionTwo = () => {
  const { t } = useTranslation();
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: true, amount: 0.2 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <motion.div
            ref={imageRef}
            className="w-full px-4 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </motion.div>

          <motion.div
            ref={textRef}
            className="w-full px-4 lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {t("about2.title")}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {t("about2.subtitle")}
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {t("about2.vision")}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {t("about2.visionText")}
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {t("about2.mission")}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {t("about2.missionText")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
