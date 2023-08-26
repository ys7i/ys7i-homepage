import { useI18n } from "@solid-primitives/i18n";
import { AppText } from "../text/Text";
import "./Button.scss";

interface ButtonProps {
  key: string;
  onClick?: () => void;
  type?: "submit" | "button";
}

export function AppButton({
  key,
  onClick = () => {},
  type = "button",
}: ButtonProps) {
  const [t] = useI18n();
  return (
    <button class="app-button" onClick={onClick} type={type}>
      <p>{t(key)}</p>
    </button>
  );
}
