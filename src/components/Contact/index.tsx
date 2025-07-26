'use client';

import { useTranslation } from "react-i18next";
import AnimatedSection from "../Common/AnimatedSection";
import AnimatedText from "../Common/AnimatedText";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <AnimatedText
                text={t('contact.title')}
                as="h2"
                className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl"
                delay={0.1}
              />
              <AnimatedText
                text={t('contact.subtitle')}
                as="p"
                className="mb-12 text-base font-medium text-body-color"
                delay={0.2}
              />
              <AnimatedSection delay={0.3}>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          {t('contact.name')}
                        </label>
                        <input
                          type="text"
                          placeholder={t('contact.name')}
                          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          {t('contact.email')}
                        </label>
                        <input
                          type="email"
                          placeholder={t('contact.email')}
                          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          {t('contact.message')}
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder={t('contact.message')}
                          className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                        {t('contact.send')}
                      </button>
                    </div>
                  </div>
                </form>
              </AnimatedSection>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <AnimatedSection delay={0.4} direction="left">
              <NewsLatterBox />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
