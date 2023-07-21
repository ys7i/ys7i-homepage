type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends (infer R)[]
    ? DeepReadonlyArray<R>
    : T[K] extends Function
    ? T[K]
    : T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

export type I18nLnDict = DeepReadonly<{
  common: {
    name: string;
  };
  header: {
    home: string;
    about: string;
    blog: string;
    contact: string;
  };
  top: {
    whoami: string;
    selfIntroduction: string[];
    detail: string;
  };
  about: {
    encourageContact: string;
  };
  contact: {
    submitted: {
      thanksMessage: string[];
      backToHome: string;
    };
    encourageContact: string[];
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    followMeOn: string;
  };
}>;

export type I18nAllDict = DeepReadonly<{
  en: I18nLnDict;
  jp: I18nLnDict;
}>;
