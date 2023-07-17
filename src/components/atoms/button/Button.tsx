import { AppText } from "../text/Text";
import "./Button.scss";

interface ButtonProps {
  text: string;
}

export function AppButton({ text }: ButtonProps) {
  return (
    <button class="app-button">
      <p>{text}</p>
    </button>
  );
}
