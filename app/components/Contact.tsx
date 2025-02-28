import Image from "next/image";
import React from "react";
import personal from "@/data/personal.json";
import contacts from "@/data/contacts.json";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="card relative items-center mx-6 flex flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px]"
    >
      <div className="flex flex-col gap-5 items-center justify-between md:w-full">
        <h2 className="font-semibold text-[20px] md:text-[35px] md:max-w-[462px] text-center">
          📞 Want me in your team?
        </h2>
        <div className="flex flex-col gap-5 items-center justify-center w-full">
          <a
            href={`mailto:${personal[0].email}`}
            className="self-center bg-primary text-white p-2.5 rounded-full flex gap-2.5 items-center justify-center text-lg md:text-xl/l font-normal"
          >
            Let's get in touch!
            <Image src="/mail_icon.svg" alt="mail" width={20} height={20} />
          </a>

          {/* Social media links */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 w-full">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="flex items-center gap-2 p-2 bg-white bg-opacity-10 rounded-full transition hover:bg-opacity-20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={contact.icon}
                  alt={contact.name}
                  width={20}
                  height={20}
                />
                <span className="text-sm md:text-base font-medium">
                  {contact.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <small>
        Copyright &copy; {personal[0].name} {new Date().getFullYear()}
      </small>
    </section>
  );
};

export default Contact;
