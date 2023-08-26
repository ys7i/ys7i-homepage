import { I18nLnDict } from "./type";

export const enDict: I18nLnDict = {
  common: {
    name: "Yuhi Sakaguchi",
  },
  header: {
    home: "HOME",
    about: "About",
    blog: "Blog",
    contact: "Contact",
  },
  top: {
    whoami: "Who am I?",
    selfIntroduction: [
      "Thank you for visiting my website.",
      "I am a graduate student and freelance software engineer.",
      "I have experience in both front-end and back-end development, and I excel at adapting to a wide range of technologies.",
    ],
    detail: "Detail",
  },
  about: {
    encourageContact: ["Please contact me through the Contact page."],
  },
  contact: {
    submitted: {
      thanksMessage: [
        "Thank you",
        "I will respond to inquiries that are eligible for a reply within 5 days.",
      ],
      backToHome: "Back to Home",
    },
    encourageContact: [
      "Please feel free to contact me!",
      "I will respond to inquiries that are eligible for a reply within 5 days.",
    ],
    form: {
      name: "Your name",
      email: "Your email",
      subject: "title",
      message: "message",
      submit: "submit",
    },
  },
  footer: {
    followMeOn: "Follow Me On:",
  },
} as const;
