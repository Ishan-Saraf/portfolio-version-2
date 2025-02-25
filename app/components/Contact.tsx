import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="card relative items-center mx-6 flex flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px]"
    >
      <div className="flex flex-col gap-5 items-center justify-between md:w-full">
        <h2 className="font-semibold text-[22px] md:text-[40px] md:max-w-[462px]">
          Want me in your team?
        </h2>
        <div className="flex flex-col gap-5 items-center md:items-end">
          <a
            href="mailto:your-email@example.com"
            className="self-center md:self-start bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-lg md:text-xl/l font-normal"
          >
            Let's get in touch!
            <Image src="/mail_icon.svg" alt="mail" width={20} height={20} />
          </a>
          <div className="flex flex-row gap-1 items-center justify-center w-full">
            <a
              href="https://www.github.com/your-username"
              className="contact-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github_logo_dark.svg"
                alt="github"
                width={16}
                height={17}
                className="hidden dark:block"
              />
              <Image
                src="/github_logo.svg"
                alt="github"
                width={16}
                height={17}
                className="dark:hidden"
              />
            </a>
          </div>
        </div>
      </div>
      <small>Copyright &copy; Your Name {new Date().getFullYear()}</small>
    </section>
  );
};

export default Contact;
