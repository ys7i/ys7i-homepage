import { I18nLnDict } from "./type";

export const jpDict: I18nLnDict = {
  common: {
    name: "阪口 裕飛",
  },
  header: {
    home: "ホーム",
    about: "自己紹介",
    blog: "ブログ",
    contact: "お問い合わせ",
  },
  top: {
    whoami: "詳細",
    selfIntroduction: [
      "京都大学情報学研究科で大学院生として研究する傍らフリーランスのソフトウェアエンジニアとして活動しています。",
      "フロントエンドからバックエンドまで、色々な技術に触れるのが好きです。",
    ],
    detail: "詳細",
  },
  about: {
    encourageContact: [
      "ご質問やご要望がありましたら",
      "お気軽に問い合わせページからメッセージをお送りください",
    ],
  },
  notfound: {
    title: "404",
    message: "申し訳ありません。お探しのページが見つかりませんでした。",
  },
  contact: {
    submitted: {
      thanksMessage: [
        "お問い合わせありがとうございます。",
        "返信可能なものに関しましては5日以内にご連絡差し上げます。",
      ],
      backToHome: "ホームへ",
    },
    encourageContact: [
      "お気軽にご連絡ください。",
      "返答可能なお問い合わせについては、5日以内に返信いたします。",
    ],
    form: {
      name: "氏名",
      email: "メールアドレス",
      subject: "件名",
      message: "内容",
      submit: "提出",
    },
  },
  footer: {
    followMeOn: "",
  },
} as const;
