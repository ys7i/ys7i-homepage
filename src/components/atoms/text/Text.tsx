import "./Text.scss";
import { JSX, Match, Show, Switch } from "solid-js";
import { useI18n } from "@solid-primitives/i18n";

interface TextProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption";
  text: JSX.Element;
  inputClass?: string;
}

export function AppText({ variant, text, inputClass = "primary" }: TextProps) {
  return (
    <Switch fallback={<p class={inputClass}>{text}</p>}>
      <Match when={variant === "h1"}>
        <h1 class={inputClass}>{text}</h1>
      </Match>
      <Match when={variant === "h2"}>
        <h2 class={inputClass}>{text}</h2>
      </Match>
      <Match when={variant === "h3"}>
        <h3 class={inputClass}>{text}</h3>
      </Match>
      <Match when={variant === "h4"}>
        <h4 class={inputClass}>{text}</h4>
      </Match>
      <Match when={variant === "h5"}>
        <h5 class={inputClass}>{text}</h5>
      </Match>
      <Match when={variant === "h6"}>
        <h6 class={inputClass}>{text}</h6>
      </Match>
      <Match when={variant === "caption"}>
        <p class={inputClass}>
          <small>{text}</small>
        </p>
      </Match>
    </Switch>
  );
}

type TranslatableTextProps = {
  text?: string;
  translationKey?: string;
};

function TranslatableText({ text, translationKey }: TranslatableTextProps) {
  const [t] = useI18n();
  return (
    <Show when={translationKey} fallback={text ?? ""}>
      {t(translationKey ?? "")}
    </Show>
  );
}
